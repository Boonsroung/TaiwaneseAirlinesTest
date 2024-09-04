import desktopBanner from '../assets/images/Vision Thai 2880x800_0.png';
import tabletBanner from '../assets/images/Vision Thai 1200x600_0.png';
import mobileBanner from '../assets/images/Vision Thai 750x800.png';

export default function HeroBanner() {
  return (
    <div className='relative w-full'>
      <picture>
        {/* รูปสำหรับจอใหญ่ เช่น Desktop */}
        <source media="(min-width: 1024px)" srcSet={desktopBanner} />
        {/* รูปสำหรับจอขนาดกลาง เช่น Tablet */}
        <source media="(min-width: 768px)" srcSet={tabletBanner} />
        {/* รูปสำหรับจอเล็ก เช่น Mobile */}
        <img
          src={mobileBanner}
          alt="Hero Banner"
          className="w-full h-auto max-h-[600px] object-cover"
        />
      </picture>
    </div>
  );
}
