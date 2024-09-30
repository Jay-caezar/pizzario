/** @format */
import React from 'react';
import './pizza-card.scss';

const PizzaCard = ({
	pizzaName,
	pizzaIngredients,
	pizzaPrice,
	soldOut,
	pizzaPhoto,
}) => {
	console.log(pizzaPhoto);
	return (
		<div
			className='pizza-container'
			style={{
				backgroundImage: `url(${pizzaPhoto})`,
			}}>
			{/* <img
				src={pizzaPhoto}
				alt=''
			/> */}
			<div className='details'>
				<h2 className='pizza-name'>
					{pizzaName}
				</h2>
				<p className='pizza-description'>
					{pizzaIngredients}
				</p>
				<p className='pizza-price'>
					$ {pizzaPrice}
					<span
						className={`sold-out ${
							soldOut ? 'active' : ''
						}`}>
						{soldOut ? 'Sold Out' : 'Available'}
					</span>
				</p>
			</div>
		</div>
	);
};

export default PizzaCard;
