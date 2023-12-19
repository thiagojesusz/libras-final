import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fSinal = new GestureDescription('F');

fSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

fSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

fSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

fSinal.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

fSinal.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

