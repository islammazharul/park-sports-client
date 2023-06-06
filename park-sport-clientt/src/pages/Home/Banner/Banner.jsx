import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../../../assets/Home/slide-01.jpg'
import img2 from '../../../assets/Home/slide-02.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>

        </Carousel>
    );
};

export default Banner;