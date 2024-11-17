import React from 'react'
import ABLImage from './assets/GameLogo/ABL.webp';
import PopImage from './assets/GameLogo/PoP.webp';
import SRImage from './assets/GameLogo/SR.webp';
import BBWQImage from './assets/GameLogo/BBW.webp';
import BLImage from './assets/GameLogo/BL.webp';
import SCImage from './assets/GameLogo/SC.webp';
import BOEImage from './assets/GameLogo/BOE.webp';
import PPImage from './assets/GameLogo/PP.webp';
import CBImage from './assets/GameLogo/CB.webp';
import AWImage from './assets/GameLogo/AW.webp';
import MJImage from './assets/GameLogo/MJ.webp';
import IJImage from './assets/GameLogo/IJ.webp';

export const GameData = [
    { id: 1, name: 'Pride of Persia', img: PopImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 2, name: 'Sugar Rush', img: SRImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'PragmaticPlay' },
    { id: 3, name: 'Big Bro World', img: BBWQImage, category: 'live', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 4, name: 'Beach Life', img: BLImage, category: 'slots', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 5, name: 'Shaolin Crew', img: SCImage, category: 'slots', isNew: true, isFavorite: false, gameProvider: 'Xpanz' },
    { id: 6, name: 'Book of Egypt', img: BOEImage, category: 'table', isNew: false, isFavorite: false, gameProvider: 'Xpanz' },
    { id: 7, name: 'Pirates Power', img: PPImage, category: 'others', isNew: true, isFavorite: false, gameProvider: 'Xpanz' },
    { id: 8, name: 'Crocodile Blitz', img: CBImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 9, name: 'Anaconda Wild 2', img: AWImage, category: 'slots', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 10, name: 'Maya Jackpot', img: MJImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'skywind' },
    { id: 11, name: 'Azteca Bonus Lines', img: ABLImage, category: 'bingo', isNew: false, isFavorite: false, gameProvider: 'playtech' },
    { id: 12, name: 'Inca Jackpot', img: IJImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'skywind' }
];
