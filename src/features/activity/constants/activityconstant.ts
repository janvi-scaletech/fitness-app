export const BAR_OPTIONS = {
	responsive: true,
	scales: {
		x: {
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
			text: 'Calories Data'
		},
		tooltip: {
			displayColors: false
		}
	}
};
