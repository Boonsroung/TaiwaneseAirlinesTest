import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='bg-[#3E62AD] h-[16px] lg:h-[32px]' />
      <header className='h-[64px] lg:h-[76px] bg-white px-4 lg:px-60 flex items-center'>
        <Link to='/home'>
          <img src='/images/ic-vision-thai-logo.webp' alt='vision thai logo' className='h-[50px] lg:h-[60px]' />
        </Link>
      </header>
    </>
  )
}
