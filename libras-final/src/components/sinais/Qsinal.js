import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const qSinal = new GestureDescription('Q');

qSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSinal.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

qSinal.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
qSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

qSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qSinal.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

qSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qSinal.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

qSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

