import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aSinal = new GestureDescription('A');

aSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

aSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

aSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

aSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

aSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

