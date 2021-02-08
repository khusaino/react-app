function Header(props){
	return(
	<header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__logo">
                            <img src="img/header/logo.png" alt="" className="heder__logo-img"/>
                        </div>
                        <div className="header__menu">
                           <div className="header__menu-block">
                                <div className="header__contact">
                                    <a className="header__contact-tel header__contact-link" href="tel:+74990000000" >
                                        +7 (499) 000 00 00
                                    </a>
                                   <a className="header__contact-more header__contact-link" href="#footer">
                                        Все контакты
                                   </a>

                                </div>
                                <div className="header__burger"></div>
                            </div>
                            <div className="header__menu-item ">
                                   <ul className="header__menu-page">
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Резка и обработка стекла
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Многослойное стекло
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Душевые ограждения
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Перегородки и двери
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Зеркала на заказ
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Кухонные фартуки
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Гнутое стекло
                                       </a></li>
                                       <li className="header__menu-list"><a href="/" className="header__menu-link">
                                           Расчет стоимости
                                       </a></li>
                                   </ul>
                               </div>

                        </div>
                    </div>
                    <h1 className="header__title">
                        Душевые ограждения <br/>и двери на заказ
                    </h1>
                     <img className="header__img" src="img/header/Group.png" alt="icon"/>
                    <img src="img/header/mobile.png" alt="" className="header__img-mobile"/>
                </div>
            </header>
	)
}

export default Header