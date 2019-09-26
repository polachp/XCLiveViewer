import { ConnectionState } from "./XContestInterface";

export default class XContestSocket {
  constructor(onStateChanged, onInfoMessage, onTracklogMessage) {
    this.setConnectionState = onStateChanged;
    this.dispatchInfoMessage = onInfoMessage;
    this.dispatchTracklogMessage = onTracklogMessage;
    this.connect();
  }

  connect() {
    if ("WebSocket" in window) {
      this.setConnectionState(ConnectionState.CONNECTING);
      this.sock = new WebSocket("wss://live.xcontest.org/websock/webclient");
      this.sock.onopen = this.onOpen;
      this.sock.onmessage = this.onMessage;
      this.sock.onclose = this.onClose;
      this.sock.onerror = this.onError;
    } else {
      this.setConnectionState(ConnectionState.ERROR);
      // The browser doesn't support WebSocket
      alert("WebSocket NOT supported by your Browser!");
    }
  }

  onOpen = () => {
    this.handleReset();
    console.log("WebSocket: Open!");
    this.setConnectionState(ConnectionState.ESTABLISHED);

    // Set area filter to the entire world
    this.sock.send(
      JSON.stringify({
        tag: "WebFilterArea",
        area: [{ lat: -90, lon: -180 }, { lat: 90, lon: 180 }]
      })
    );

    // Use current 'fake' contest that is valid for the current alpha phase.
    // Primarily sent to match the messages from their reverse engineered websocket
    this.sock.send(
      JSON.stringify({ tag: "WebFilterContest", contents: "alpha9999" })
    );

    // Tell the webserver which flights we want in more detail. TODO.
    this.sock.send(JSON.stringify({ tag: "WebFollow", contents: [] }));
  };

  onMessage = evt => {
    console.log("WebSocket: Message!");
    this.setConnectionState(ConnectionState.ACTIVE);

    let msg = JSON.parse(evt.data);

    // Expect the next message in 60 seconds. If not, change the status message.
    clearTimeout(this.watchdog);
    this.watchdog = setTimeout(() => {
      this.setConnectionState(ConnectionState.INACTIVE);
    }, 70000);

    // Process the message
    this.processMessage(msg);
  };

  onClose = evt => {
    console.log("WebSocket: Close!");
    this.setConnectionState(ConnectionState.NO_CONNECTION);
    // websocket is closed.
    setTimeout(this.connect.bind(this), 1000);
  };

  onError = evt => {
    console.log("WebSocket: Error!");
  };

  // Message Processing
  handleReset = () => {
    console.log("TODO: handle reset!");
  };
  processMessage = msg => {
    if (!("tag" in msg)) {
      console.log("Warning: Invalid message format!", msg);
      return;
    }
    switch (msg.tag) {
      case "LiveFlightInfos":
        this.dispatchInfoMessage(msg.contents);
        break;
      case "LiveFlightChunk":
        this.dispatchTracklogMessage(msg);
        break;
      default:
        console.log(`Warning: Unknown message tag '${msg.tag}'!`, msg);
    }
  };
}
