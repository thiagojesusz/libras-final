import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const jSinal = new GestureDescription('J');

jSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

jSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

jSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jSinal.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

jSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jSinal.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

jSinal.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jSinal.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

