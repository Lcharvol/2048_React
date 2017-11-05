const RED = 'linear-gradient( 160deg, #FEB692, #EA5455  120%)';
const GREEN = 'linear-gradient( 160deg, #92FFC0, #002661  120%)';
const BLUE = 'linear-gradient( 160deg, #C2FFD8, #465EFB  120%)';
const YELLOW = 'linear-gradient( 160deg, #FD6E6A, #FFC600  120%)';
const VIOLET = 'linear-gradient( 160deg, #C2FFD8, #465EFB  120%)';
const DARKRED = 'linear-gradient( 160deg, #F05F57, #360940  120%)';

export const getColorCell = value => {
    switch (value) {
        case 2:
            return RED;
        case 4:
            return GREEN;
        case 8:
            return BLUE;
        case 16:
            return YELLOW;
        case 32:
            return VIOLET;
        case 64:
            return DARKRED;
        case 128:
            return RED;
        case 256:
            return RED;
        case 512:
            return RED;
        case 1024:
            return RED;
        case 2048:
            return RED;
        default:
          return BLUE;
      }
};