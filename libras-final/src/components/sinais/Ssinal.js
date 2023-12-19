import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sSinal = new GestureDescription('S');

sSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

sSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

sSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

sSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

sSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

