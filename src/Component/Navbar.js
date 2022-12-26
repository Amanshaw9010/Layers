import React from 'react'
import logo from '../image/logo.webp';
import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <div>

            <div className="text-move">
                <marquee direction="left" ><p> Layers Christmas Sale! Buy 2 mobile skins @ ₹699/- and Buy 2 Laptop Skins @ ₹1499/- No coupon code required.</p> </marquee>
            </div>

            <div className='Container'>
                <div className="mainNav">
                    <div className="first-box">
                        <img src={logo} alt="" />

                    </div>
                    <div className='second-box'>
                        <ul>
                            <a href=""><li className='Sub-menu'>
                                <button className='dropBtn'>Select Device&nbsp;
                                    <i class="fa-solid fa-angle-down"></i></button>
                                <div className='dropdown-menu  Manage-style'>
                                    <div>
                                        <li>IPhone Skins&nbsp;&#10095;
                                            <div className='part2 underLine position1'>
                                                <div>
                                                    <li>IPhone 14 Plus</li>
                                                    <li>IPhone 14</li>
                                                    <li>IPhone 13 Pro Max</li>
                                                    <li>IPhone 13 Pro</li>
                                                    <li>IPhone 13</li>
                                                    <li>IPhone 13 Mini</li>
                                                    <li>IPhone SE 2022</li>
                                                    <li>IPhone 12 Pro Max</li>
                                                    <li>IPhone 12 Pro</li>
                                                    <li>IPhone 12</li>
                                                    <li>IPhone 12 Mini</li>
                                                    <li>See More...</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Nothing Skins&nbsp;&#10095;
                                            <div className='part2 underLine position2'>
                                                <div>
                                                    <li>Phone-1</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Samsung Skins&nbsp;&#10095;
                                            <div className='part2 underLine position3'>
                                                <div>
                                                    <li>Samsung Galaxy S22 Ultra</li>
                                                    <li>Samsung Galaxy Note 20 Ultra</li>
                                                    <li>Samsung Galaxy Z Fold 3</li>
                                                    <li>Samsung Galaxy Z Fold 2</li>
                                                    <li>Samsung Galaxy S21 FE</li>
                                                    <li>Samsung S20 Ultra</li>
                                                    <li>Samsung Galaxy M31s</li>
                                                    <li>Samsung Galaxy S22 Plus</li>
                                                    <li>See More...</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Oneplus Skins&nbsp;&#10095;
                                            <div className='part2 underLine position4'>
                                                <div>
                                                    <li>OnePlus Nord CE 2 Lite</li>
                                                    <li>OnePlus Nord CE 2</li>
                                                    <li>OnePlus 10 Pro 5G</li>
                                                    <li>OnePlus 9 Pro</li>
                                                    <li>OnePlus 9RT</li>
                                                    <li>OnePlus 9</li>
                                                    <li>OnePlus 10R</li>
                                                    <li> OnePlus Nord 2</li>
                                                    <li>See More...</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Realme Skins&nbsp;&#10095;
                                            <div className="part2 underLine position5">
                                                <div>
                                                    <li>Realme GT Master Edition</li>
                                                    <li>Realme GT Neo 3</li>
                                                    <li>Realme GT Neo 2</li>
                                                    <li>Realme GT 5G</li>
                                                    <li>Realme Narzo 50A Prime</li>
                                                    <li>Realme 9 Pro</li>
                                                    <li>See More...</li>
                                                </div>
                                            </div>
                                        </li>
                                    </div><hr />


                                    <div>
                                        <li>Apple Laptop&nbsp;&#10095;
                                            <div className="  part2 underLine">
                                                <div>
                                                    <li>Macbook Pro 13" M2 2022</li>
                                                    <li>Macbook Air 13" M1 2020</li>
                                                    <li>Macbook Air 13" M2 2022</li>
                                                    <li>Macbook Pro 16 2021</li>
                                                    <li>Macbook Pro 14 2021</li>
                                                </div>
                                            </div>

                                        </li>
                                        <li>Asus Laptop&nbsp;&#10095;
                                            <div className="  part2 underLine position6">
                                                <div>
                                                    <li>ASUS GAMING G73J</li>
                                                    <li>ASUS ROG STRIX G531GT</li>
                                                    <li>ASUS ROG ZEPHYRUS G14 GA401</li>
                                                    <li>ASUS TUF GAMING A15 FA506II</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>MSI Laptop&nbsp;&#10095;
                                            <div className="  part2 underLine position7">
                                                <div>
                                                    <li>Msi Bravo 15</li>
                                                    <li>MSI GL75 LEOPARD 10SDR</li>
                                                    <li>MSI MODERM 14 MS-14B1</li>
                                                    <li>MSI ALPHA (MS-16U6)</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>RAZER&nbsp;&#10095;
                                            <div className="part2 underLine position8">
                                                <div>
                                                    <li>RAZER BLADE 15 RZ09-0270</li>
                                                    <li>RAZER RZ09-03100EM1</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Dell Laptop&nbsp;&#10095;
                                            <div className="part2 underLine position9">
                                                <div>
                                                    <li>DELL G7 7577</li>
                                                    <li>DELL INSPIRON 15 7566</li>
                                                    <li>DELL XPS 15 9570</li>
                                                    <li>DELL INSPIRON 7347</li>
                                                </div>
                                            </div>
                                        </li>
                                    </div><hr />


                                    <div>
                                        <li>ROG Phone&nbsp;&#10095;
                                            <div className="part2 underLine position10">
                                                <div>
                                                    <li>Rog Phone 5</li>
                                                    <li>Rog Phone 3</li>
                                                    <li>Rog Phone 2</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Pixel&nbsp;&#10095;
                                            <div className="part2 underLine position11">
                                                <div>
                                                    <li>Google Pixel 6 Pro</li>
                                                    <li>Google Pixel 6</li>
                                                    <li>Google Pixel 5</li>
                                                    <li>Pixel 4A</li>
                                                    <li>Pixel 3A</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Xiaomi&nbsp;&#10095;
                                            <div className="part2 underLine position12">
                                                <div>
                                                    <li>Mi 11 Lite Ne</li>
                                                    <li> Mi 11X</li>
                                                    <li>Mi 10i</li>
                                                    <li>Redmi Note 11 Pro</li>
                                                    <li>Redmi Note 11T</li>
                                                    <li>Redmi Note 10 Pro Max</li>
                                                    <li>Redmi K30</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Oppo&nbsp;&#10095;
                                            <div className="part2 underLine position13">
                                                <div>
                                                    <li>Oppo Reno 7</li>
                                                    <li>Oppo Reno 6 Pro</li>
                                                    <li>Oppo Reno 6</li>
                                                    <li>Oppo F19 Pro</li>
                                                    <li>Oppo F11 Pro</li>
                                                    <li>Oppo Reno 2F</li>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Vivo&nbsp;&#10095;
                                            <div className="part2 underLine position14">
                                                <div>
                                                    <li>Vivo X70 Pro Plus</li>
                                                    <li>Vivo X60 Pro</li>
                                                    <li>Vivo X60</li>
                                                    <li>Vivo V17 Pro</li>
                                                    <li>Vivo Y75</li>
                                                </div>
                                            </div>
                                        </li>
                                    </div><hr />


                                    <div>
                                        <li>POCO&nbsp;&#10095;
                                            <div className="  part2 underLine position15">
                                                <div>
                                                    <li>POCO F3 GT</li>
                                                    <li>POCO F1</li>
                                                    <li>POCO X3 Pro</li>
                                                    <li>POCO X3</li>
                                                </div>
                                            </div>
                                        </li>

                                        <li>IQOO&nbsp;&#10095;
                                            <div className="  part2 underLine position16">
                                                <div>
                                                    <li>IQOO 9 SE</li>
                                                    <li>IQOO 7</li>
                                                    <li>IQOO Z6 Pro</li>
                                                    <li>IQOO Z6 5G</li>
                                                </div>
                                            </div>
                                        </li>

                                        <li>Huawei&nbsp;&#10095;
                                            <div className="  part2 underLine position17">
                                                <div>
                                                    <li>Huawei Mate 10 Lite</li>
                                                    <li>Huawei Mate 9 Lite</li>
                                                    <li>Nexus 6P</li>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div></li></a>

                            <a href=""><li className='Sub-menu'>
                                <button className='dropBtn'>Skins Collection&nbsp;
                                    <i class="fa-solid fa-angle-down"></i></button>
                                <div className='dropdown-menu Manage-style  Manage-style2'>
                                    <div>
                                        <li>Dark</li>
                                        <li>Cyberforse</li>
                                        <li>Into The woods</li>
                                        <li>Retro Funk</li>
                                        <li>The Ripple</li>
                                    </div><hr />
                                    <div>
                                        <li>Wanderlust</li>
                                        <li>Messed It</li>
                                        <li>Sky Is Not The Limit</li>
                                    </div>

                                </div>
                            </li></a>
                            <a href=""><li>FAQs</li></a>
                            <a href=""><li>Device Not Found?</li></a>
                        </ul>
                    </div>
                    <div className='third-box'>
                        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href=""><span class="material-symbols-outlined">
                            widgets
                        </span></a>
                        <a href=""><i class="fa-regular fa-user"></i></a>
                        <a href=""><span class="material-symbols-outlined">
                            shopping_bag
                        </span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
