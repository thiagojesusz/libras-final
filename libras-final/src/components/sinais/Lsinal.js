import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const lSinal = new GestureDescription('L');

lSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

lSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

lSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

lSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

lSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

