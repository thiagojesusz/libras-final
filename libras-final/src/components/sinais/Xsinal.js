import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const xSinal = new GestureDescription('X');

xSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

xSinal.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xSinal.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

xSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

xSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

xSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

