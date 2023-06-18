import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import runIcon from 'assets/lotties/fitness.json';
import { IState } from 'shared/interface/state';

import { IActivityData, IIUserActivity, IUserActivity, IWeeklyProps } from '../interface/dashboard';
import WeeklyActivity from './weeklyAcitivity';
import UserProfile from './userProfile';
import TodayActivity from './todayActivity';
import PlusChart from './plusChart';

import CalImg from 'assets/images/flame.png';
import StepImg from 'assets/images/walking.png';
import HeartImg from 'assets/images/heart-attack.png';
import ElevationImg from 'assets/images/fitness.png';
import '../styles/dashboard.scss';
import Spinner from 'shared/components/spinner/spinner';

interface IFitnessActivity {
	userFitnessActivity: IUserActivity[];
}
const Dashboard: FC<IFitnessActivity> = ({ userFitnessActivity }) => {
	const userData = useSelector((state: IState) => state.auth.userData);
	const [greeting, setGreeting] = useState('');

	const activityData: IActivityData[] = userFitnessActivity.map((activity) => {
		return {
			name: activity.name,
			duration: activity.duration,
			calories_burned: activity.calories_burned,
			heartbeat: activity.heart_rate
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

	const weeklyActivity: IWeeklyProps[] = [
		{
			name: userFitnessActivity[1].name,
			duration: userFitnessActivity[1].duration,
			calories: userFitnessActivity[1].calories_burned,
			className: '',
			svgIcon: userFitnessActivity[1].img,
			id: userFitnessActivity[1].id
		},
		{
			name: userFitnessActivity[3].name,
			duration: userFitnessActivity[3].duration,
			calories: userFitnessActivity[3].calories_burned,
			className: '',
			svgIcon: userFitnessActivity[3].img,
			id: userFitnessActivity[3].id
		},
		{
			name: userFitnessActivity[8].name,
			duration: userFitnessActivity[8].duration,
			calories: userFitnessActivity[8].calories_burned,
			className: '',
			svgIcon: userFitnessActivity[8].img,
			id: userFitnessActivity[8].id
		}
	];
	const userActivity: IIUserActivity[] = [
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

	const userDailySteps = [
		{
			values: userFitnessActivity[1].steps,
			text: 'Total Steps',
			image: StepImg
		},
		{
			values: userFitnessActivity[1].calories_burned,
			text: 'Total Calories',
			image: CalImg
		},
		{
			values: userFitnessActivity[1].heart_rate?.average,
			text: 'Heart Rate',
			image: HeartImg
		},
		{
			values: userFitnessActivity[0].elevation_gain,
			text: 'Elevation gain',
			image: ElevationImg
		}
	];

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: runIcon
	};

	return (
		<div className='dashboard-container flex'>
			<div className='dashboard-wrapper'>
				<p className='font-size--24 ml--20 mt--20'>Dashboard</p>

				<div className='user-title-wrapper mb--30 mt--30 mr--20 ml--20 flex align-items--center justify-content--between'>
					<div>
						<p>{greeting}</p>
						<h3 className='font-size--lg'>Welcome {userData.name}</h3>
					</div>
					<div>
						<Lottie options={defaultOptions} height={100} width={100} />
					</div>
				</div>

				<div className='flex'>
					{activityData ? <PlusChart activityData={activityData} /> : <Spinner />}
					<div className='flex flex--column'>
						{userDailySteps &&
							userDailySteps.map(({ values, text, image }, index: number) => {
								return (
									<div className='activity-list-wrapper flex' key={index}>
										<div className='img-wrapper'>
											<img src={image} className='width--full height--full' />
										</div>
										<div className='ml--30'>
											<h3 className='font-size--browser-default font--semi-bold'>{values}</h3>
											<p className='font-size--xxs text--light-grey'>{text}</p>
										</div>
									</div>
								);
							})}
					</div>
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
