import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../../../assets/Home/slide-01.jpg'
import img2 from '../../../assets/Home/slide-02.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div className='relative'>
                <img src={img1} />
                <div className='absolute text-start text-white top-8 md:top-1/4 ml-5 md:ml-28'>
                    <h1 className='md:text-7xl text-3xl font-bold md:mb-5'>PARK<br /> SPORTS<br /> ACADEMY</h1>
                    <h4 className='md:text-xl font-semibold'>Park's Finest Youth Sports Training Programs</h4>
                    <button className="md:px-4 md:py-2 px-1 text-green-600 font-semibold bg-white shadow hover:bg-gray-100 md:mt-5"
                    >Enroll Now
                    </button>
                </div>
            </div>
            <div>
                <img src={img2} />
                <div className='absolute text-start text-white top-8 md:top-1/4 ml-5 md:ml-28'>
                    <h1 className='md:text-7xl text-3xl font-bold md:mb-5'>PARK<br /> SPORTS<br /> ACADEMY</h1>
                    <h4 className='md:text-xl font-semibold'>Park's Finest Youth Sports Training Programs</h4>
                    <button className="md:px-4 md:py-2 px-1 text-green-600 font-semibold bg-white shadow hover:bg-gray-100 md:mt-5"
                    >Get Started
                    </button>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;