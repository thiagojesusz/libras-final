import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const uSinal = new GestureDescription('U');

uSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

uSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
uSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

uSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
uSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

uSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
uSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

uSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
uSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

