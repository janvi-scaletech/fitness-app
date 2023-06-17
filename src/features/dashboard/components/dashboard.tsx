import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';
import { IUserActivity } from '../interface/dashboard';
import '../styles/dashboard.scss';
import { DotIcon } from 'shared/components/icons/icons';

interface IFitnessActivity {
	userFitnessActivity: IUserActivity[];
}
const Dashboard: FC<IFitnessActivity> = ({ userFitnessActivity }) => {
	const userData = useSelector((state: IState) => state.auth.userData);
	const [userDetails, setUserDetails] = useState(userData);
	return (
		<div className='dashboard-container flex'>
			<div className='dashboard-wrapper'>
				<p>Good morning</p>
				<h3>Welcome {userDetails.name}</h3>

				<div className='flex'>
					<div className='activity-wrapper width--full'>
						<h3 className='font-size--24 line-height--32'>Today's Activity</h3>

						<div className='activity-details-wrapper flex'>
							<DotIcon />
							<div>
								<h3 className='font-size--xxl'>CrossFit</h3>
								<p>50 min</p>
							</div>
						</div>
						<div className='activity-details-wrapper flex'>
							<DotIcon />
							<div>
								<h3 className='font-size--xxl'>CrossFit</h3>
								<p>50 min</p>
							</div>
						</div>
						<div className='activity-details-wrapper flex'>
							<DotIcon />
							<div>
								<h3 className='font-size--xxl'>CrossFit</h3>
								<p>50 min</p>
							</div>
						</div>
					</div>

					<div className='weekly-data-wrapper width--full '>
						<div className='flex align-items--center justify-content--between mt--20'>
							<h3 className='font-size--xxl'>Weekly Challenge</h3>
							<p className=''>View More</p>
						</div>
						<div className='weekly-fitness-details flex mt--30 justify-content--between'>
							<div className='img-wrapper'>
								<img />
							</div>
							<div>
								<h3 className='font-size--xxl'>Yoga</h3>
								<p>60 min | 120 Kcal/Hour</p>
							</div>
							<div className='btn-wrapper'>
								<button className='button-info'>Try it Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='profile-container'>
				<h3 className='font-size--xxl pl--20 pt--20'>My profile</h3>
				<div className='profile-wrapper m--0-auto'>
					{/* <div className='progress-bar-container'>
						<div className='progress-bar css'>
							<progress id='css' max='100' value='87'></progress>
						</div>
					</div> */}
					<image className='profile-img' />
				</div>
				<p className='text--center mb--20'>Janvi Kalavadiya</p>
				<div className='user-details flex justify-content--around align-items--center'>
					<div>
						<p>Weight</p>
						<h3 className='font-size--xxl'>56</h3>
					</div>
					<div>
						<p>Height</p>
						<h3 className='font-size--xxl'>156</h3>
					</div>
					<div>
						<p>Age</p>
						<h3 className='font-size--xxl'>24</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
