import React from 'react'

import '../CSS/Card.css';


import product1 from '../image/1st.webp';
import product2 from '../image/2nd.webp';
import product3 from '../image/3rd.webp';
import product4 from '../image/4th.webp';
import product5 from '../image/5th.webp';
import product6 from '../image/6th.webp';
import product7 from '../image/7th.webp';
import product8 from '../image/8th.webp';


const Card = () => {

    let data = [
        {
            pic: product1,
            Name: "CIUDAD",
            price: "999"
        },
        {
            pic: product2,
            Name: "Wolfgang",
            price: "899"
        },
        {
            pic: product3,
            Name: "Golden Swirl",
            price: "799"
        },
        {
            pic: product4,
            Name: "Grafitti",
            price: "699"
        }
    ]

    let data2 = [
        {
            pic: product5,
            Name: "Empowher",
            price: "499"
        },
        {
            pic: product6,
            Name: "Black Smoke",
            price: "499"
        },
        {
            pic: product7,
            Name: "Spaceboy",
            price: "499"
        },
        {
            pic: product8,
            Name: "DJ Panda",
            price: "499"
        }
    ]


    return (
        <div>
            <div className="Card-container">
                <div className="Card-main">
                    <h2>New arrival</h2>
                    <div className="Cards">
                        {data.map((prod) => {
                            return (
                                <div>
                                    <div>
                                        <img src={prod.pic} />
                                    </div>
                                    <div className="product-info">
                                        <h3><span>{prod.Name}</span></h3>

                                        <div className="product-price">
                                            <h4><span>₹{prod.price}</span></h4>&nbsp;
                                            <strike>₹1299</strike>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>

                    <br /><br />

                    <div className="Cards">
                        {data2.map((prod) => {
                            return (
                                <div>
                                    <div>
                                        <img src={prod.pic} />
                                    </div>
                                    <div className="product-info">
                                        <h3><span>{prod.Name}</span></h3>

                                        <div className="product-price">
                                            <h4><span>₹{prod.price}</span></h4>&nbsp;
                                            <strike>₹599</strike>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


               




            </div>
        </div>
    )
}

export default Card
