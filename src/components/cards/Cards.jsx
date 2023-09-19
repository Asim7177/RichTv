import React from 'react';
import { CardContent as CardData } from './Cards_data';
import Card from './card';


const Cards = () => {

    return (
        <>
            <div className='container my-5'>
                <div className='cards row gy-5'>
                    {CardData.map(card => (
                        <Card  
                        card_img={card.imageSrc}
                        card_title={card.title}
                        card_description={card.description}
                        card_link={card.link}
                        />
                    ))};
                </div>
            </div>
        </>
    )
}

export default Cards
