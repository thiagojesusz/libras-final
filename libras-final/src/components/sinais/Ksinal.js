import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const kSinal = new GestureDescription('K');

kSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

kSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

kSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

kSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

kSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

