import React from 'react'
import '../../Style/cupoon.css';
import p1 from '../../assets/img/lts.svg'
import p2 from '../../assets/img/pnr.svg'
import p3 from '../../assets/img/food.svg'
import p4 from '../../assets/img/madad.svg'
import p5 from '../../assets/img/Aadhaar.svg'

const Cupon = () => {
    const data = [
        {
            img: p1,
            name: "Check PNR status"
        },
        {
            img: p2,
            name: "Live train status"
        },
        {
            img: p3,
            name: "Order Food"
        },
        {
            img: p4,
            name: "Rail Madad"
        },
        {
            img: p5,
            name: "Link Aadhaar"
        }
    ]
    return (
        <div className="coupon-container">
            {data.map((item, index) => (
                <div className="coupon-card" key={index}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Cupon
