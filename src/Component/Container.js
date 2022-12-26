import React from 'react'
import '../CSS/Container.css';

import sliderPic1 from '../image/slider-img1.webp';
import sliderPic2 from '../image/slider-img2.webp';
import sliderPic3 from '../image/slider-img3.webp';
import sliderPic4 from '../image/slider-img4.webp';


import Card from './Card';

const Container = () => {



    // let img = ["../image/slider-img1.webp", "../image/slider-img2.webp", "../image/slider-img3.webp", "../image/slider-img4.webp"]

    let img2 = [sliderPic1, sliderPic2, sliderPic3];

    let image = document.getElementById('img');
    let start = 1;


    // function starts() {

    //     if (start < img2.length) {
    //         start = start + 1;

    //     } else {
    //         start = 1;
    //     }

    //     // image.innerHTML = "<img src=" + img2[start - 1] + ">"
    // }
    // setInterval(starts, 5000);






    return (
        <div>
            <div className='Slider' id='img'>
                <img src={sliderPic4} alt="" />
            </div>


            <div className="New-arrival-main">
                <div className="arrival">
                    <Card />
                </div>
            </div>






        </div>
    )
}

export default Container
