import BannerL from './BannerL'
import BannerR from './BannerR'

const Banner = () => {
  return (
    <div className='min-h-screen bg-amber-50 flex flex-col lg:flex-row gap-4 items-center justify-between '>
      <BannerL />
      <BannerR />
    </div>
  )
}

export default Banner
