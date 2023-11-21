import OffersBg from '../assets/offersbg.jpg'

const Offers = () => {
  return (
    <div className='bg-gray-950 px-7 md:px-20 py-12'>
      <div className='container mx-auto text-gray-200 flex flex-col lg:flex-row gap-8'>
        <div className="lg:w-1/2 pt-7">
          <h5 className="uppercase text-lg">Guranteed</h5>
          <h6 className="text-4xl md:text-5xl font-bold mt-4">100% satisfaction</h6>
          <ol className="py-7 list-disc pl-12 md:pl-16 lg:pl-24 flex flex-col gap-y-10 font-semibold">
            <li>Fully licensed and insured with industry-leading manufacturer and labor waranties.</li>
            <li>
              The best customer service in the business, no joke!
            </li>
            <li>The highest quality products and certified, trained and professional contractors on every project with safety as our top priority.</li>
            <li>
              24/7 residential and commercial emergency services and repair always available.
            </li>
          </ol>
        </div>
        <div className='w-full h-[60vh] lg:w-1/2 lg:h-[auto]' style={{backgroundImage: `url(${OffersBg})`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
      </div>
    </div>
  )
}

export default Offers