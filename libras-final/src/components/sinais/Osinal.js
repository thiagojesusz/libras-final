import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const oSinal = new GestureDescription('O');

oSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

oSinal.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
oSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

oSinal.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
oSinal.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

oSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
oSinal.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

oSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
oSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);
