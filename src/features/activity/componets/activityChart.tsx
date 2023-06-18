import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { IChartData } from 'features/dashboard/interface/dashboard';
import { BAR_OPTIONS } from '../constants/activityconstant';

interface IActivityChart {
	activityData: Record<string, any>;
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);
const ActivityChart: FC<IActivityChart> = ({ activityData }) => {
	const transformData = () => {
		if (!activityData) {
			return null;
		}
		const chartData: IChartData = {
			labels: [],
			datasets: [
				{
					label: 'Calories',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: '#ed6a29',
					borderColor: '#ed6a29',
					borderWidth: 0.5,
					barThickness: 15,
					borderRadius: 25
				}
			]
		};

		activityData.forEach((item: Record<string, any>) => {
			chartData.labels.push(item.date);
			chartData.datasets[0].data.push(Math.trunc(item.calories_burned));
		});

		return chartData;
	};

	const chartData = transformData();

	return (
		<div className='line-chart-wrapper'>
			<Bar
				style={{ width: '100%', height: '280px' }}
				options={BAR_OPTIONS}
				data={chartData as IChartData}
				className='bar-chart--container m--30'
			/>
		</div>
	);
};

export default ActivityChart;
