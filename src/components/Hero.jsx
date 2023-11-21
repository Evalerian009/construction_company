import HeroBg from '../assets/herobg.jpg'
import Logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className="w-screen h-[97vh] md:h-[65vh] lg:h-screen" style={{backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover'}}>
      <div className='w-full h-full bg-[#1c19179b] flex flex-col'>
        <div className='flex flex-wrap items-center pr-14'>
          <div className='w-full lg:w-fit'>
            <img src={Logo} alt='logo' className='w-[200px] md:w-[250px]' />
          </div>
          <div className='ml-auto'>
            <h1 className='uppercase text-gray-300 text-lg pb-7 text-right font-semibold'>We are your best solution</h1>
            <div className='w-[100px] h-[8px] bg-gray-300 ml-auto' />
          </div>
        </div>
        <div className='my-auto'>
          <h1 className='text-gray-300 uppercase text-2xl font-semibold text-center mb-4 px-4'>Welcome to the costruction agency</h1>
          <h2 className='text-center text-gray-300 capitalize text-4xl md:text-5xl mb-2'>Call us today</h2>
          <h3 className='text-gray-300 text-center text-4xl md:text-5xl font-bold mb-8'>403.334.7689</h3>
          <button className='block w-fit mx-auto bg-gray-300 py-1 px-4 uppercase font-semibold hover:bg-gray-800 hover:text-gray-50 transition-all duration-500'>More about us</button>
        </div>
      </div>
    </div>
  )
}

export default Hero