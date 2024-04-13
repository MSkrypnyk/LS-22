
import { Link } from 'react-router-dom';
import './Coffe.scss';
import { useState } from 'react';

export const Coffee = () => {
  const [price] = useState(4.2); // Ціна кави

  const coffeeData = [
    {
      image: '/src/assets/img/home/cappuccino1.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 1,
    },
    {
      image: '/src/assets/img/home/cappuccino2.png',
      title: 'Cappuccino',
      desc: 'With Foam',
      id: 2,
    },
    {
      image: '/src/assets/img/home/cappuccino3.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 3,
    },
  ];

  return (
    <div>
      <div className="list">
        {coffeeData.map((item) => (
          <Link to={`/product/${item.id}`} className="item" key={item.id}>
            <img src={item.image} className="item__img" alt="Coffee" />
            <h3 className="item__title">{item.title}</h3>
            <p className="item__desc">{item.desc}</p>
            <div className="item__id">{item.id}</div>
            <div className="price-group">
              <p className="price">
                <span>$</span> {price.toFixed(2)}
              </p>
              <span className="icon-plus"></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


