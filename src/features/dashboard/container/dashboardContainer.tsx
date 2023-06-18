import { useDispatch } from 'react-redux';
import fitnessData from 'assets/JSON/fitness.json';
import * as actionTypes from 'store/actionTypes';
import { createAction } from 'shared/util/utility';
import Dashboard from '../components/dashboard';

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
