import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const gSinal = new GestureDescription('G');

gSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

gSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

gSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gSinal.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

gSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gSinal.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

gSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gSinal.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

