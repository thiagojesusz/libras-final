import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nSinal = new GestureDescription('N');

nSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

nSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

nSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

nSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

nSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

