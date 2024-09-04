import ReCAPTCHA from 'react-google-recaptcha'
import clsx from 'clsx'

interface ReCAPTCHAFormProps {
  centered?: boolean
  onChange?: (value?: string) => void
}

export default function ReCAPTCHAForm({ centered, onChange }: ReCAPTCHAFormProps) {
  return (
    <div className={clsx({ 'flex justify-center': centered })}>
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_APP_RECAPTCHA_KEY}
        onChange={(value: string | null) => {
          if (onChange) {
            onChange(value || undefined)
          }
        }}
      />
    </div>
  )
}
