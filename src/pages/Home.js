import logo from "../assets/images/logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectFade, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import shopBanner from "../assets/images/banner.jpg";
import shopBanner2 from "../assets/images/banner2.png";
import newBanner1 from "../assets/images/newbanner1.png";
import newBanner2 from "../assets/images/newbanner2.png";
import newBanner3 from "../assets/images/newbanner3.png";
import "../swiper.css";

function Home(){
    return (
        <>
            <div className=" mx-auto w-full px-5 md:w-full ">
                <div className="hidden md:block mt-5 lg:mt-12">
                    <Swiper
                        pagination={true} 
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        modules={[Pagination]} 
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image src={newBanner1} className='rounded-xl mx-auto' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={newBanner2} className='rounded-xl mx-auto' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={newBanner3} className='rounded-xl mx-auto' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={"https://placehold.co/1050x315"} className='rounded-xl mx-auto' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </>
    );
}


export default Home;