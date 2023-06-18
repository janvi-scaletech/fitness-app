import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IWeeklyProps } from '../interface/dashboard';
import { isEmpty } from 'lodash';

interface IWeeklyActivity {
	weeklyActivity: IWeeklyProps[];
}
const WeeklyActivity: FC<IWeeklyActivity> = ({ weeklyActivity }) => {
	const navigate = useNavigate();
	const handleOnClick = (activityId: string) => {
		navigate(`/activity/${activityId}`);
	};
	return (
		<div className='weekly-data-wrapper'>
			<div className='flex align-items--center justify-content--between mt--20'>
				<h3 className='weekly-title font-size--lg font--semi-bold'>Weekly Challenge</h3>
				<button
					className='view-more-title no--bg font-size--sm font--medium text--green'
					onClick={() => navigate('/activity')}
				>
					View More
				</button>
			</div>
			{!isEmpty(weeklyActivity) &&
				weeklyActivity.map((activity, index) => {
					const { name, duration, calories, id, svgIcon } = activity;

					return (
						<div className='weekly-fitness-details flex mt--30 justify-content--between' key={index}>
							<div className='img-wrapper'>
								<img src={svgIcon} className='height--full width--full' />
							</div>
							<div>
								<h3 className=' weekly-activity-title font-size--browser-default font--semi-bold'>
									{name}
								</h3>
								<p className='weekly-cal-data font-size--xxs text--light-grey'>
									{duration} min | {calories} Kcal/Hour
								</p>
							</div>
							<div className='btn-wrapper' onClick={() => handleOnClick(id)}>
								<button className='button-info font-size--sm font--medium'>Try it Now</button>
							</div>
						</div>
					);
				})}

			{isEmpty(weeklyActivity) && (
				<div className='display-flex-center pb--100'>
					<h3>No Data Found</h3>
				</div>
			)}
		</div>
	);
};

export default WeeklyActivity;
