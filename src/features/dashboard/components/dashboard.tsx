import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';
import { IUserActivity } from '../interface/dashboard';

interface IFitnessActivity {
	userFitnessActivity: IUserActivity[];
}
const Dashboard: FC<IFitnessActivity> = ({ userFitnessActivity }) => {
	console.log('userFitnessActivity', userFitnessActivity);
	const userData = useSelector((state: IState) => state.auth.userData);
	const [userDetails, setUserDetails] = useState(userData);
	return (
		<div className='dashboard-container'>
			<div className='dashboard-wrapper' />
			<p>Good morning</p>
			<h3>Welcome {userDetails.name}</h3>
		</div>
	);
};

export default Dashboard;
