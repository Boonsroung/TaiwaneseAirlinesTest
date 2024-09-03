import { Button, Card, Typography } from 'antd'

import ContactUsCard from '../components/ContactUsCard'
import ImportantCard from '../components/ImportantCard'
import ContainerPageWrapper from '../components/ContainerPageWrapper'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ResultPage() {
  const { t } = useTranslation();

  return (
    <ContainerPageWrapper>
      <div className='flex flex-col gap-10'>
        <Card
          title={
            <div className='py-[24px]'>
              <Typography.Title level={4} className='!m-0 !text-blue-primary'>
                {t('congratulations') + '!'}
              </Typography.Title>
              <Typography.Title level={4} className='!m-0 !mt-4 !font-normal'>
                {t('please_check_your_email_box')}
              </Typography.Title>
            </div>
          }
        >
          <div className='grid lg:grid-cols-3 gap-2 lg:gap-6'>
            <div className='bg-blue-bg p-[24px]'>
              <Typography.Text>{t('applied_date_time')}</Typography.Text>
              <Typography.Title className='!text-primary' level={4}>
                2024-08-22 <br />20:11:59 GMT+7
              </Typography.Title>
            </div>
            <div className='bg-blue-bg p-[24px]'>
              <Typography.Text>{t('your_applicant_code')}</Typography.Text>
              <Typography.Title className='!text-primary' level={4}>
                TH0001
              </Typography.Title>
            </div>
            <div className='bg-blue-bg p-[24px]'>
              <Typography.Text>{t('your_voucher_code_is')}</Typography.Text>
              <Typography.Title className='!text-primary' level={4}>
                XczuemTG
              </Typography.Title>
            </div>
          </div>
          <hr style={{ borderColor: '#D8D8D8', borderWidth: '1px', borderStyle: 'solid' }} className='mt-3'/>
          <div className='text-center mt-5'>
            <Link to='/result'>
              <Button type='primary' className='min-w-[300px]'>
                {t('book_now')}
              </Button>
            </Link>
          </div>
        </Card>
        <ImportantCard />
        <ContactUsCard />
      </div>
    </ContainerPageWrapper>
  )
}
