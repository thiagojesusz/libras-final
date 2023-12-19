import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const cSinal = new GestureDescription('C');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",

cSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

cSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

cSinal.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cSinal.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

cSinal.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cSinal.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

cSinal.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

