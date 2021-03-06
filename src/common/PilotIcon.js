import { getRhumbLineBearing } from "geolib";
import string2color from "../util/string2color";

//const path_questionmark =
//  "m 12.747342,2.0001932 c -0.254753,-0.0015 -0.513283,0.0061 -0.773833,0.0228 C 8.104865,2.2564442 6.070752,4.4579604 5.904,8.4266554 h 3.901734 c 0.03335,-1.367366 0.834151,-2.401618 2.234867,-2.56837 1.400716,-0.133402 2.734861,0.200232 3.135066,1.134043 0.433555,1.033862 -0.533606,2.234215 -1.000512,2.734471 -0.86711,0.9338106 -2.267826,1.6342986 -3.001534,2.6348096 -0.700358,1.000512 -0.834151,2.301567 -0.900851,3.902386 h 3.43535 c 0.03335,-1.033862 0.09979,-2.001153 0.566695,-2.63481 0.767059,-1.033862 1.900972,-1.500768 2.834783,-2.334527 0.90046,-0.767059 1.867621,-1.7008696 2.001023,-3.1682856 0.531522,-4.033312 -2.54199,-6.1030962 -6.363279,-6.1261792 z M 12.073821,17.730891 A 2.1677748,2.1344245 0 0 0 9.906046,19.865445 2.1677748,2.1344245 0 0 0 12.073821,22 2.1677748,2.1344245 0 0 0 14.241595,19.865445 2.1677748,2.1344245 0 0 0 12.073821,17.730891 Z";
const path_questionmark_min =
  "M 12.747,2 C 12.492,1.998 12.234,2.006 11.973,2.023 8.105,2.256 6.071,4.458 5.904,8.427 H 9.806 C 9.839,7.06 10.64,6.025 12.041,5.859 c 1.401,-0.133 2.735,0.2 3.135,1.134 0.434,1.034 -0.534,2.234 -1.001,2.734 -0.867,0.934 -2.268,1.634 -3.002,2.635 -0.7,1.001 -0.834,2.302 -0.901,3.902 h 3.435 c 0.033,-1.034 0.1,-2.001 0.567,-2.635 0.767,-1.034 1.901,-1.501 2.835,-2.335 0.9,-0.767 1.868,-1.701 2.001,-3.168 C 19.642,4.093 16.568,2.023 12.747,2 Z M 12.074,17.731 A 2.168,2.134 0 0 0 9.906,19.865 2.168,2.134 0 0 0 12.074,22 2.168,2.134 0 0 0 14.242,19.865 2.168,2.134 0 0 0 12.074,17.731 Z";
const path_arrow =
  "M12.93 4.26l6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z";
const path_idle =
  "M 12,2 C 8.13,2 5,5.13 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.87 -3.13,-7 -7,-7";
//const path_landed =
//  "M 12.662857,19.784264 19.12,15.167121 C 19.668572,14.77855 20,14.149978 20,13.475692 20,11.772835 18.08,10.789978 16.697143,11.772835 L 12,15.121407 7.302857,11.772835 C 5.92,10.778549 4,11.772835 4,13.475692 c 0,0.674286 0.331429,1.314286 0.88,1.702858 l 6.457143,4.617142 c 0.4,0.274286 0.925714,0.274286 1.325714,-0.01143 z m 0,-8 L 19.12,7.1785496 C 19.668572,6.7785496 20,6.1499781 20,5.4756924 20,3.7728353 18.08,2.7785495 16.697143,3.7728353 L 12,7.1214067 7.302857,3.7728353 C 5.92,2.7785495 4,3.7728353 4,5.4756924 4,6.1499781 4.331429,6.7899782 4.88,7.1785496 l 6.457143,4.6171424 c 0.4,0.274286 0.925714,0.274286 1.325714,-0.01143 z";
const path_landed_min =
  "m 12.66,19.78 6.46,-4.61 C 19.67,14.78 20,14.15 20,13.48 20,11.77 18.08,10.79 16.7,11.77 L 12,15.12 7.3,11.77 c -1.38,-0.99 -3.3,0 -3.3,1.71 0,0.67 0.33,1.31 0.88,1.7 l 6.46,4.62 c 0.4,0.27 0.93,0.27 1.33,-0.01 z m 0,-8 6.46,-4.6 C 19.67,6.78 20,6.15 20,5.48 20,3.77 18.08,2.78 16.7,3.77 L 12,7.12 7.3,3.77 C 5.92,2.78 4,3.77 4,5.48 4,6.15 4.33,6.79 4.88,7.18 l 6.46,4.62 c 0.4,0.27 0.93,0.27 1.33,-0.01 z";

export const getPilotIconColor = name => string2color(name, 70);
export const getPilotTrackColor = name => string2color(name, 40);

export const pilotIconChanged = (oldPilotIcon, newPilotIcon) => {
  for (let p in oldPilotIcon) {
    if (!(p in newPilotIcon)) return true;
  }
  for (let p in newPilotIcon) {
    if (!(p in oldPilotIcon)) return true;
    // Special cases
    if (p === "anchor") {
      if (
        oldPilotIcon[p].x !== newPilotIcon[p].x ||
        oldPilotIcon[p].y !== newPilotIcon[p].y
      )
        return true;
    } else if (oldPilotIcon[p] !== newPilotIcon[p]) {
      return true;
    }
  }
  return false;
};

export const getPilotIcon = (
  waitingForStart,
  endOfTrack,
  hasLanded,
  pos,
  velocityVec,
  color
) => {
  /*
    Four different symbols:
      - Flying
      - Signal lost
      - Landed
      - Not yet started (idle)
  */

  if (endOfTrack) {
    if (hasLanded) {
      // LANDED
      return {
        path: path_landed_min,
        fillColor: color,
        fillOpacity: 1,
        anchor: { x: 12, y: 20 },
        strokeWeight: 1,
        scale: 1.2
      };
    } else {
      // SIGNAL LOST
      return {
        path: path_questionmark_min,
        fillColor: color,
        fillOpacity: 1,
        anchor: { x: 12, y: 12 },
        strokeWeight: 1,
        scale: 1.2
      };
    }
  }

  if (waitingForStart) {
    // NOT YET STARTED
    return {
      path: path_idle,
      fillColor: color,
      fillOpacity: 1,
      anchor: { x: 12, y: 22 },
      strokeWeight: 1,
      scale: 1.2
    };
  }

  // Compute direction
  const bearing =
    velocityVec === null
      ? 0
      : getRhumbLineBearing(pos, {
          lat: pos.lat + velocityVec.lat,
          lng: pos.lng + velocityVec.lng
        });

  // FLYING
  return {
    path: path_arrow,
    fillColor: color,
    fillOpacity: 1,
    anchor: { x: 12, y: 12 },
    strokeWeight: 1,
    scale: 1.2,
    rotation: bearing
  };
};
