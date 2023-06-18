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
