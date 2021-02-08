import React from 'react';
import TypesOfGoods from '../TypesOfGoods/TypesOfGoods';
import Gallery from '../gallery/Gallery'
import Stage2 from '../stage2/Stage2'
import Stage3 from '../stage3/Stage3'
import Stage4 from '../stage4/Stage4'
import Stage5 from '../stage5/Stage5'

const calcData = [
	{
		id: 'type1',
		headerImg: 'img/calc/calc_icon/1.png',
		imgList : Array(7).fill("img/calc/slider/1.jpg"),
	},
	{
		id: 'type2',
		headerImg: 'img/calc/calc_icon/2.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/2.jpg"),
	},
	{
		id: 'type3',
		headerImg: 'img/calc/calc_icon/3.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/3.jpg"),
	},
	{
		id: 'type4',
		headerImg: 'img/calc/calc_icon/4.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/4.jpg"),
	},
	{
		id: 'type5',
		headerImg: 'img/calc/calc_icon/5.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/5.jpg"),
	},
	{
		id: 'type6',
		headerImg: 'img/calc/calc_icon/6.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/6.jpg"),
	},
	{
		id: 'type7',
		headerImg: 'img/calc/calc_icon/7.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/7.jpg"),
	},
	{
		id: 'type8',
		headerImg: 'img/calc/calc_icon/8.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/8.jpg"),
	},
	{
		id: 'type9',
		headerImg: 'img/calc/calc_icon/9.png',
		showType: true,
		imgList:Array(7).fill("img/calc/slider/1.jpg"),
	},
]
const allValues={
	name: '',
	phone: '',
	mail: '',
	comment: '',
	date: '',
	time: '',
	type: 'type1',
	glassType: 'transparent',
	addDrawing: false,
	spraying: false,
	glass10mm: false,
	typeFurniture: '',
	pickup: false,
	installation: false,
	visual: false,
	riseWithoutLift: false,
	storey: '',
	delivery: true,
	road: '',
	glassShelves: false,
	quantity: '',
	urgently: false,
}


class Calc extends React.Component{
constructor(props){
	super(props)
	this.state= {
		activeType: 'type1',
		showStage: "1",
	}
	
}
	


setAllValuesBool=(e)=>{
	let target = e.target;
	if(target.type === 'checkbox'){
		allValues[target.name] = !allValues[target.name];
	}
	else{
		allValues[target.name] = target.value;
	}
}
	
getType(e){
	let id = e.target.getAttribute('data-type');
	this.setState({activeType: id})
	allValues.type = id;
}
	
getGalleryList=()=>{
	let active = this.state.activeType;
	let res = []
	calcData.map(elem=>{
		if(active === elem.id){
			res = elem.imgList
		}
	})
	return res;
}

getShowStage=(e)=>{
	let linkId = e.target.getAttribute('data-link')
	this.setState({showStage: linkId})
}

renderSwitch=()=>{
	return ''
}

render(){
	/*
		в show присваивается компонент который будет отрендерен изходя из условий:
		если ShowStage === номеру компонента
		1 <Gallery/>
		2 <Stage2/>
		3 <Stage3/>
		4 <Stage4/>
		else <Stage5/>
		ShowStage берет номер с кнопок переключения, которые переключают этапы калькулятора. Номера указаны в data-атрибуте "link" кнопок.
	*/
	let show = '';
	let showSatge = this.state.showStage;
	if(showSatge === '1'){
		show = <div>
					<Gallery 
						imgList={this.getGalleryList()}
						onClick={this.getShowStage}
					/>
					<button 
						className="calc__button-gallary" 
						data-link='2' 
						onClick={this.getShowStage}>
						<img src="img/calc/Money.png" alt=""
					/>
                        Заполнить бриф и получить расчет
                    </button>
				</div>
	}
	else if(showSatge === '2'){
		show = <Stage2 onChange={this.setAllValuesBool}
				onClick={this.getShowStage}/>
	}
	else if(showSatge === '3'){
		show = <Stage3 onChange={this.setAllValuesBool}
				onClick={this.getShowStage}/>
	}
	else if(showSatge === '4'){
		show = <Stage4 onChange={this.setAllValuesBool}
				onClick={this.getShowStage}/>
	}
	else {
		show = <Stage5 onChange={this.setAllValuesBool}
				onClick={this.getShowStage}/>
	}
	return(
	<section className="calc" id="calc">
            <div className="container calc__container">
                <h2 className="calc__title">
                    Виды и примеры душевых ограждений
                </h2>
                <div className="calc__content">
		
                    <TypesOfGoods 
						calcData={calcData}
						active={this.state.activeType}
						onClick={(e)=>this.getType(e)}
					/>

                    <div className="calc__wrapper">
						{show}
                    </div>
                </div>
            </div>
        </section>
	)
}};


export default Calc



