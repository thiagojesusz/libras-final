import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const dSinal = new GestureDescription('D');

dSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

dSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
dSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

dSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
dSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

dSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
dSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

dSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
dSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

