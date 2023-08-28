import React from 'react';
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../assets/marcos-rodrigues/carrossel/img1.jpg';
import img2 from '../../../assets/marcos-rodrigues/carrossel/img2.jpg';
import img3 from '../../../assets/marcos-rodrigues/carrossel/img3.jpg';
import img4 from '../../../assets/marcos-rodrigues/carrossel/img4.jpg';
import img5 from '../../../assets/marcos-rodrigues/carrossel/img5.jpg';

const ImageCarousel: React.FunctionComponent = () => {
    return (
        <Box w={'full'} maxWidth="428px" my="2">
            <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                thumbWidth={500}
                emulateTouch={true}
                dynamicHeight={true}
                swipeable={true}
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true} 
                interval={3000}
            >
                <div style={{ margin: '0 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={img5} alt="Image 5" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                    <img src={img2} alt="Image 5" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                </div>
                <div style={{ margin: '0 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={img1} alt="Image 1" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                    <img src={img4} alt="Image 2" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                </div>
                <div style={{ margin: '0 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={img3} alt="Image 3" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                    <img src={img2} alt="Image 4" style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', width: "48%" }} />
                </div>
            </Carousel>
        </Box>
    );
};

export default ImageCarousel;
