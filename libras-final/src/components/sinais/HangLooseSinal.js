import {Finger, FingerCurl, FingerDiretion, GestureDescription } from  'fingerpose';

export const hangSing = new GestureDescription('HangLooseSing');

hangSing.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
hangSing.addDirection(Finger.Index, FingerDiretion.DiagonalUpRigth, 0.70);

hangSing.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
hangSing.addDirection(Finger.Index, FingerDiretion.VerticalUp, 0.70);

hangSing.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
hangSing.addDirection(Finger.Middle, FingerDiretion.VerticalUp, 0.70);

hangSing.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hangSing.addDirection(Finger.Ring, FingerDiretion.VerticalUp, 0.70);

hangSing.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
hangSing.addDirection(Finger.Pinky, FingerDiretion.DiagonalUpLeft, 0.70);


