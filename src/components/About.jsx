import ABoutBg from '../assets/aboutbg.jpg'

const About = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:items-center px-5 lg:px-20">
        <div className="lg:w-1/2">
          <h2 className="uppercase text-gray-800 text-lg font-semibold">About us</h2>
          <h3 className="text-4xl md:text-6xl font-bold mt-4 md:mt-7 capitalize">We are your best solution.</h3>
          <div className="w-[100px] h-[10px] bg-black mt-4 md:mt-7" />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-[16px] text-gray-600 font-semibold">
            The Construction Company Agency (TCA) focuses on our clients needs and wants. WIth having a full design and construction team, we are able to walk you through the process, from preconstruction to to the final product. We specialize in new builds and major remodels for residency and commerce. When you are looking for 100% dependability, there is no denying the positive facts of our business.
          </p>
          <button className="bg-gray-900 px-4 py-1 text-gray-300 font-semibold uppercase mt-3" >More</button>
        </div>
      </div>

      <div className='bg-gray-950'>
        <div className='container mx-auto text-gray-200 mt-10 px-5 lg:px-20 py-10 flex flex-col lg:flex-row gap-8'>
          <div style={{backgroundImage: `url(${ABoutBg})`, backgroundPosition: 'center'}} className='hidden lg:block lg:w-1/2' />
          <img src={ABoutBg} alt='about-img' className='lg:hidden' />
          <div className='lg:w-1/2 py-5'>
            <h2 className="uppercase text-lg font-semibold">About us</h2>
            <h3 className="text-4xl md:text-6xl font-bold mt-4 md:mt-5 capitalize">Company Overview</h3>
            <p className="text-[16px] text-gray-200 font-semibold mt-5">
              The Construction Company Agency (TCA) focuses on our clients needs and wants. WIth having a full design and construction team, we are able to walk you through the process, from preconstruction to to the final product. We specialize in new builds and major remodels for residency and commerce. When you are looking for 100% dependability, there is no denying the positive facts of our business.
            </p>
            <div className="w-[100px] h-[10px] bg-gray-200 mt-4 md:mt-7" />
            <h2 className="uppercase text-lg font-semibold mt-7">Mission statement</h2>
            <p className="text-[16px] text-gray-200 font-semibold mt-5">
              To create long lasting relationships by providing construction solutions that result in exceptional outcomes.
            </p>
            <h2 className="uppercase text-lg font-semibold mt-7">Vision</h2>
            <p className="text-[16px] text-gray-200 font-semibold mt-5">
              To lead the residentioal and commercial construction industry with excellence, an outstanding reputtation and to create long lasting and strong patnerships.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-gray-600'>
        <div className='container mx-auto text-gray-200 px-5 lg:px-20 py-10 flex  flex-col lg:flex-row gap-8 lg:items-center'>
          <div className='lg:w-1/2'>
            <h2 className="uppercase text-gray-200 text-lg font-semibold">From start to finish</h2>
            <h3 className="text-4xl md:text-6xl font-bold mt-4 md:mt-5 capitalize">Clients values</h3>
            <div className="w-[100px] h-[10px] bg-gray-200 mt-4 md:mt-7" />
          </div>
          <div className='lg:w-1/2'>
            <p className="text-[16px] text-gray-200 font-semibold">
              The ultimate goal for every client we encounter is the value and the maximum return on their investment. The quality of the project, the cost and schedule are key factors in determining that value. Many contractors do not view these factors as such. They believe quality is achieved when the cost and time spent on the job is high. This create disasters. We love our clients to be happy. We don&apos;t love disasters. 
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About