import FB from '../assets/fb.png'
import Inst from '../assets/inst.png'
import YT from '../assets/yt.png'
import Twt from '../assets/twt.png'

const Footer = () => {
  return (
    <div className='bg-gray-600 px-7 lg:px-20 text-gray-200 font-semibold'>
      <div className="py-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 text-lg">
          <h4 className="text-xl uppercase">Visiting Us</h4>
          <h5 className="text-5xl font-bold mt-4">Contact</h5>
          <div className="w-[100px] h-[10px] bg-gray-200 mt-4 md:mt-7" />
          <p className="mt-4 leading-[27px]">
            PSR International <br />
            117 Avenue of the Americas <br />
            10036 <br />
            New York
          </p>
        </div>
        <div className="lg:w-1/2 text-lg pt-5">
          <p><b>Phone:</b> 646 452 7204</p>
          <p><b>Email:</b> info@example.com</p>
          <p className="py-7">
            Alternatively, you can reach us via any of the social media platforms below and we will reach you as soo as possible. As always we are eager and excited to hear from you.
          </p>
          <div className='flex gap-4'>
            <a href="">
              <img src={FB} alt="facebook" className='w-[40px] rounded-full bg-gray-500 hover:bg-gray-100 transition-bg duration-500' />
            </a>
            <a href="">
              <img src={Inst} alt="instagram" className='w-[40px] rounded-full bg-gray-500 hover:bg-gray-100 transition-bg duration-500' />
            </a>
            <a href="">
              <img src={YT} alt="youtube" className='w-[40px] rounded-full bg-gray-500 hover:bg-gray-100 transition-bg duration-500' />
            </a>
            <a href="">
              <img src={Twt} alt="twitter" className='w-[40px] rounded-full bg-gray-500 hover:bg-gray-100 transition-bg duration-500' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center py-3 text-sm font-semibold text-gray-300'>
        Design Concept from NicePage.com
      </div>
    </div>
  )
}

export default Footer