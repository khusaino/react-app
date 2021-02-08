

import {Swiper, SwiperSlide} from 'swiper/react'

function TypesOfGoods(props){
	let active = props.active;
	return(
	<div className="calc__kind">
    	<Swiper
			slidesPerView={3}
    		
    		breakpoints={{
			1200: {
			  slidesPerView: 10,
			},
			960: {
			  slidesPerView: 8,
			},
			768: {
			  slidesPerView: 6,
			},
			576: {
			  slidesPerView: 4,
			},
  		}}>
				{props.calcData.map(elem=>{
				return(
					<SwiperSlide key={elem.id}>
						<div className={active===elem.id ? "tab-item tab-item--active" :'tab-item'} 
						data-type={elem.id}
						onClick={props.onClick}>
							<img src={elem.headerImg} alt={elem.id} data-type={elem.id}/> 
							<div className={active===elem.id ? "tab-arrow tab-arrow--active" :'tab-arrow'}></div>
						</div>
					</SwiperSlide>
				)
				})}
                <SwiperSlide><span className="call-measurer popup__call-1">
                     Вызвать замерщика
                </span></SwiperSlide> 
		</Swiper>
	</div>
	)
}

export default TypesOfGoods;



















