interface ContainerPageWrapperProps {
  children: React.ReactNode
}

export default function ContainerPageWrapper({ children }: ContainerPageWrapperProps) {
  return (
    <div className='container page-wrapper'>
      <div className='mx-[24px] lg:mx-0'>{children}</div>
    </div>
  )
}
