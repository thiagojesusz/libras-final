import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const mSinal = new GestureDescription('M');

mSinal.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

mSinal.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
mSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

mSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
mSinal.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

mSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
mSinal.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

mSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
mSinal.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

