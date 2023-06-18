import { useParams } from 'react-router-dom';
import fitnessData from 'assets/JSON/fitness.json';
import ActivityChart from './activityChart';

const Activity = () => {
	const activityId = useParams();
	const userActivityDetails = fitnessData.activities.find(
		(activityData) => activityData.id === activityId.activityId
	);

	const activityData = fitnessData.activities.map((activity) => {
		return {
			name: activity.name,
			duration: activity.duration,
			calories_burned: activity.calories_burned,
			heartbeat: activity.heart_rate,
			date: activity.date,
			id: activity.id
		};
	});

	return (
		<div className='activity-data-container'>
			{userActivityDetails?.img && (
				<div className='flex pl--20 mt--30 align-items--center'>
					<h3 className='mr--10'>{userActivityDetails?.name}</h3>
					<img src={userActivityDetails?.img} className='img ' />
				</div>
			)}
			<div className='flex flex--wrap'>
				{userActivityDetails?.calories_burned && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>
							{userActivityDetails?.calories_burned}
						</p>
						<p className='font-size--22 font--semi-bold text--center'>Calories Burned</p>
					</div>
				)}
				{userActivityDetails?.distance && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>{userActivityDetails?.distance}</p>
						<p className='font-size--22 font--semi-bold text--center'>Distance</p>
					</div>
				)}
				{userActivityDetails?.steps && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>{userActivityDetails?.steps}</p>
						<p className='font-size--22 font--semi-bold text--center'>Total Steps</p>
					</div>
				)}

				{userActivityDetails?.heart_rate.average && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>
							{userActivityDetails?.heart_rate.average}
						</p>
						<p className='font-size--22 font--semi-bold text--center'>Duration</p>
					</div>
				)}
				{userActivityDetails?.duration && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>{userActivityDetails?.duration}</p>
						<p className='font-size--22 font--semi-bold text--center'>Heart Rate Avg</p>
					</div>
				)}
				{userActivityDetails?.elevation_gain && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>
							{userActivityDetails?.elevation_gain}
						</p>
						<p className='font-size--22 font--semi-bold text--center'>Elevation Gain</p>
					</div>
				)}
				{userActivityDetails?.speed?.average && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>
							{userActivityDetails?.speed?.average}
						</p>
						<p className='font-size--22 font--semi-bold text--center'>Speed</p>
					</div>
				)}
				{userActivityDetails?.laps && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>{userActivityDetails?.laps}</p>
						<p className='font-size--22 font--semi-bold text--center'>Laps</p>
					</div>
				)}
				{userActivityDetails?.pool_length && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>{userActivityDetails?.pool_length}</p>
						<p className='font-size--22 font--semi-bold text--center'>Pool Length</p>
					</div>
				)}
				{userActivityDetails?.pace?.average && (
					<div className='list-data-wrapper'>
						<p className='font-size--30 font--semi-bold text--center'>
							{userActivityDetails?.pace.average}
						</p>
						<p className='font-size--22 font--semi-bold text--center'>Pace Avg</p>
					</div>
				)}
			</div>

			{userActivityDetails?.name && <ActivityChart activityData={activityData} />}
		</div>
	);
};

export default Activity;
