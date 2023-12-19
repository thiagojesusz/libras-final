import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const wSinal = new GestureDescription('W');

wSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

wSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

wSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

wSinal.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
wSinal.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

wSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

