import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';
import { IUserActivity } from '../interface/dashboard';
import '../styles/dashboard.scss';
import WeeklyActivity from './weeklyAcitivity';
import UserProfile from './userProfile';
import TodayActivity from './todayActivity';

interface IFitnessActivity {
	userFitnessActivity: IUserActivity[];
}
const Dashboard: FC<IFitnessActivity> = ({ userFitnessActivity }) => {
	console.log(userFitnessActivity, 'userFitnessActivity');
	const userData = useSelector((state: IState) => state.auth.userData);
	console.log('userData', userData);
	const [greeting, setGreeting] = useState('');

	const ActivityData = userFitnessActivity.map((activity: any) => {
		return {
			name: activity.name,
			duration: activity.duration,
			calories_burned: activity.calories_burned
		};
	});

	console.log('ActivityData', ActivityData);

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

	return (
		<div className='dashboard-container flex'>
			<div className='dashboard-wrapper'>
				<p className='font-size--24 ml--20'>Dashboard</p>
				<div className='user-title-wrapper mb--30 mt--30 mr--20 ml--20'>
					<p>{greeting}</p>
					<h3 className='font-size--lg'>Welcome {userData.name}</h3>
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
