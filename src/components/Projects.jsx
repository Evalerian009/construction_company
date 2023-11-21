import ResInt from '../assets/interior-res.jpg'
import ResEx from '../assets/exterior-res.jpg'
import Commercial from '../assets/commercial.jpg'
import ProjectsBg1 from '../assets/projectsbg1.jpg'
import Check from '../assets/check-50.png'

const Projects = () => {
  return (
    <div className='px-5 md:px-20 py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-x-10 gap-y-5 font-semibold'>
        <div className='md:flex gap-x-5 items-center lg:block lg:w-1/3'>
          <img src={ResInt} alt='residential-interior' className='w-[85%] md:w-2/3 lg:w-full' />
          <div className='flex md:flex-col lg:flex-row items-baseline gap-x-2 py-2'>
            <div className="w-[50px] h-[10px] bg-gray-900" />
            <h4 className='text-lg uppercase font-semibold'>
              Modern Residential Interior
            </h4>
          </div>
        </div>
        <div className='md:flex gap-x-5 items-center lg:block lg:w-1/3'>
          <img src={ResEx} alt='residential-exterior' className='w-[85%] md:w-2/3 lg:w-full' />
          <div className='flex md:flex-col lg:flex-row items-baseline gap-x-2 py-2'>
            <div className="w-[50px] h-[10px] bg-gray-900" />
            <h4 className='text-lg uppercase font-semibold'>
              Modern Residential Exterior
            </h4>
          </div>
        </div>
        <div className='md:flex gap-x-5 items-center lg:block lg:w-1/3'>
          <img src={Commercial} alt='commercial' className='w-[85%] md:w-2/3 lg:w-full' />
          <div className='flex md:flex-col lg:flex-row items-baseline gap-x-2 py-2'>
            <div className="w-[50px] h-[10px] bg-gray-900" />
            <h4 className='text-lg uppercase font-semibold'>
              Commercial
            </h4>
          </div>
        </div>
      </div>

      <div className='container mx-auto pt-20 flex flex-col lg:flex-row gap-8 font-semibold'>
        <div className='w-full h-[60vh] lg:w-1/2 lg:h-[auto]' style={{backgroundImage: `url(${ProjectsBg1})`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
        <div className='lg:w-1/2 flex flex-col gap-7 lg:pr-7'>
            <div className='flex gap-3'>
              <img src={Check} alt='list-image' width={35} className='self-start' />
              <div>
                <h5 className='uppercase font-semibold text-lg'>We ensure quality for your peace of mind</h5>
                <p className='py-2'>
                  We also maintain and repair residential and commercial properties on jobs we provided work.
                </p>
              </div>
            </div>
            <div className='flex gap-3'>
              <img src={Check} alt='list-image' width={35} className='self-start' />
              <div>
                <h5 className='uppercase font-semibold text-lg'>We keep things clean and we keep it affordable.</h5>
                <p className='py-2'>
                  TCA keeps the mess at a minimum and contained. Essentially, we clean up after ourselves.
                </p>
              </div>
            </div>
            <div className='flex gap-3'>
              <img src={Check} alt='list-image' width={35} className='self-start' />
              <div>
                <h5 className='uppercase font-semibold text-lg'>Safety</h5>
                <p className='py-2'>
                  Each day we strive to keep a safe work place and keep a watch of our sorroundings. We challenge every worker to make safe decisions daily.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects