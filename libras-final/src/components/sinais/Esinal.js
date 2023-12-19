import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const eSinal = new GestureDescription('E');

eSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

eSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
eSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

eSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
eSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

eSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
eSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

eSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
eSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

