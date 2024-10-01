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
	return (
		<div className='App'>
			<HeaderStatus />
			<PizzaList />
		</div>
	);
}

const PizzaList = () => {
	return (
		<div className='pizza-list'>
			{pizzaData.map((pizza) => {
				console.log(pizza);
				return <PizzaCard pizzaInfo={pizza} />;
			})}
		</div>
	);
};

function HeaderStatus() {
	const hour = new Date().getHours();
	const openHour = 7;
	const closeHour = 22;
	const isOpen =
		hour >= openHour && hour <= closeHour;

	return (
		<div className='header-container'>
			<h1 class='company_name'>Prime Pizza.</h1>
			<p>
				We are currently{' '}
				{isOpen
					? `Open until ${closeHour}:00. and we woulld very much like you to drop by`
					: 'closed'}
			</p>
		</div>
	);
}

export default App;
