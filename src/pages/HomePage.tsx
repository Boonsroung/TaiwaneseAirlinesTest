import { Button, Card, Checkbox, Divider, Form, Input, Select, Typography } from 'antd'
import type { TabsProps } from 'antd'
import { Link } from 'react-router-dom'

import ContactUsCard from '../components/ContactUsCard'
import ImportantCard from '../components/ImportantCard'
import ContainerPageWrapper from '../components/ContainerPageWrapper'
import CardTabs from '../components/CardTabs'
import ReCAPTCHAForm from '../components/ReCAPTCHAForm'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation();

  const FirstTimeApplyTab = (
    <Form layout='vertical' variant='filled'>
      <Typography.Title className='!text-blue-primary !mb-6' level={4}>
        {t('applicant_contact')}
      </Typography.Title>
      <div className='grid lg:grid-cols-2 gap-x-10'>
        <Form.Item label={t('mobile_number')}>
          <Input placeholder={t('enter_mobile_number')} />
        </Form.Item>
        <Form.Item label={t('email')}>
          <Input type='email' placeholder={`${t('ex')} example888@hotmail.com`} />
        </Form.Item>
      </div>
      <Divider />
      <Typography.Title level={4} className='!mb-6'>
        {`${t('applicant')} #1`}
      </Typography.Title>
      <div className='grid lg:grid-cols-2 gap-x-10'>
        <Form.Item label={t('first_name')}>
          <Input placeholder={t('enter_first_name')} />
        </Form.Item>
        <Form.Item label={t('last_name')}>
          <Input placeholder={t('enter_last_name')} />
        </Form.Item>
        <Form.Item label={t('country_code')}>
          <Select placeholder={t('select_country_code')} />
        </Form.Item>
      </div>
      <Divider />
      <Typography.Title level={4} className='!mb-6'>
        {`${t('applicant')} #2`}
      </Typography.Title>
      <div className='grid lg:grid-cols-2 gap-x-10'>
        <Form.Item label={t('first_name')}>
          <Input placeholder={t('enter_first_name')} />
        </Form.Item>
        <Form.Item label={t('last_name')}>
          <Input placeholder={t('enter_last_name')} />
        </Form.Item>
        <Form.Item label={t('country_code')}>
          <Select placeholder={t('select_country_code')} />
        </Form.Item>
      </div>
      <Divider />
      <Typography.Title level={4} className='!mb-6'>
        {`${t('applicant')} #2`}
      </Typography.Title>
      <div className='grid lg:grid-cols-2 gap-x-10'>
        <Form.Item label={t('first_name')}>
          <Input placeholder={t('enter_first_name')} />
        </Form.Item>
        <Form.Item label={t('last_name')}>
          <Input placeholder={t('enter_last_name')} />
        </Form.Item>
        <Form.Item label={t('country_code')}>
          <Select placeholder={t('select_country_code')} />
        </Form.Item>
      </div>
      <Divider />
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox className='!text-lg'>{t('this_is_to_certify_that_i_do_not_hold_a_taiwan_passport')}</Checkbox>
      </Form.Item>
      <Divider />
      <Form.Item className='text-center' name='verifyReCAPTCHA'>
        <ReCAPTCHAForm centered />
      </Form.Item>
      <div className='text-center'>
        <Link to='/result'>
          <Button type='primary' className='min-w-[300px]'>
            {t('submit')}
          </Button>
        </Link>
      </div>
    </Form>
  )

  const AlreadyAppliedTab = (
    <Form layout='vertical' variant='filled'>
      <Typography.Title className='!text-blue-primary !mb-6' level={4}>
        {t('your_applicant_code')}
      </Typography.Title>
      <div className='grid lg:grid-cols-2'>
        <div className='flex gap-x-4'>
          <Form.Item
            label={t('your_applicant_code')}
            extra={t('enter_your_applicant_code_alert')}
          >
            <Input placeholder={t('enter_applicant_code')} />
          </Form.Item>
          <Form.Item label={' '}>
            <Link to='/result'>
              <Button type='primary'>{t('submit')}</Button>
            </Link>
          </Form.Item>
        </div>
      </div>
      <Form.Item name='verifyReCAPTCHA'>
        <ReCAPTCHAForm />
      </Form.Item>
      <Divider />
    </Form>
  )

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: t('first_time_apply'),
      children: FirstTimeApplyTab
    },
    {
      key: '2',
      label: t('already_applied'),
      children: AlreadyAppliedTab
    }
  ]

  return (
    <ContainerPageWrapper>
      <div className='flex flex-col gap-10'>
        <Card className='!card-shadow'>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-6'>
            <div className='flex flex-col gap-2'>
              <Typography.Title level={3} className='!text-blue-primary !m-0'>
                {t("how_to_get_voucher_code")} <br /> <h1 style={{ color: '#3E62AD' }}>{t("buy_2_get_1")}</h1>
                <hr />
              </Typography.Title>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Typography.Title level={5} className='!font-normal !m-0 lg:block'>
                  <li className='underline mb-1'>{t("condition")}</li>
                  <li>1. {t("condition_1")}</li>
                  <li>2. {t("condition_2")}</li>
                  <li>3. {t("condition_3")}</li>
                  <li>4. {t("condition_4")}</li>
                  <li>5. {t("condition_5")}</li>
                  <li>6. {t("condition_6")}</li>
                  <li>7. {t("condition_7")}</li>
                </Typography.Title>
                <img className='w-full' src='/images/ic-demo-passport.webp' alt='demo passport' />
              </div>
            </div>
          </div>
        </Card>
        <CardTabs defaultActiveKey='1' items={tabItems} />
        <ImportantCard />
        <ContactUsCard/>
      </div>
    </ContainerPageWrapper>
  )
}
