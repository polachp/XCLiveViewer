import { registerPersistentState } from "./PersistentState";
import { getXContestInterface } from "../../location_provider/XContest/XContestInterface";
import { parseTime } from "../../location_provider/XContest/FlightAnimationData";

const persistentChosenPilots = registerPersistentState("chosen-pilots", {});

export const getChosenPilotsObject = () => persistentChosenPilots;

export function getChosenPilots() {
  return persistentChosenPilots.getValue();
}

export function setChosenPilots(newValue) {
  console.log("Selected pilots updated: ", newValue);
  persistentChosenPilots.setValue(newValue);
}

// Sets new chosen pilots and also looks up their names.
// When used without argument, just updates the names of the existing pilots.
export function setChosenPilotsAndUpdateInfos(chosenPilots = null) {
  let chosenPilotsUpdated = true;

  // if no new chosenPilots list was defined, take over previous one and disable updating unless a name changed
  if (chosenPilots === null) {
    chosenPilots = { ...getChosenPilots() };
    chosenPilotsUpdated = false;
  }

  const pilotList = getXContestInterface().getPilotInfos();

  for (const pilotId in chosenPilots) {
    if (pilotId in pilotList) {
      // Get new name
      const currentName = pilotList[pilotId].info.user.fullname;
      // Get stored name
      const previousName = chosenPilots[pilotId].name;

      // If new name is different, update
      if (currentName !== previousName) {
        chosenPilots[pilotId].name = currentName;
        chosenPilotsUpdated = true;
      }

      const lastFix = pilotList[pilotId].lastFix;
      const previousLastFix = chosenPilots[pilotId].lastFix;
      if (!previousLastFix || previousLastFix.t !== lastFix.timestamp) {
        chosenPilots[pilotId].lastFix = {
          t: parseTime(lastFix.timestamp),
          lat: lastFix.lat,
          lon: lastFix.lon,
          landed: pilotList[pilotId].landed,
        };
        chosenPilotsUpdated = true;
      }
    }
  }

  // If anything updated, set new list. This will trigger events.
  if (chosenPilotsUpdated) {
    setChosenPilots(chosenPilots);
  }
}

// Change which pilots are shown
export const updateShownPilots = (pilotIds) => {
  const newPilotState = { ...getChosenPilots() };

  let changed = false;
  for (const pilotId in newPilotState) {
    const pilotShouldBeShown = pilotIds.indexOf(pilotId) !== -1;
    const pilotIsShown = newPilotState[pilotId].shown;
    if (pilotShouldBeShown !== pilotIsShown) {
      newPilotState[pilotId].shown = pilotShouldBeShown;
      changed = true;
    }
  }

  if (changed) {
    setChosenPilots(newPilotState);
  }
};

export const setPilotShown = (pilotId, shown) => {
  const newPilotState = { ...getChosenPilots() };

  if (pilotId in newPilotState) {
    const pilotState = newPilotState[pilotId];
    if (pilotState.shown !== shown) {
      pilotState.shown = shown;
      setChosenPilots(newPilotState);
    }
  }
};

// The default pilot entry for new pilots
export const defaultPilotEntry = (pilotName) => ({
  name: pilotName,
  shown: true,
  lastFix: null,
});

// Add new pilots
export const addPilots = (pilotIds) => {
  const newPilotState = { ...getChosenPilots() };

  let changed = false;
  for (const pilotId of pilotIds) {
    if (!(pilotId in newPilotState)) {
      newPilotState[pilotId] = defaultPilotEntry(pilotId);
      changed = true;
    }
  }

  if (changed) {
    setChosenPilotsAndUpdateInfos(newPilotState);
  }
};

// Remove pilots
export const removePilots = (pilotIds) => {
  const newPilotState = { ...getChosenPilots() };

  let changed = false;
  for (const pilotId of pilotIds) {
    if (pilotId in newPilotState) {
      delete newPilotState[pilotId];
      changed = true;
    }
  }

  if (changed) {
    setChosenPilots(newPilotState);
  }
};

/*export function useChosenPilots() {
  const [chosenPilots] = persistentChosenPilots.use();

  return [chosenPilots, addPilots, removePilots];
}*/
