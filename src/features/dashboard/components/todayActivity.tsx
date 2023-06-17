import React, { FC } from 'react';
import { DotIcon } from 'shared/components/icons/icons';

interface ITodayActivity {
	userActivity: any;
}
const TodayActivity: FC<ITodayActivity> = ({ userActivity }) => {
	return (
		<div className='activity-wrapper'>
			<h3 className='font-size--lg line-height--32 mt--20'>Today's Activity</h3>
			<div className='flex align-items--center justify-content--between mt--30'>
				<div className='today-activity-wrapper'>
					<img />
				</div>
				<div>
					{userActivity &&
						userActivity.map(({ name, duration, className }: any, index: number) => {
							return (
								<div key={index} className='activity-details-wrapper flex mb--20'>
									<DotIcon className={`${className}`} />
									<div>
										<h3 className='font-size--browser-default font--medium'>{name}</h3>
										<p className='font-size--xxs text--light-grey'>{duration} Minutes</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default TodayActivity;
