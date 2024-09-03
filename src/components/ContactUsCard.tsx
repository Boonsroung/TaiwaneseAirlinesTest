import { Card, Typography } from 'antd'
import ContentItem from './ContentItem'
import { useTranslation } from 'react-i18next';

interface ContactUsCardProps {
  className?: string
}

export default function ContactUsCard({ className }: ContactUsCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      className={className}
      title={
        <Typography.Title level={4} className='!mt-10 !text-blue-primary'>
          {t('contact_us')}
        </Typography.Title>
      }
      headStyle={{ borderBottom: 'none' }}
    >
      <div className='bg-blue-bg p-8'>
        <ContentItem label={t('tel')} labelClass='text-[16px]'>
          <a href=''>
            <Typography.Text className='!text-primary text-[16px]'>02-210-8999 #600</Typography.Text>
          </a>
        </ContentItem>
        <ContentItem label={t('email')} labelClass='text-[16px]' className='mt-4'>
          <Typography.Text className='!text-primary text-[16px]'>bkkslci@china-airlines.com</Typography.Text>
        </ContentItem>
      </div>
    </Card>
  )
}
