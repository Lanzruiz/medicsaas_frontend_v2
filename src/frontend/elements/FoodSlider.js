import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,  Navigation } from "swiper";
import { IMAGES } from '../constant/theme';


const ImageBlog = [
    {image: IMAGES.FoodIcon1, title:"soft drink", effect:true },
    {image: IMAGES.FoodIcon2, title:"fast food", effect:false },
    {image: IMAGES.FoodIcon3, title:"pastry",effect:false },
    {image: IMAGES.FoodIcon4, title:"burger",effect:false },
    {image: IMAGES.FoodIcon5, title:"chinese",effect:false },
    {image: IMAGES.FoodIcon6, title:"vegetable",effect:false },
    {image: IMAGES.FoodIcon7, title:"watermelon",effect:false },
];

export default function FoodSlider(){
   // const navigationPrevRef = React.useRef(null)
	//const navigationNextRef = React.useRef(null)
    return(
        <>           
            <Swiper className="owl-carousel item-carousel"
                speed= {1500}
                parallax= {true}
                slidesPerView= {10}
                spaceBetween= {15}
                loop={true}
                autoplay= {{
                    delay: 2700,
                }}
                breakpoints = {{
                    1800: {
                        slidesPerView: 10,
                    },
                    1600: {
                        slidesPerView: 8,
                    },
					1400: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                    },

                    992: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    // 320: {
                    //     slidesPerView: 2,
                    // },
				}}
                modules={[Navigation , Autoplay]}
            >
                {ImageBlog.map((data, index)=>(
                    <SwiperSlide className="swiper-slide" key={index}>    
                        <div className={`item-box ${data.effect ? 'active' : ''}`}

                        >
                            <img src={data.image} alt="" />
                            <h5 className="title mb-0">{data.title}</h5>
                        </div>
                    </SwiperSlide>                        
                ))}
            </Swiper>    
        </>
    )
}