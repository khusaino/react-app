import React from 'react';



const stageData = 
	{
		'1lvl':Array(1).fill('img/calc/stage-3/1.jpg'),
		'2lvl':Array(1).fill('img/calc/stage-3/2.jpg'),
		'3lvl':Array(1).fill('img/calc/stage-3/3.jpg'),
		'4lvl':Array(1).fill('img/calc/stage-3/4.jpg'),
	}



class Stage3 extends React.Component{
constructor(props){
	super(props)
	this.state= {
		showOption: '1lvl',
	}
}

handleClick=(e)=>{
	this.props.onChange(e);
	this.setState({showOption : e.target.value})
}

getCssClass=(e)=>{
	let a = e.target
	console.dir(e)
	return ''
}
	
render(){
	
	return(
		<div className="stage-3 stages">
                            <h3 className="stages__title">
                                3. Выберите вид фурнитуры
                            </h3>

                            <p className="stage-3__top-text">
                                Фурнитура влияет на функционал, внешний вид и на срок службы изделия. Дешево и идеально — не бывает, следует это понимать. Правда, и идеалы у всех разные.
                            </p>

                            <div className="stage-3__option">
                                <label className={this.state.showOption==='1lvl'? "stage-3__option-item stage-3__option-item--active": "stage-3__option-item"}>
									<input className="visible" type="radio" name='typeFurniture' onChange={this.handleClick} value='1lvl'/>
                                    Бюджетный сегмент
                                </label>
                                <label className={this.state.showOption==='2lvl'? "stage-3__option-item stage-3__option-item--active": "stage-3__option-item"}>
									<input className="visible" type="radio" name='typeFurniture' onChange={this.handleClick} value='2lvl'/>
                                    Комбин. комплекты
                                </label>
                                <label className={this.state.showOption==='3lvl'? "stage-3__option-item stage-3__option-item--active": "stage-3__option-item"}>
									<input className="visible" type="radio" name='typeFurniture' onChange={this.handleClick} value='3lvl'/>
                                    Премиум
                                </label>
                                <label className={this.state.showOption==='4lvl'? "stage-3__option-item stage-3__option-item--active": "stage-3__option-item"}>
									<input className="visible" type="radio" name='typeFurniture' onChange={this.handleClick} value='4lvl'/>
                                    Заказные / Люкс
                                </label>
                            </div>
							
							{
								stageData[this.state.showOption].map((elem,i)=>{
							return(
							<div className="stage-3__gallary stage-3__gallary--active" key={i}>
                                <div className="stage-3__gallary-item">
                                    <img src={elem} alt=""/>
                                    <img src={elem} alt=""/>
                                </div>
                                <div className="stage-3__gallary-item">
                                    <img src={elem} alt=""/>
                                    <img src={elem} alt=""/>
                                </div>
                            </div>
							)
							})
							}
                            


                            <p className="stage-3__bottom-text">
                                Так выглядит популярная фурнитура этого ценового сегмента. В реальности выбор очень большой. Со всеми деталями Вас ознакомит замерщик, который привозит образцы стекол, полные каталоги, и некоторые образцы фурнитуры для примерки или показа.
                            </p>

                            <div className="stages__dots">
                                <div className="stages__dot stages__dot--active" data-link='1' onClick={this.props.onClick}>1</div>
                                <div className="stages__dot stages__dot--active" data-link='2' onClick={this.props.onClick}>2</div>
                                <div className="stages__dot stages__dot--active" data-link='3' onClick={this.props.onClick}>3</div>
                                <div className="stages__dot" data-link='4' onClick={this.props.onClick}>4</div>
                            </div>

                              <button className="stage-3__button stages__button" data-link='4' onClick={this.props.onClick}>
                                Перейти к выбору фурнитуры
                            </button>
                        </div>
	)
}
}

export default Stage3;
let stage3Option = document.getElementsByClassName('stage-3__option-item');
console.log(stage3Option)
        for(let i = 0; i < stage3Option.length; i++){
            stage3Option[i].onclick = function (){
                for(let k = 0; k < stage3Option.length; k++){
                        stage3Option[k].classList.remove('stage-3__option-item--active');                  
                        stage3Option[i].classList.add('stage-3__option-item--active');    
                }
            }
        }