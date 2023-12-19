import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const zSinal = new GestureDescription('Z');

zSinal.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
zSinal.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

zSinal.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
zSinal.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

zSinal.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
zSinal.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

zSinal.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
zSinal.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

zSinal.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
zSinal.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

