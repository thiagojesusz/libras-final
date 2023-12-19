import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const vSinal = new GestureDescription('V');

vSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

vSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

vSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

vSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

vSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

