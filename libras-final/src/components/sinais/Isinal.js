import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const iSinal = new GestureDescription('I');

iSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

iSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

iSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

iSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

iSinal.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

