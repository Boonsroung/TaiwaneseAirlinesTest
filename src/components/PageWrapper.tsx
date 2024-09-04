import React from 'react';
import usePageTranslation from '../usePageTranslation';

interface PageWrapperProps {
    children: React.ReactNode;
    pageNameKey: string;
    visiblePartnerLogo?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageNameKey, visiblePartnerLogo }) => {
    const { translatePageName } = usePageTranslation();

    const pageName = translatePageName(pageNameKey);

    return (
        <div style={{ alignItems: 'center' }}>
            <h1 className='text-center text-[#3E62AD] flex items-center justify-center'>
                {pageName}
                {visiblePartnerLogo && (
                    <img src="/images/ic-departure.webp" alt="Departure Logo" className='ml-2' />
                )}
            </h1>
            {children}
        </div>
    );
};

export default PageWrapper;
