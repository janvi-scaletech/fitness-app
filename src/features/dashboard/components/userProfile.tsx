import { IUserData } from 'features/auth/interface/auth';
import React, { FC } from 'react';

interface IUserDetails {
	userData: IUserData;
}
const UserProfile: FC<IUserDetails> = ({ userData }) => {
	return (
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
			<p className='text--center mb--20'>{userData.name}</p>
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
	);
};

export default UserProfile;
