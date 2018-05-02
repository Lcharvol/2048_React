import { getRandomNumber } from './utils';
import { length } from 'ramda';

const RED = 'linear-gradient( 160deg, #FEB692, #EA5455  120%)';
const GREEN = 'linear-gradient( 160deg, #92FFC0, #002661  120%)';
const BLUE = 'linear-gradient( 160deg, #C2FFD8, #465EFB  120%)';
const YELLOW = 'linear-gradient( 160deg, #FD6E6A, #FFC600  120%)';
const VIOLET = 'linear-gradient( 160deg, #C2FFD8, #465EFB  120%)';
const DARKRED = 'linear-gradient( 160deg, #F05F57, #360940  120%)';

const colors = [GREEN, BLUE, VIOLET, DARKRED];

export const getRandomGradient = () => colors[getRandomNumber(0, length(colors) - 1)];
