import React from 'react';

class Stage2 extends React.Component{
	
	
render(){
	return(
		<div className="stage-2 stages">
                            <h3 className="stages__title">
                                2. Выберите вид стекла
                            </h3>

                            <div className="stage-2__kinds ">
                                <div className="stage-2__kind stage-2__kind-1">
                                    <img src="img/calc/stage-2/1.png" alt=""/>
                                    <input type="radio" id="stage-2__kind-checkbox1" className="stage-2__kind-checkbox" name="glassType" value="
									transparent" defaultChecked onChange={this.props.onChange}/>
                                    <span>Прозрачное</span>
                                    <label className="stage-2label" htmlFor="stage-2__kind-checkbox1"></label>
                                </div>
                                <div className="stage-2__kind stage-2__kind-2">
                                    <img src="img/calc/stage-2/2.png" alt=""/>
                                    <input type="radio" id="stage-2__kind-checkbox2" className="stage-2__kind-checkbox" name="glassType" value="
									clarified" onChange={this.props.onChange}/>
                                    <span>Осветлённое</span>
                                    <label className="stage-2label" htmlFor="stage-2__kind-checkbox2"></label>
                                </div>
                                <div className="stage-2__kind stage-2__kind-3">
                                    <img src="img/calc/stage-2/3.png" alt=""/>
                                    <input type="radio" id="stage-2__kind-checkbox3" className="stage-2__kind-checkbox" name="glassType" value='matt' onChange={this.props.onChange}/>
                                    <span>Матовое</span>
                                    <label className="stage-2label" htmlFor="stage-2__kind-checkbox3"></label>
                                </div>
                                <div className="stage-2__kind stage-2__kind-4">
                                    <img src="img/calc/stage-2/4.png" alt=""/>
                                    <input type="radio" id="stage-2__kind-checkbox4" className="stage-2__kind-checkbox" name="glassType" value='graphite'onChange={this.props.onChange}/>
                                    <span>Графит</span>
                                    <label className="stage-2label" htmlFor="stage-2__kind-checkbox4"></label>
                                </div>
                                <div className="stage-2__kind stage-2__kind-5">
                                    <img src="img/calc/stage-2/5.png" alt=""/>
                                    <input type="radio" id="stage-2__kind-checkbox5" className="stage-2__kind-checkbox" name="glassType" value='bronze'onChange={this.props.onChange}/>
                                    <span>Бронза</span>
                                    <label className="stage-2label" htmlFor="stage-2__kind-checkbox5"></label>
                                </div>
                            </div>

                            <div className="stage-2__parameters">
                                <div className="stage-2__parameter">
                                    <input id="stage-2__parameter1" type="checkbox" className="stage-2__parameter-checkbox" onChange={this.props.onChange} name="addDrawing"/>
                                    Добавить рисунок <br/>
                                    <span>
                                        (пескоструй,  матовка)
                                    </span>
                                    <label id="stage-label" htmlFor="stage-2__parameter1"></label>
                                </div>

                                <div className="stage-2__parameter">
                                    <input id="stage-2__parameter2" type="checkbox" className="stage-2__parameter-checkbox" onChange={this.props.onChange} name="spraying"/>
                                    Гидрофобное напыление <br/>
                                    <span>
                                    (антикапля/противогрибковое)
                                    </span>
                                    <label id="stage-label" htmlFor="stage-2__parameter2"></label>
                                </div>

                                <div className="stage-2__parameter">
                                    <input id="stage-2__parameter3" type="checkbox" className="stage-2__parameter-checkbox" onChange={this.props.onChange} name="glass10mm"/>
                                    Толщина стекла 10мм <br/>
                                    <span>(по умолчанию 8мм)</span>
                                    <label id="stage-label"  htmlFor="stage-2__parameter3"></label>
                                </div>
                            </div>

                            <div className="stages__dots">
                                <div className="stages__dot stages__dot--active" data-link='1' onClick={this.props.onClick}>1</div>
                                <div className="stages__dot stages__dot--active" data-link='2' onClick={this.props.onClick}>2</div>
                                <div className="stages__dot" data-link='3' onClick={this.props.onClick}>3</div>
                                <div className="stages__dot" data-link='4' onClick={this.props.onClick}>4</div>
                            </div>

                            <div className="stage-2__prompt-before">
                               <div className="stage-2__prompt">
                                    Стекло М1, прозрачное, или просто обычное стекло. Все это - названия флоат-стекла,        являющегося самым популярным материалом стекольной промышленности. Имеет зеленоватый оттенок, ярко выраженный в виде с торца. Очень часто используется в темных помещениях, или в помещениях с темной плиткой / черным мрамором, так как зеленоватый отлив, при темном фоне не виден так отчетливо, а учитывая самую низкую цену стекла среди базовых видов, является лучшим выбором для таких помещений.
                                     <div className="stage-2__prompt-after"></div>
                                </div>
                            </div>

                            <button className="stage-2__button stages__button" data-link='3' onClick={this.props.onClick}>
                                Перейти к выбору фурнитуры
                            </button>

                        </div>
	)
}
}

export default Stage2;