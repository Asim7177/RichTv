import React from 'react';
import Btn from '../btn/Btn';
const Card = (props) => {
    return (
        <>
                <div className='col-sm-6 col-lg-4'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src={props.card_img} alt="card-img" className='img-fluid rounded-2' />
                        </div>
                        <div className='card-body'>
                            <h3>{props.card_title}</h3>
                            <p>{props.card_description}</p>
                            <div className='mt-4'>
                                <Btn link={props.card_link} />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card;