
import './App.css';

import Header from './components/header/Header';
import Calc from './components/calc/Calc';

function App() {
  return (
    <div className="wrapper">
        <Header />
        <Calc />
        <section className="advantage">
              <img src="img/advantage/bg-l.png" alt="" className="advantage__bg-l"/>
              <img src="img/advantage/bg-r.png" alt="" className="advantage__bg-r"/>
               <div className="container">
                <h2 className="title title--white  advantage__title">
                    Плюсы и преимущества
                </h2>

              <div className="advantage__items">
                  <div className="advantage__item">
                      <div className="advantage__item-title">
                          Закаленное стекло 8-15мм
                      </div>
                      <p className="advantage__item-text">
                        Английское сырье Guardian, Pilkington и Японское AGC
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/1.png" alt=""/></div>
                  </div>
                  <div className="advantage__item advantage__item--center">
                      <div className="advantage__item-title">
                          Срочное изготовление 
                      </div>
                      <p className="advantage__item-text">
                        - от 24-х часов. <br/>Стандартное - 7 дней
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/2.png" alt=""/></div>
                  </div>
                  <div className="advantage__item">
                      <div className="advantage__item-title">
                          Специальное покрытие
                      </div>
                      <p className="advantage__item-text">
                        стекла и фурнитуры, защищающий от грязи и почернения (грибка)
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/3.png" alt=""/></div>
                  </div>
                  <div className="advantage__item advantage__item--none">
                      <div className="advantage__item-title">
                          Гарантия на душевые 
                      </div>
                      <p className="advantage__item-text">
                          ограждения и двери - 5 лет. <br/>Качественное сервисное обслуживание 
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/4.png" alt=""/></div>
                  </div>
                  <div className="advantage__item advantage__item--none">
                      <div className="advantage__item-title">
                          Опытный персонал
                      </div>
                      <p className="advantage__item-text">
                        со знанием дела, аккуратностью и опытом работы 3+ лет. <br/>Конструкторы в штате
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/5.png" alt=""/></div>
                  </div>
                  <div className="advantage__item advantage__item--none">
                      <div className="advantage__item-title">
                          Большой ассортимент
                      </div>
                      <p className="advantage__item-text">
                        от бюджетного до премиум сегмента стекла и фурнитуры
                      </p>
                      <div className="advantage__item-img"><img src="img/advantage/6.png" alt=""/></div>
                  </div>
              </div>
              </div>

              <button className="advantage__button">
                  <a href="#calc">
                      <img src="img/advantage/arr.png" alt=""/>
                      Заказать душевую
                  </a>
              </button>
          </section>  
        <section className="glass">
                 <div className="glass__container">
                    <h2 className="title ">
                        Основные виды стекла
                    </h2> 

                     <div className="glass__content">
                         <div className="glass__content-items">
                            <div className="glass__items">
                                 <div className="glass__content-item"><img src="img/calc/stage-2/1.png" alt=""/><span>
                                     Прозрачное
                                 </span></div>
                                 <div className="glass__content-item"><img src="img/calc/stage-2/2.png" alt=""/><span>
                                     Осветлённое
                                 </span></div>

                                 <div className="glass__items-bg"></div>
                             </div>
                             <div className="glass__items">
                                 <div className="glass__content-item"><img src="img/calc/stage-2/3.png" alt=""/><span>
                                     Матовое
                                 </span></div>
                                 <div className="glass__content-item"><img src="img/calc/stage-2/4.png" alt=""/><span>
                                     Графит
                                 </span></div>

                                 <div className="glass__items-bg"></div>
                             </div>
                             <div className="glass__items">
                                 <div className="glass__content-item"><img src="img/calc/stage-2/5.png" alt=""/><span>
                                     Бронза
                                 </span></div>

                                 <button className="button-consultation glass__button popup__call-1">
                                     Консультация
                                 </button>

                                 <div className="glass__items-bg"></div>
                             </div>
                             <div className="glass__content-bg"></div>
                         </div>

                     </div>

                 </div>
             </section>     
        <section className="compare">
            <div className="compare__container">
                <h2 className="title ">
                    Сравнение видов прозрачного стекла
                </h2>

                 <div className="compare__properties">
                     <div className="compare__properties-img">
                         <img src="img/compare/image.jpg" alt=""/>
                     </div>

                     <div className="compare__properties-text-left">
                         Прозрачное <br/><span>(б/ц, М1, “обычное”)</span>
                     </div>
                     <div className="compare__properties-text-right">
                         Осветленное <br/><span>(OptiWhite, CrystalVision)</span>
                     </div>

                 </div>

                  <div className="compare__feature">
                      <div className="compare__feature-left compare__feature-text">
                          <ul>
                             <li>Прозрачное <br/><span>(б/ц, М1, “обычное”)</span></li>
                              <li>Низкая стоимость<div className="dot"></div>
                              </li>
                              <li>Зеленый отблеск на светлых оттенках<div className="dot"></div>
                              </li>
                          </ul>
                      </div>
                        <div className="compare__feature-right compare__feature-text">
                          <ul>
                             <li>Осветленное <br/><span>(OptiWhite, CrystalVision)</span></li>
                              <li><div className="dot"></div>Высокая стоимость</li>
                              <li><div className="dot"></div>Идеальная цветопередача и прозрачность</li>
                          </ul>
                      </div>

                  </div>


            </div>

        </section>    
        <section className="example">
            <div className="example__container">
                <h2 className="title ">
                    Примеры работ
                </h2>

                <div className="example__list list">
                    <div className="list__item">
                        <div className="list__header">
                        <h3 className="list__title">
                            1. Угловая душевая с бронзовым стеклом
                        </h3>
                        <div className="list__arr"> <img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">
                            <div className="list__img">
                                <img src="img/example/1.jpg" alt="img1-$"/>
                                <img src="img/example/1.jpg" alt="img1-$"/>
                                <img src="img/example/1.jpg" alt="img1-$"/>
                                <img src="img/example/1.jpg" alt="img1-$"/>
                            </div>
                            <div className="list__text">
                                Стекло - бронза 8мм (AGC, евро) с закалкой;      <br/>Ручка - скоба;   <br/>Полосы выполнены путем пескоструйной обработки (матирования) с нанесением лака в 6 слоев с сушкой; <br/>Верхняя компенсирующая штанга 30х10 прямоугольная. Вся фурнитура - хромированная.
                            </div>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__header">
                        <h3 className="list__title">
                            2. Душевая - трапеция со стеклом Графит
                        </h3>
                        <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">
                            <div className="list__img">
                                <img src="img/example/2.jpg" alt="img1-$"/>
                                <img src="img/example/2.jpg" alt="img1-$"/>
                                <img src="img/example/2.jpg" alt="img1-$"/>
                                <img src="img/example/2.jpg" alt="img1-$"/>
                            </div>
                            <div className="list__text">
                                Стекло - серое 8мм (AGC, евро) с закалкой; <br/>Ручка - кноб; <br/>На данной душевой предусмотрена система с штангой-петлей, без дополнительных упоров в стену. Так получается сделать редко, поскольку конструкции поддонов не всегда это позволяют. Монтаж к стенам и к бортику выполнен с помощью П-образного профиля.
                            </div>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__header">
                        <h3 className="list__title">
                            3. Прямая душевая со стеклом OptiWhite (прозрачное, осветленное)
                        </h3>
                        <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">
                            <div className="list__img">
                                <img src="img/example/3.jpg" alt="img1-$"/>
                                <img src="img/example/3.jpg" alt="img1-$"/>
                                <img src="img/example/3.jpg" alt="img1-$"/>
                                <img src="img/example/3.jpg" alt="img1-$"/>
                            </div>
                            <div className="list__text">
                                На фото прямая душевая из осветленного, закаленного стекла 10мм; <br/>Ручка - кноб; <br/>Тип крепления - коннектора. Петли с доводкой и регулировкой 0 - положения. Бренд комплектующих - Bohle. Отделка фурнитуры - хроом. Штанга - параллельная, квадратная.
                            </div>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__header">
                        <h3 className="list__title">
                            4. Трапецевидная душевая из стекла М1 (обычное прозрачное)
                        </h3>
                        <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">
                            <div className="list__img">
                                <img src="img/example/4.jpg" alt="img1-$"/>
                                <img src="img/example/4.jpg" alt="img1-$"/>
                                <img src="img/example/4.jpg" alt="img1-$"/>
                                <img src="img/example/4.jpg" alt="img1-$"/>
                            </div>
                            <div className="list__text">
                                Душевая - трапеция из обычного стекла М1, толщиной 8мм. <br/>На данном объекте не особо видна зеленца, но при белых стенах будет бросаться в глаза. В то же время, при темных стенах нет смысла переплачивать за “Оптивайт” (осветленное) 
                            </div>
                        </div>
                    </div>

                    <div className="list__item">
                        <div className="list__header">
                        <h3 className="list__title">
                            5. Угловая душевая и ограждение в сауну из матового стекла
                        </h3>
                        <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">
                            <div className="list__img">
                                <img src="img/example/5.jpg" alt="img1-$"/>
                                <img src="img/example/5.jpg" alt="img1-$"/>
                                <img src="img/example/5.jpg" alt="img1-$"/>
                            </div>
                            <div className="list__text">
                                На этом объекте были застеклены душевая и сауна. Стекло - 10мм матовое; Хромированная фурнитура ТИТАН (Россия). При выборе матового стекла, всегда нужно учитывать что мы делаем его на основе либо осветленного стекла, либо обычного М1. От этого сильно зависит стоимость и внешний вид изделия. На фото - осветленное, матовое.
                            </div>
                        </div>
                    </div>
                </div>




                <div className="example__text">
                    Спасибо за внимание! Это всего несколько из тысяч наших работ. Надеемся, что Ваши идеи так же появятся тут, уже в следующем году!
                </div>

                <button className="example__button">
                   <a href="#calc"><img src="img/example/arr.png" alt=""/>
                    Заказать душевую
                    </a>

                </button>
            </div>
        </section>
        <section className="theses">
            <h2 className="title theses__title title--white">
            Перфекционизм и внимание к деталям
            </h2>

            <div className="theses__content">
                <div className="theses__inner">
                    <img className="theses__img" src="img/theses/1.jpg" alt=""/>
                    <p className="theses__text ">
                        Мы всегда стараемся сделать идельный стык. <br/>Эстетика, гидроизоляция, без уплотнителей.
                    </p>
                    <div className="theses__center-line"></div>
                </div>
                <div className="theses__inner">
                    <img className="theses__img" src="img/theses/2.jpg" alt=""/>
                    <p className="theses__text ">
                        Красим фурнитуру в любой цвет по Вашему вкусу. <br/>На фото пример с черной матовой окраской.
                    </p>
                    <div className="theses__center-line"></div>
                </div>
                <div className="theses__inner">
                    <img className="theses__img" src="img/theses/3.jpg" alt=""/>
                    <p className="theses__text ">
                        Премиальный вариант - вся фурнитура Bohle Premium, а стекло заподлицо со стеной. <br/>А главное - минимум металла.
                    </p>
                    <div className="theses__center-line"></div>
                </div>
            </div>    


        </section>
        <section className="questions">
            <div className="questions__container">
                <h2 className="title">
                    Часто задаваемые вопросы
                </h2>

                <div className="example__list list">
                    <div className="list__item">
                        <div className="list__header">
                            <h3 className="list__title">
                                1. Насколько стекло прочное?
                            </h3>
                            <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">  
                            <div className="list__text">
                                - После закалки стекло становится гибким, сломать его можно сильным ударом в торец, и только подобрав правильный угол. С лицевой стороны, стекло очень трудно разбить. Даже в случае удара, оно просто немного согнется, после чего вернется в исходное положение. В душевых мы используем толстые, каленые стекла, разбить такое стекло случайно - очень сложная задача. Для голого человека в душе практически нереальная.
                            </div>
                        </div>
                    </div>

                    <div className="list__item">
                        <div className="list__header">
                            <h3 className="list__title">
                                2. Если получилось разбить стекло, что будет?
                            </h3>
                            <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">  
                            <div className="list__text">
                                - Разбив каленое стекло, максимум что Вас ждет - Вы поцарапаетесь и испугаетесь. Каленое стекло называют травмобезопасным не просто так. При разбитии, оно раскалывается в мелкую крошку (как боковое стекло в автомобиле). В отличии от сырого стекла, эта крошка не обладает настолько острым режущим краем, поскольку это другой тип трещины. В готовых кабинках с тонкими стеклами, никто не гарантирует закалку, пишут просто "Стекло". Разбив СЫРОЕ (не каленое) стекло из такой кабинки - можно получить серьезные повреждения и глубокие раны, более опасные, чем ножевые.
                            </div>
                        </div>
                    </div>

                    <div className="list__item">
                        <div className="list__header">
                            <h3 className="list__title">
                                3. Может ли стекло разбиться само по себе?
                            </h3>
                            <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">  
                            <div className="list__text">
                                - Нет. Это абсолютный бред от незнающих людей. Единственный возможный случай разбития с отсрочкой, - это когда стекло, после закалки обработали, соответственно, оставив очень маленький внешний слой, окружающий ядро с напряжением (практически, оголив ядро). Тогда при малейшем изгибе, структура может быть нарушена в области съема, что приведет к полному разбитию закаленного стекла. Как правило, такие стекла “живут” не больше нескольких минут после обработки. Во всех иных случаях, "оно само разбилось" - это лишь оправдания людей, которые случайно ударили изделие, или поставили его на камень.
                            </div>
                        </div>
                    </div>

                    <div className="list__item">
                        <div className="list__header">
                            <h3 className="list__title">
                               4. Насколько хорошо перегородка держит воду?
                            </h3>
                            <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">  
                            <div className="list__text">
                                - Гидроизоляция - весьма сравнительная характеристика. Очень зависит от типа фурнитуры, способа монтажа и вида ремонта. Чем дешевле фурнитура - тем больше зазоры и менее продуманы водоотводы. Но даже при очень хорошей фурнитуре, если Вы направите поток воды прямо на уплотнитель, то он просто может немного прогнутся и пропустить капли. При нормальной эксплуатации, это вообще не имеет значения. В отдельных случаях можно поставить профиль, который на 100% сдерживает даже очень большой поток воды. Тем не менее, стоит понимать, что душевая - это не аквариум.
                            </div>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__header">
                            <h3 className="list__title">
                                5. Отличаются ли основные технические характеристики от вида стекла?
                            </h3>
                            <div className="list__arr"><img src="img/accardion.png" alt=""/></div>
                        </div>
                        <div className="list__content">  
                            <div className="list__text">
                                - Нет, не отличаются. Показатели прочности, степени закалки и характеристик по резке одинаковые для обычных листовых стекол.
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__inner">
                    <div className="footer__contact">
                        <ul>
                            <li>Москва</li>
                            <li>
                                <a href="tel:+74990000000 ">Телефон +7(499)000-00-00 </a><br/>
                                <a href="mailto:хххх@xxx.ru">E-mail хххх@xxx.ru</a>
                            </li>
                            <li>
                                Сборочный цех / производство простых изделий - г. Москва, проезд ********* д.?А. Метро - ?????***%$#
                            </li>
                            <li>
                                Склад, сложное производство - МО, <br/>г. !@#$%^&. ул. )(*&&^%$#, ПК “*#&#^%#”.
                            </li>
                        </ul>
                    </div>
                    <div className="footer__link">
                        <ul>
                            <li><a href="/">Отзывы</a></li>
                            <li><a href="/">Доставка</a></li>
                            <li><a href="/">Вакансии</a></li>
                            <li><a href="/">Установка</a></li>
                        </ul>
                        <ul>
                            <li><a href="/">Политика cookie</a></li>
                            <li><a href="/">Договор оферты</a></li>
                            <li><a href="/">Технические условия</a></li>
                            <li><a href="/">Политика конфеденциальности</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="popap popap-1 mfp-hide" id="popup-call-1">
            <form className="form">
                <p className="form__title">
                    Заполните форму для связи
                </p>
                <div className="form__after form__phone-after">
                  <input className="form__phone form-before" type="tel" placeholder="+7(___)___-__-__ :" name="phone"/>
                </div>
                <div className="form__after form__name-after">
                    <input className="form__name form-before" type="text" placeholder="Иван" name="name"/>
                </div>
                <div className="form__time ">
                    <div className="form__time-title">
                        <p className="form__time-title-text">
                            Выберите удобное <br/>время для звонка
                        </p>
                        <img src="img/accardion.png" alt=""/>
                    </div>
                    <div className="form__time-hidden ">
                       <div className="form__after form__comment-after">
                            <textarea className="form__time-comment form-before" name="comment" id="" placeholder="Текст"></textarea>
                        </div>
                        <p className="form__time-text">
                            Выберите время и дату для звонка
                        </p>
                        <div className="form__time-date">
                            <input className="form__time-hour" type="number" min="0" max="24" placeholder="00"/> : 
                            <input className="form__time-minute" type="number" min="0" max="60" placeholder="00"/>
                            <div className="calendar">
                            <input className='datepicker-here form__time-calendar' type='text'  placeholder="Выберете дату"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="form__submit" type="submit">
                     Оформить звонок
                </button>
                <p className="form__text">
                    Нажимаю на кнопку, Вы даете согласие с Политикой конфиденциальности и cookies
                </p>
            </form>
        </div>
        <div className="popap popap-2 mfp-hide" id="popup-call-2">
        <form className="form">
            <p className="form__title">
                Куда отправить расчёт?
            </p>
            
            <div className="form__after form__mail-after">
              <input className="form__mail " type="email" placeholder="@mail.ru" name="email"/>
            </div>
            <div className="form__after form__phone-after">
              <input className="form__phone " type="tel" placeholder="+7(___)___-__-__ :" name="phone"/>
            </div>
            <div className="form__after form__name-after">
                <input className="form__name form-before" type="text" placeholder="Иван" name="name"/>
            </div>
            <button className="form__submit" type="submit">
                 Оформить звонок
            </button>
            <p className="form__text">
                Нажимаю на кнопку, Вы даете согласие с Политикой конфиденциальности и cookies
            </p>
        </form>
    </div>
           
    </div>
  );
}

export default App;
