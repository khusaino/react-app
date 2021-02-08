import React from 'react';

class Stage4 extends React.Component{
	
	
render(){
	return(
		<div className="stage-4 stages">
                            <h3 className="stages__title">
                                4. Детали и услуги
                            </h3>

                            <div className="stage-4__parameters">
                                <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-1" type="checkbox" onChange={this.props.onChange} name="pickup"/>
                                    <label htmlFor="stage-4__parameter-1">Самовывоз</label>
                                </div>
                                 <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-2" type="checkbox" onChange={this.props.onChange} name="installation"/>
                                    <label htmlFor="stage-4__parameter-2">Установка (монтаж)</label>
                                </div>
                                <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-3" type="checkbox" onChange={this.props.onChange} name="visual"/>
                                    <label htmlFor="stage-4__parameter-3">Визуализация</label>
                                </div>
                                 <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-4" type="checkbox" onChange={this.props.onChange} name="riseWithoutLift"/>
                                    <label htmlFor="stage-4__parameter-4">Подъём без лифта</label> <br/>
                                    <p>Этаж - <input type="number" min="1" max="30" onChange={this.props.onChange} name="storey"/></p>
                                </div>
                                <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-5" type="checkbox" defaultChecked onChange={this.props.onChange} name="delivery"/>
                                    <label htmlFor="stage-4__parameter-5">Доставка - <span>2000</span>руб</label> <br/>
                                    <select name="road" id="" onChange={this.props.onChange}>
                                        <option value="true">В пределах МКАД</option><option value="false">За пределами МКАД</option>
                                    </select>
                                </div>
                                <div className="stage-4__parameter">
                                    <input id="stage-4__parameter-6" type="checkbox" onChange={this.props.onChange} name="glassShelves"/>
                                    <label htmlFor="stage-4__parameter-6">Стеклянные полки</label> <br/>
                                    <p>Количество - <input type="number" min="1" max="30" onChange={this.props.onChange} name="quantity"/></p>
                                </div>
                            </div>

                            <div className="stage-4__answers">
                                <p className="stage-4__answer stage-4__answer1">
                                    - Из чего складывается цена установки?
                                </p>
                                <p className="stage-4__answer stage-4__answer2">
                                    - Откуда и когда осуществляется самовывоз?
                                </p>
                                <p className="stage-4__answer stage-4__answer3">
                                    - Возможен ли монтаж без доставки? 
                                </p>
                                <p className="stage-4__answer stage-4__answer4">
                                    - Вы делаете только душевые из стекла?
                                </p>
                            </div>


                            <div className="stages__dots">
                                <div className="stages__dot stages__dot--active" data-link='1' onClick={this.props.onClick}>1</div>
                                <div className="stages__dot stages__dot--active" data-link='2' onClick={this.props.onClick}>2</div>
                                <div className="stages__dot stages__dot--active" data-link='3' onClick={this.props.onClick}>3</div>
                                <div className="stages__dot stages__dot--active" data-link='4' onClick={this.props.onClick}>4</div>
                            </div>

                            <button className="stage-4__button stages__button" data-link='5' onClick={this.props.onClick}>
                                Перейти к расчету
                            </button>

                            <div className="stage-4__vector">
                                <img src="img/calc/stage-3/vector.png" alt="" className="stage-4__vector-img"/>
                            </div>
                        </div>
	)
}
}

export default Stage4;