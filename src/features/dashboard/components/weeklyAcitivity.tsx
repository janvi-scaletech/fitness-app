import React, { FC } from 'react';
interface IWeeklyActivity {
	weeklyActivity: any;
}
const WeeklyActivity: FC<IWeeklyActivity> = ({ weeklyActivity }) => {
	return (
		<div className='weekly-data-wrapper'>
			<div className='flex align-items--center justify-content--between mt--20'>
				<h3 className='font-size--lg font--semi-bold'>Weekly Challenge</h3>
				<button className='no--bg  font-size--sm font--medium text--green'>View More</button>
			</div>
			{weeklyActivity &&
				weeklyActivity.map((activity: any) => {
					const { name, duration, calories } = activity;
					return (
						<div className='weekly-fitness-details flex mt--30 justify-content--between'>
							<div className='img-wrapper'>
								<img />
							</div>
							<div>
								<h3 className='font-size--browser-default font--semi-bold'>{name}</h3>
								<p className='font-size--xxs text--light-grey'>
									{duration} min | {calories} Kcal/Hour
								</p>
							</div>
							<div className='btn-wrapper'>
								<button className='button-info font-size--sm'>Try it Now</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default WeeklyActivity;
