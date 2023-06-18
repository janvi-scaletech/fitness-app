import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
interface IWeeklyActivity {
	weeklyActivity: any;
}
const WeeklyActivity: FC<IWeeklyActivity> = ({ weeklyActivity }) => {
	const navigate = useNavigate();
	const handleOnClick = (activityId: string) => {
		console.log('activityId', activityId);
		navigate(`/activity/${activityId}`);
	};
	return (
		<div className='weekly-data-wrapper'>
			<div className='flex align-items--center justify-content--between mt--20'>
				<h3 className='font-size--lg font--semi-bold'>Weekly Challenge</h3>
				<button
					className='no--bg  font-size--sm font--medium text--green'
					onClick={() => navigate('/activity')}
				>
					View More
				</button>
			</div>
			{weeklyActivity &&
				weeklyActivity.map((activity: any) => {
					const { name, duration, calories, id, svgIcon } = activity;

					return (
						<div className='weekly-fitness-details flex mt--30 justify-content--between'>
							<div className='img-wrapper'>
								<img src={svgIcon} className='height--full width--full' />
							</div>
							<div>
								<h3 className='font-size--browser-default font--semi-bold'>{name}</h3>
								<p className='font-size--xxs text--light-grey'>
									{duration} min | {calories} Kcal/Hour
								</p>
							</div>
							<div className='btn-wrapper' onClick={() => handleOnClick(id)}>
								<button className='button-info font-size--sm'>Try it Now</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default WeeklyActivity;
