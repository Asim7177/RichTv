import React from 'react';
import cardImage from './img/card-img.jpg';
import './style.css';

const index = () => {
  let  card_data = [
        {
            img: cardImage,
            title : 'Title card 1',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quam reprehenderit quod expedita dolor ratione error reiciendis voluptas cumque iste aspernatur accusantium temporibus quis, maxime dicta nemo recusandae nam veniam.'
        },
        {
            img: cardImage,
            title : 'Title card 2',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quam reprehenderit quod expedita dolor ratione error reiciendis voluptas cumque iste aspernatur accusantium temporibus quis, maxime dicta nemo recusandae nam veniam.'
        },
        {
            img: cardImage,
            title : 'Title card 3',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quam reprehenderit quod expedita dolor ratione error reiciendis voluptas cumque iste aspernatur accusantium temporibus quis, maxime dicta nemo recusandae nam veniam.'
        },
    ]
    return (
        <>
            <div className='cards'>
            {
                card_data.map(card => {
                  return(
                    <div className='card'>
                        <img src={card.img} alt="card" className='card-img' />
                        <h1>{card.title}</h1>
                        <p>{card.desc}</p>
                    </div>
                  );
                })
            }
            </div>
        </>
    )
}

export default index;
