import { useNavigate } from 'react-router-dom';
import fitnessData from 'assets/JSON/fitness.json';
import Activity from '../componets/activity';
import '../styles/activity.scss';

const ActivityContainer = () => {
	const navigate = useNavigate();
	const userActivityData = fitnessData.activities;
	const handleOnClick = (activityId: string) => {
		navigate(`/activity/${activityId}`);
	};

	return (
		<div className='user-activity-container'>
			<p className='font-size--24 ml--20 mt--20'>Activity List</p>
			<div className='flex flex--wrap '>
				{userActivityData.map((activityList, index) => {
					return (
						<div
							className='activity-list-wrapper flex justify-content--between cursor--pointer'
							key={index}
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
