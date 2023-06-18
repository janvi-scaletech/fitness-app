import React, { useState } from 'react';

import fitnessData from 'assets/JSON/fitness.json';
import '../styles/activity.scss';
import Activity from '../componets/activity';
import { useNavigate } from 'react-router-dom';

const ActivityContainer = () => {
	const userActivityData = fitnessData.activities;
	console.log('userActivityData', userActivityData);
	const navigate = useNavigate();
	const handleOnClick = (activityId: string) => {
		console.log('activityId', activityId);
		navigate(`/activity/${activityId}`);
	};

	return (
		<div className='user-activity-container'>
			<p className='font-size--24 ml--20 mt--20'>Activity List</p>
			<div className='flex flex--wrap '>
				{userActivityData.map((activityList) => {
					console.log('activityList', activityList);
					return (
						<div
							className='activity-list-wrapper flex justify-content--between cursor--pointer'
							onClick={() => {
								handleOnClick(activityList.id);
							}}
						>
							<p className='font-size--22 font--semi-bold'>{activityList.name}</p>
							<img src={activityList.img} className='img' />
						</div>
					);
				})}
			</div>

			<Activity />
		</div>
	);
};

export default ActivityContainer;
