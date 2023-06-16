import { useDispatch } from 'react-redux';
import Dashboard from '../components/dashboard';
import fitnessData from 'assets/JSON/fitness.json';
import { createAction } from 'shared/util/utility';
import * as actionTypes from 'store/actionTypes';
import { IUserActivity } from '../interface/dashboard';

const DashboardContainer = () => {
	const dispatch = useDispatch();
	const userData = fitnessData.user;
	const userFitnessActivity = fitnessData.activities;
	dispatch(createAction(actionTypes.UPDATE_USER_DATA, userData));
	return (
		<div>
			<Dashboard userFitnessActivity={userFitnessActivity} />
		</div>
	);
};

export default DashboardContainer;
