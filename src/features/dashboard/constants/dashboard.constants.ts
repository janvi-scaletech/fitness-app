import Food1Img from 'assets/images/food1.jpg';
import Food2Img from 'assets/images/food4.jpg';
import Food3Img from 'assets/images/food3.jpeg';

export const LINE_OPTIONS = {
	responsive: true,
	scales: {
		x: {
			display: true,
			title: {
				display: true,
				text: 'Heart-beat'
			},
			grid: {
				display: false
			},
			ticks: {
				display: false
			}
		},
		y: {
			ticks: {
				color: 'black',
				font: {
					weight: 'bold',
					size: 15
				}
			},
			grid: {
				display: false
			}
		}
	},
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Average Plus Data'
		},
		tooltip: {
			displayColors: false
		}
	}
};

export const FOOD_DATA = [
	{
		time: 'Breakfast',
		numberOfDay: '12',
		foodTitle: 'Green variety Foods',
		details: 'days only for breakfast',
		img: Food3Img
	},
	{
		time: 'Launch',
		numberOfDay: '14',
		foodTitle: 'A bowl of salad',
		details: 'days only for launch',
		img: Food1Img
	},
	{
		time: 'Dinner',
		numberOfDay: '7',
		foodTitle: 'Veggies and Haummus',
		details: 'days only for dinner',
		img: Food2Img
	}
];
