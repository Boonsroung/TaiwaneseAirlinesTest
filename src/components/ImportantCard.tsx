import { Button, Card, Typography, Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import { useTranslation } from 'react-i18next';

interface ImportantCardProps {
  className?: string;
}

export default function ImportantCard({ className }: ImportantCardProps) {
  const { t } = useTranslation();

  const items: CollapseProps['items'] = [
    {
      key: '0',
      label: (
        <div className='ml-4 font-bold'>
          {t('disclaimers_clauses')}
        </div>
      ),
      children: (
        <div className='bg-blue-bg p-8'>
          <Typography.Title level={5} className='text-center mt-0'>
            {t('disclaimers_clauses')}
          </Typography.Title>
          <p className='m-0 mt-6'>
            {t('disclaimers_clauses_detail')}
          </p>
        </div>
      ),
      showArrow: false,
      headerClass: 'bg-white !items-center',
      extra: (
        <Button type='primary' ghost className='border-0'>
          {t('read')}
        </Button>
      )
    },
    {
      key: '1',
      label: (
        <div className='ml-4 font-bold'>
          {t('privacy_policies')}
        </div>
      ),
      children: (
        <div className='bg-blue-bg p-8'>
          <Typography.Title level={5} className='text-center mt-0'>
            {t('privacy_policies')}
          </Typography.Title>
          <p className='m-0 mt-6'>
            <li>1. {t('summary')}</li>
            <li>{t('summary_detail')}</li>
            <br />
            <li>2. {t('policy')}</li>
            <li>{t('policy_detail_1')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_detail_2') }} />
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_detail_3') }} />
            <li>{t('policy_detail_4')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_detail_5') }} />
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_1') }} />
            <br />
            <li>{t('policy_1_1')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_1_1_5_detail') }} />
            <li dangerouslySetInnerHTML={{ __html: t('policy_1_1_9_detail') }} />
            <br />
            <li>{t('policy_1_2')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_1_2_detail') }} />
            <br />
            <li>{t('policy_1_3')}</li>
            <li>{t('policy_1_3_detail')}</li>
            <br />
            <li>{t('policy_1_4')}</li>
            <br />
            <li>{t('policy_2')}</li>
            <li>{t('policy_2_detail')}</li>
            <br />
            <li>{t('policy_2_1')}</li>
            <li>{t('policy_2_1_detail')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_2_2') }} />
            <br />
            <li>{t('policy_2_3')}</li>
            <br />
            <li>{t('policy_2_4')}</li>
            <br />
            <li>{t('policy_3')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_3_1') }} />
            <br />
            <li>{t('policy_3_2')}</li>
            <li>{t('policy_3_2_detail')}</li>
            <br />
            <li>{t('policy_3_3')}</li>
            <li>{t('policy_3_3_detail')}</li>
            <br />
            <li>{t('policy_3_4')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_3_4_detail') }} />
            <br />
            <li>{t('policy_3_5')}</li>
            <li>{t('policy_3_5_detail')}</li>
            <br />
            <li>{t('policy_3_6')}</li>
            <li>{t('policy_3_6_detail')}</li>
            <br />
            <li>{t('policy_3_7')}</li>
            <li>{t('policy_3_7_detail')}</li>
            <br />
            <li>{t('policy_3_8')}</li>
            <li>{t('policy_3_8_detail')}</li>
            <br />
            <li>{t('policy_4')}</li>
            <b></b>
            <li>{t('policy_4_detail')}</li>
            <br />
            <li>{t('policy_4_1')}</li>
            <li>{t('policy_4_1_detail')}</li>
            <br />
            <li>{t('policy_4_2')}</li>
            <li>{t('policy_4_2_detail')}</li>
            <br />
            <li>{t('policy_4_3')}</li>
            <li>{t('policy_4_3_detail')}</li>
            <br />
            <li>{t('policy_4_4')}</li>
            <li>{t('policy_4_4_detail')}</li>
            <br />
            <li>{t('policy_4_5')}</li>
            <li>{t('policy_4_5_detail')}</li>
            <br />
            <li>{t('policy_4_6')}</li>
            <li>{t('policy_4_6_detail')}</li>
            <br />
            <li>{t('policy_4_7')}</li>
            <li>{t('policy_4_7_detail')}</li>
            <br />
            <li>{t('policy_4_8')}</li>
            <li>{t('policy_4_8_detail')}</li>
            <br />
            <li>{t('policy_5')}</li>
            <br />
            <li>{t('policy_5_1')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_5_1_detail') }} />
            <br />
            <li>{t('policy_5_2')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_5_2_detail') }} />
            <br />
            <li>{t('policy_5_3')}</li>
            <li>{t('policy_5_3_detail')}</li>
            <br />
            <li>{t('policy_5_4')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_5_4_detail') }} />
            <br />
            <li>{t('policy_6')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_6_detail') }} />
            <br />
            <li>{t('policy_6_1')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_6_1_detail') }} />
            <br />
            <li>{t('policy_6_2')}</li>
            <li>{t('policy_6_2_detail')}</li>
            <br />
            <li>{t('policy_6_3')}</li>
            <li>{t('policy_6_3_detail')}</li>
            <br />
            <li>{t('policy_6_4')}</li>
            <li>{t('policy_6_4_detail')}</li>
            <br />
            <li>{t('policy_6_5')}</li>
            <li>{t('policy_6_5_detail')}</li>
            <br />
            <li>{t('policy_6_6')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_6_6_detail') }} />
            <br />
            <li>{t('policy_6_7')}</li>
            <li>{t('policy_6_7_detail')}</li>
            <br />
            <li>{t('policy_6_8')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('policy_6_8_detail') }} />
            <br />
            <li>{t('policy_6_9')}</li>
            <li>{t('policy_6_9_detail')}</li>
            <br />
            <li>{t('policy_7')}</li>
            <br />
            <li dangerouslySetInnerHTML={{ __html: t('policy_7_1_detail') }} />
            <br />
            <li>{t('policy_7_2')}</li>
            <li>{t('policy_7_2_detail')}</li>
            <br />
            <li>{t('policy_8')}</li>
            <li>{t('policy_8_detail')}</li>
            <br />
            <li>{t('policy_9')}</li>
            <li>{t('policy_9_detail')}</li>
            <br />
            <li>{t('policy_10')}</li>
            <li>{t('policy_10_detail')}</li>
            <br />
            <li>{t('policy_11')}</li>
            <li>{t('policy_11_detail')}</li>
            <br />
            <li>{t('policy_12')}</li>
            <li>{t('policy_12_detail')}</li>
            <br />
            <li>{t('policy_13')}</li>
            <li>{t('policy_13_detail')}</li>
            <br />
            <li>{t('policy_14')}</li>
            <li>{t('policy_14_detail')}</li>
            <br />
            <li>{t('last_policy')}</li>
          </p>
        </div>
      ),
      showArrow: false,
      headerClass: 'bg-white !items-center',
      extra: (
        <Button type='primary' ghost className='border-0'>
          {t('read')}
        </Button>
      )
    }
  ];

  return (
    <Card
      title={
        <div className='relative'>
          <Typography.Title level={4} className='!m-0 !text-blue-primary !ml-4 !mt-8'>
            {t('important')}
          </Typography.Title>
          <div className='bg-white px-4'>
            <div className='border-b border-gray-300 mt-2' />
          </div>
        </div>
      }
      className={className}
      headStyle={{ borderBottom: 'none' }}
    >
      <Collapse items={items} ghost accordion className='collapse-no-padding-item' />
    </Card>

  );
}