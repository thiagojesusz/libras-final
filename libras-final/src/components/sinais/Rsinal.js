import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const rSinal = new GestureDescription('R');

rSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

rSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

rSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

rSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

rSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

