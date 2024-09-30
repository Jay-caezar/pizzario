/** @format */

import './App.css';
import PizzaCard from './pizza-card/pizza-card';

export const pizzaData = [
	{
		name: 'Focaccia',
		ingredients:
			'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients:
			'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients:
			'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients:
			'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients:
			'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	// const {
	// 	name,
	// 	ingredients,
	// 	price,
	// 	soldOut,
	// 	photoName,
	// } = pizzaData;
	return (
		<div className='App'>
			<div className='header-container'>
				<h1 class='company_name'>Prime Pizza.</h1>
			</div>
			<div className='pizza-list'>
				{pizzaData.map(
					({
						name,
						ingredients,
						price,
						soldOut,
						photoName,
					} = pizzaData) => {
						return (
							<PizzaCard
								pizzaName={name}
								pizzaIngredients={ingredients}
								pizzaPrice={price}
								pizzaSoldOut={soldOut}
								pizzaPhoto={photoName}
								key={name}
							/>
						);
					}
				)}
			</div>
		</div>
	);
}

// {name, ingredient, price, soldOut, photoName}=pizzaData
export default App;
