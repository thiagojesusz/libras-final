import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const tSinal = new GestureDescription('T');

tSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
tSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

tSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
tSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

tSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
tSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

tSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
tSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

tSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
tSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

