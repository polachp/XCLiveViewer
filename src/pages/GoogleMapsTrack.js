export default class GoogleMapsTrack {
  constructor(google, map, pilotInfo, initialData) {
    this.google = google;
    this.marker = new this.google.maps.Marker({
      map: map,
      position: initialData.pos,
      title: pilotInfo.info.user.fullname
    });
    this.track = new this.google.maps.Polyline({
      map: map,
      path: []
    });
    this.currentTrackVersion = { startTime: null, endTime: null, length: null };
    this.newestTrackSegment = new this.google.maps.Polyline({
      map: map,
      path: []
    });
  }

  setMap = map => {
    this.marker.setMap(map);
    this.track.setMap(map);
    this.newestTrackSegment.setMap(map);
  };

  _updateTrack = track => {
    if (!track || track.length < 1) return;

    // Compute identifiers to reduce the amount if maps updates
    const length = track.length;
    const startTime = track[0].timestamp;
    const endTime = track[length - 1].timestamp;
    if (
      startTime === this.currentTrackVersion.startTime &&
      endTime === this.currentTrackVersion.endTime &&
      length === this.currentTrackVersion.length
    ) {
      return;
    }

    // If the start/end time or length changed, update track in map
    this.currentTrackVersion.startTime = startTime;
    this.currentTrackVersion.endTime = endTime;
    this.currentTrackVersion.length = length;

    this.track.setPath(track);
  };

  updateData = data => {
    this.marker.setPosition(data.pos);
    if (data.track.length > 0) {
      this.newestTrackSegment.setPath([
        data.track[data.track.length - 1],
        data.pos
      ]);
    }
    this._updateTrack(data.track);
  };
}