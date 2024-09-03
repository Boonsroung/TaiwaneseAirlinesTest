// usePageTranslation.ts
import { useTranslation } from 'react-i18next';

const usePageTranslation = () => {
  const { t } = useTranslation();

  const translatePageName = (pageName: string) => {
    return t(pageName);
  };

  return { translatePageName };
};

export default usePageTranslation;
