import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';
import { IUserActivity } from '../interface/dashboard';
import '../styles/dashboard.scss';
import WeeklyActivity from './weeklyAcitivity';
import UserProfile from './userProfile';
import TodayActivity from './todayActivity';
import Lottie from 'react-lottie';
import heartbeat from 'assets/lotties/heartbeat.json';
import runIcon from 'assets/lotties/run-icon.json';

interface IFitnessActivity {
	userFitnessActivity: IUserActivity[];
}
const Dashboard: FC<IFitnessActivity> = ({ userFitnessActivity }) => {
	console.log(userFitnessActivity, 'userFitnessActivity');
	const userData = useSelector((state: IState) => state.auth.userData);
	const [greeting, setGreeting] = useState('');

	const ActivityData = userFitnessActivity.map((activity: any) => {
		return {
			name: activity.name,
			duration: activity.duration,
			calories_burned: activity.calories_burned
		};
	});

	const greetingMessage = useCallback(() => {
		const currentTime = new Date().getHours();
		if (currentTime >= 0 && currentTime < 12) {
			setGreeting('Good Morning');
		} else if (currentTime >= 12 && currentTime < 18) {
			setGreeting('Good Afternoon');
		} else {
			setGreeting('Good Evening');
		}
	}, []);

	useEffect(() => {
		greetingMessage();
	}, []);

	const weeklyActivity = [
		{
			name: userFitnessActivity[1].name,
			duration: userFitnessActivity[1].duration,
			calories: userFitnessActivity[1].calories_burned,
			className: '',
			svgIcon: ''
		},
		{
			name: userFitnessActivity[3].name,
			duration: userFitnessActivity[3].duration,
			calories: userFitnessActivity[3].calories_burned,
			className: '',
			svgIcon: ''
		},
		{
			name: userFitnessActivity[8].name,
			duration: userFitnessActivity[8].duration,
			calories: userFitnessActivity[8].calories_burned,
			className: '',
			svgIcon: ''
		}
	];
	const userActivity = [
		{
			name: userFitnessActivity[12].name,
			duration: userFitnessActivity[12].duration,
			className: 'blue-color-dot'
		},
		{
			name: userFitnessActivity[2].name,
			duration: userFitnessActivity[2].duration,
			className: 'green-color-dot'
		},
		{
			name: userFitnessActivity[5].name,
			duration: userFitnessActivity[5].duration,
			className: 'orange-color-dot'
		}
	];

	const userDailySteps: any = [
		{
			values: userFitnessActivity[1].steps,
			text: 'Total Steps'
		},
		{
			values: userFitnessActivity[1].calories_burned,
			text: 'Total Calories'
		},
		{
			values: userFitnessActivity[1].heart_rate?.average,
			text: 'Heart Rate'
		}
	];

	// const defaultOptions = {
	// 	loop: true,
	// 	autoplay: true,
	// 	animationData:
	// };

	return (
		<div className='dashboard-container flex'>
			<div className='dashboard-wrapper'>
				<p className='font-size--24 ml--20 mt--20'>Dashboard</p>
				<div className='user-title-wrapper mb--30 mt--30 mr--20 ml--20'>
					<p>{greeting}</p>
					<h3 className='font-size--lg'>Welcome {userData.name}</h3>
				</div>
				<div className='flex'>
					{userDailySteps &&
						userDailySteps.map(({ values, text, animation }: any, index: number) => {
							return (
								<div className='activity-list-wrapper flex' key={index}>
									<div className='img-wrapper'>
										{/* <Lottie options={defaultOptions} height={50} width={50} /> */}
									</div>
									<div className='ml--30'>
										<h3 className='font-size--browser-default font--semi-bold'>{values}</h3>
										<p className='font-size--xxs text--light-grey'>{text}</p>
									</div>
								</div>
							);
						})}
				</div>
				<div className='flex'>
					<TodayActivity userActivity={userActivity} />
					<WeeklyActivity weeklyActivity={weeklyActivity} />
				</div>
			</div>
			<UserProfile userData={userData} />
		</div>
	);
};

export default Dashboard;
