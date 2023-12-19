import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ySinal = new GestureDescription('Y');

ySinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

ySinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ySinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

ySinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ySinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

ySinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ySinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

ySinal.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
ySinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

