import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hSinal = new GestureDescription('H');

hSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

hSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

hSinal.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hSinal.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

hSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hSinal.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

hSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hSinal.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

