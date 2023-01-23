import { Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useBreakpoints = () => {
    const isMobile = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.down('lg'));
    const isDesktop = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.up('lg') && breakpoints.down('xl'));
    const isBigDesktop = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.up('xl'));

    return { isDesktop, isMobile, isBigDesktop };
};
