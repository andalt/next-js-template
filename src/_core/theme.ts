import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export const projectColors = {
    common: {
        white: '#FFFFFF',
        black: '#111111',
    },
    yellow: '#F4B656',
    beige: '#C6AF79',
    purple: '#9D90F8',
    lime: '#B4E58E',
    green: {
        main: '#009386',
        light: '#BED9D0',
        dark: '#11615E',
        veryDark: '#033A38',
    },
    coral: {
        light: '#F6D9CF',
        main: '#FF335F',
        dark: '#DE2D53',
    },
    blue: {
        main: '#0000FF',
        light: '#EBF1F2',
    },
    grey: {
        [900]: '#111111',
        [700]: '#404040',
        [600]: '#595959',
        [500]: '#A6A6A6',
        [300]: '#E0E0E0',
        [100]: '#F2F2F2',
    },
    error: '#E91E1E',
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1000,
            xl: 1200,
        },
    },

    palette: {
        background: {
            default: projectColors.green.dark,
        },

        common: projectColors.common,
        grey: projectColors.grey,
        primary: projectColors.coral,

        secondary: {
            main: projectColors.common.white,
            contrastText: projectColors.grey[700],
        },

        text: {
            primary: projectColors.common.white,
            secondary: projectColors.grey[700],
            disabled: projectColors.grey[300],
        },
    },

    typography: {
        fontFamily: '"Euclid Circular A", "Arial, sans-serif"',
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Euclid Circular A';
                font-style: normal;
                font-display: swap;
                src: local('EuclidCircularA'), local('EuclidCircularA-Regular'), url('/fonts/EuclidCircularA-Regular.otf') format('opentype');
              }

              @font-face {
                font-family: 'Euclid Circular A Medium';
                font-style: normal;
                font-display: swap;
                src: local('EuclidCircularAMedium'), local('EuclidCircularA-Medium'), url('/fonts/EuclidCircularA-Medium.otf') format('opentype');
              }
            `,
        },

        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                },
            },
        },
    },
});

export default theme;
