import logo from "../assets/images/logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import shopBanner from "../assets/images/banner.jpg";
import "../swiper.css";

function Home(){
    return (
        <>
            <div className="mt-12 mx-auto w-full px-5 md:w-full ">
                <Swiper
                    pagination={false} modules={[Pagination]} 
                >
                    <SwiperSlide >
                        <Image src={shopBanner} className='rounded-xl mx-auto' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}


export default Home;