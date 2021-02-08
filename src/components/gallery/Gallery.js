import React from "react";

import SwiperCore, {EffectCoverflow, Navigation,Controller} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


SwiperCore.use([EffectCoverflow, Navigation,Controller])

class Gallery extends React.Component{


	
render(){
	let imgList = this.props.imgList;
	return(
	<div className="calc__gallarys " >
		<div className="calc__gallary calc__gallary--active" >
            <Swiper 
				effect='coverflow'
				centeredSlides={true}
				slidesPerView="auto"
    			initialSlide={3}
        		navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
			  	}}
			  	coverflowEffect={{
					rotate: 0,
					stretch: 300,
					depth: 300,
					modifier: 1,
					slideShadows: false,
				}}
			  	breakpoints={{    
				960: {
					coverflowEffect: {
						rotate: 0,
						stretch: 800,
						depth: 300,
						modifier: 1,
						slideShadows: false,
					}, 
				},
				768:{
					coverflowEffect: {
						rotate: 0,
						stretch: 700,
						depth: 300,
						modifier: 1,
						slideShadows: false,
					}, 
				},
				576:{
					coverflowEffect: {
						rotate: 0,
						stretch: 500,
						depth: 300,
						modifier: 1,
						slideShadows: false,
					}, 
				}}}
			>
                    {imgList.map((elem,i)=>{
						return(
						<SwiperSlide key={i}><img src={elem} alt=""/></SwiperSlide> 
						)
					})}
					
			</Swiper>		
		<div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                
            
        </div>
		<p className="calc__gallarys-text">
           Мы предлагаем сделать расчет стоимости и срока изготовления удаленно. Если Вас все устроит в нашем предложении, мы пришлем к Вам замерщика. Если у Вас нет времени - обращайтесь, отправим замерщика сразу!  
        </p>
		<button className="calc__button-gallary-2 button__mob-gallary" data-link='2' onClick={this.props.onClick}>
            <img src="img/calc/Money.png" alt=""/>
            Рассчитать стоимость
        </button>
		<button className="call-measurer-2 button__mob-gallary popup__call-1">
            <img src="img/calc/measurer.png" alt="" className=""/>
             Вызвать замерщика
        </button>
     </div>
	)
}
}

export default Gallery;