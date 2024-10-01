/** @format */
import React from 'react';
import './pizza-card.scss';

const PizzaCard = ({ pizzaInfo }) => {
	const { name, ingredients, price, soldOut, photoName } = pizzaInfo;
	return (
		<div
			className={`pizza-container ${soldOut ? 'sold_out' : ''}`}
			style={{
				backgroundImage: `url(${photoName})`,
			}}>
			<div className='details'>
				<h2 className='pizza-name'>{name}</h2>
				<p className='pizza-description'>{ingredients}</p>
				<p className='pizza-price'>
					$ {price}
					<span className={`sold-out ${soldOut ? 'active' : ''}`}>{soldOut ? 'Out of stock' : ''}</span>
				</p>
			</div>
		</div>
	);
};

export default PizzaCard;
