import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pSinal = new GestureDescription('P');

pSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

pSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pSinal.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

pSinal.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pSinal.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

pSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSinal.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

pSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pSinal.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

