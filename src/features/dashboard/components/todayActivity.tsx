import { FC, useState } from 'react';
import Lottie from 'react-lottie';
import circleAnimation from 'assets/lotties/circle-progress.json';
import { DotIcon } from 'shared/components/icons/icons';
import { IIUserActivity } from '../interface/dashboard';
import { isEmpty } from 'lodash';

interface ITodayActivity {
	userActivity: IIUserActivity[];
}
const TodayActivity: FC<ITodayActivity> = ({ userActivity }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: circleAnimation
	};
	return (
		<div className='activity-wrapper'>
			<h3 className='activity-title font-size--lg line-height--32 mt--20'>Today's Activity</h3>
			<div className='activity-info flex align-items--center justify-content--between mt--30'>
				<Lottie options={defaultOptions} height={150} width={150} />
				<div>
					{!isEmpty(userActivity) &&
						userActivity &&
						userActivity.map(({ name, duration, className }, index: number) => {
							return (
								<div key={index} className='activity-details-wrapper flex mb--20'>
									<DotIcon className={`${className}`} />
									<div>
										<h3 className='activity-details-title font-size--browser-default font--medium'>
											{name}
										</h3>
										<p className='activity-details-duration  font-size--xxs text--light-grey'>
											{duration} Minutes
										</p>
									</div>
								</div>
							);
						})}
				</div>

				{isEmpty(userActivity) && (
					<div className='display-flex-center pb--100'>
						<h3>No Data Found</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default TodayActivity;
