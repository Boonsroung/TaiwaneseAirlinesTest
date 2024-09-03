import clsx from 'clsx'

interface ContentItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
  labelClass?: string
  children?: React.ReactNode
}

const ContentItem: React.FC<ContentItemProps> = ({ label, labelClass, children, ...props }) => {
  return (
    <div {...props}>
      <span className={clsx(labelClass, 'mr-2')}>{label}:</span>
      {children}
    </div>
  )
}

export default ContentItem
