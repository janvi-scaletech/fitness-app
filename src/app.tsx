import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from 'features/auth/container/login';
import ForgotPassword from 'features/auth/component/forgotPassword';
import ResetPassword from 'features/auth/component/resetPassword';

import { IState } from 'shared/interface/state';
import Layout from 'hoc/layout/layout';
import DashboardContainer from 'features/dashboard/container/dashboardContainer';
import ActivityContainer from 'features/activity/container/activityContainer';
import Activity from 'features/activity/componets/activity';
import UserProfile from 'features/dashboard/components/userProfile';
import MyProfile from 'features/dashboard/components/myProfile';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<DashboardContainer />} />
				<Route path='/activity' element={<ActivityContainer />} />
				<Route path='/activity/:activityId' element={<Activity />} />
				<Route path='/profile' element={<MyProfile />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</Layout>
	);
};

export default App;
