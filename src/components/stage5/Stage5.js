import React from 'react';

class Stage5 extends React.Component{
	
	
render(){
	return(
		<div className="stage-5 stages">
                            <h3 className="stages__title">
                                5. Итоги
                            </h3>

                            <div className="stage-5__result">
                                Сроки производства:
                                <ol>
                                    <li>1. Подготовка чертежей, расчеты изделия, проверка — <span>?? день</span>  </li>
                                    <li>2. Резка стекла, обработка, сверление — <span>?? день</span> </li>
                                    <li>3. Первая помывка, закалка изделий, вторая помывка — <span>?? день</span> </li>
                                    <li>4. Проверка изделия, нанесение различных покрытий, полировка фронтальной части - <span>?? день</span></li>
                                    <li>5 Сборка фурнитуры, проверки, планирование монтажных работ и доставки — <span>?? день</span></li>
                                </ol>
                            </div>

                           <div className="stage-5__item">
                            <div className="stage-5__time">
                                Общий срок - <span>?</span> рабочих дней
                            </div>
                            <div className="stage-5__parameter">
                                <label htmlFor="stage-5__parameter">
                                    <input type="checkbox" id="stage-5__parameter" value="urgentlyNeeded" style={{display: "none"}} onChange={this.props.onChange} name="urgently"/>
                                    <div className="stil_check"></div>
                                    Нужно срочно
                                </label>
                            </div>
                            </div>

                            <div className="stage-5__price">
                                Стоимость: <span> ????</span>
                            </div>

                            <div className="stage-5__direction">
                                <ol>
                                    <li>1.  Если Вам достаточно приблизительного расчёта. то можем отправить смету Вам на почту. </li>
                                    <li>2. Для получения точного расчёта предлагаем отправить к Вам замерщика.</li>
                                    <li>3. Так же, мы можем в срочном порядке сделать точный расчёт по телефону, исходя из заполненной Вами информации.</li>
                                </ol>
                            </div>

                            <div className="stage-5__buttons">
                                <button className="button-mail button-style popup__call-2">
                                    1. Отправить расчёт на e-mail
                                </button>
                                <button className="button-call button-style popup__call-1">
                                    2. Вызвать замерщика
                                </button>
                                <div className="stage-5__contact-mob">
                                    С нами так же можно связаться по телефону 
                                    <a href="tel:+7 (000) 000-00-00">+7 (000) 000-00-00</a> или по E-mail - 
                                    <a href="mailto:xxxx@xxxx.ru">xxxx@xxxx.ru</a>
                                </div>

                                <button className="button-consultation  button-style popup__call-1">
                                    3. Консультация
                                </button>
                            </div>

                        </div>
	)
}
}

export default Stage5;