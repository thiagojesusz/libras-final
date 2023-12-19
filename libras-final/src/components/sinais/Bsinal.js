import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const bSinal = new GestureDescription('B');

bSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);
bSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

bSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
bSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

bSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
bSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

bSinal.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
bSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

bSinal.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
bSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


