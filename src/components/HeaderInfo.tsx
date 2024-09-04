import { useMatches } from 'react-router-dom';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { RouterHandleData } from '../types/router-handle.type';
import chinaAirlinesLogo from '../assets/images/01 CI_Sig_AD.png';
import taiwanLogo from '../assets/images/LogoLockup-Orange.png';

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
      {/* โลโก้ ไม่มีช่องว่างระหว่างกัน */}
      <div className='flex flex-row gap-0 items-center mt-8 justify-center max-w-full px-4'>
        <img
          src={chinaAirlinesLogo}
          className='w-[250px] sm:w-[300px] lg:w-[338.82px] h-auto'
          alt='China Airlines logo'
        />
        <img
          src={taiwanLogo}
          className='w-[220px] sm:w-[280px] lg:w-[301.83px] h-auto'
          alt='Taiwan logo'
        />
      </div>

      {/* ชื่อหน้า */}
      {pageInfo?.pageName && (
        <Typography.Title
          level={3}
          className='text-center !text-blue-primary mt-10 px-4'
        >
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

      {/* ปุ่มเปลี่ยนภาษา */}
      <div className='flex justify-center mt-10'>
        <div className='flex gap-2 items-center'>
          <Typography.Title
            level={4}
            className={`cursor-pointer !m-0 !font-normal ${i18n.language === 'th' ? '!text-primary' : '!text-[#D8D8D8]'}`}
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
            onClick={() => changeLanguage('th')}
          >
            ภาษาไทย
          </Typography.Title>
          <Typography.Title
            level={4}
            className='!m-0 !font-normal !text-[#D8D8D8]'
          >
            |
          </Typography.Title>
          <Typography.Title
            level={4}
            className={`cursor-pointer !m-0 !font-normal ${i18n.language === 'en' ? '!text-primary' : '!text-[#D8D8D8]'}`}
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
            onClick={() => changeLanguage('en')}
          >
            English
          </Typography.Title>
        </div>
      </div>
    </>
  );
}
