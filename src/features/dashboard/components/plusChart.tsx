import { FC } from 'react';
import Lottie from 'react-lottie';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
} from 'chart.js';
import Spinner from 'shared/components/spinner/spinner';
import heartbeat from 'assets/lotties/heartbeat.json';
import { LINE_OPTIONS } from '../constants/dashboard.constants';
import { IActivityData, ILineChartData } from '../interface/dashboard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface IPlusChartData {
	activityData: IActivityData[];
}
const PlusChart: FC<IPlusChartData> = ({ activityData }) => {
	const heartData = () => {
		if (!activityData) {
			return null;
		}
		const chartData: ILineChartData | any = {
			labels: [] as string[],
			datasets: [
				{
					label: 'Average Pluse',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: 'rgba(255, 213, 128,0.1)',
					borderColor: '#ed6a29', // Border color of the line,
					borderWidth: 4,
					borderDash: [],
					borderDashOffset: 0.0
				}
			]
		};

		activityData.forEach((item: any) => {
			chartData.labels.push(item.name);
			chartData.datasets[0].data.push(Math.trunc(item.heartbeat.average));
		});

		return chartData;
	};
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: heartbeat
	};

	const chartData = heartData();
	return (
		<div className='line-chart-wrapper'>
			<Lottie options={defaultOptions} height={50} width={50} />
			{chartData ? (
				<Line
					style={{ width: '100%', height: '280px' }}
					data={chartData}
					options={LINE_OPTIONS}
					className='m--30'
				/>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default PlusChart;
