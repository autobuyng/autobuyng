import useIsMobile from './useIsMobile';

export const getPlaceholderFontSize = () => {
  const { width } = useIsMobile();
  if (width < 450) {
    return '10px';
  } else if (width >= 450 && width < 768) {
    return '14px';
  } else {
    return '16px';
  }
};
