import { useMatches } from 'react-router-dom';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { RouterHandleData } from '../types/router-handle.type';
import chinaAirlinesLogo from '../assets/images/china-airlines-logo.png';
import taiwanLogo from '../assets/images/taiwan-logo.png';

export default function HeaderInfo() {
  const { i18n } = useTranslation();
  const matches = useMatches();
  const pageInfo: RouterHandleData | undefined =
    matches.length > 0 ? (matches[matches.length - 1].handle as RouterHandleData) : undefined;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className='flex flex-row gap-4 items-center mt-8 justify-center'>
        <img src={chinaAirlinesLogo} className='w-[338.82px] h-[96px]' alt='China Airlines logo' />
        <br /><br />
        <img src={taiwanLogo} className='w-[301.83px] h-[96px]' alt='Taiwan logo' />
      </div>

      <div className='text-center justify-center flex gap-4 mt-10'>
        <Typography.Title
          level={4}
          className={`cursor-pointer !m-0 !font-normal font-noto ${i18n.language === 'th' ? '!text-primary' : ''}`}
          onClick={() => changeLanguage('th')}
        >
          ภาษาไทย
        </Typography.Title>
        <Typography.Title level={4} className='!m-0 !font-normal !text-[#D8D8D8]'>
          |
        </Typography.Title>
        <Typography.Title
          level={4}
          className={`cursor-pointer !m-0 !font-normal ${i18n.language === 'en' ? '!text-primary' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          English
        </Typography.Title>
      </div>
      {pageInfo?.pageName && (
        <Typography.Title level={3} className='text-center !text-blue-primary mt-10'>
          {pageInfo.pageName}
          <img
            className='align-middle ml-4'
            src='/images/ic-departure.webp'
            alt='departure icon'
            width={40}
            height={40}
          />
        </Typography.Title>
      )}
    </>
  );
}