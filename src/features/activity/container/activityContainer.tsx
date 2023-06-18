import React, { useState } from 'react';

import fitnessData from 'assets/JSON/fitness.json';
import '../styles/activity.scss';

const ActivityContainer = () => {
	const userActivityData = fitnessData.activities;
	console.log('userActivityData', userActivityData);

	return (
		<div className='user-activity-container'>
			<p className='font-size--24 ml--20 mt--20'>Activity List</p>
			<div className='flex flex--wrap '>
				{userActivityData.map((activityList) => {
					console.log('activityList', activityList);
					return (
						<div className='activity-list-wrapper flex justify-content--between cursor--pointer'>
							<p className='font-size--22 font--semi-bold'>{activityList.name}</p>
							<img src={activityList.img} className='img' />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ActivityContainer;
