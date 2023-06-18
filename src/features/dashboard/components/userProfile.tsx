import { FC } from 'react';
import { IUserData } from 'features/auth/interface/auth';
import ProfileImg from 'assets/images/profile2.jpg';

interface IUserDetails {
	userData: IUserData;
}
const UserProfile: FC<IUserDetails> = ({ userData }) => {
	return (
		<div className='profile-container'>
			<h3 className='font-size--lg pl--20 pt--20 font--semi-bold mb--20'>My profile</h3>
			<div className='profile-wrapper m--0-auto'>
				<img className='profile-img width--full height--full' src={ProfileImg} />
			</div>
			<p className='font-size--lg text--center mb--20 font--semi-bold'>{userData.name}</p>
			<div className='user-details flex justify-content--around align-items--center'>
				<div>
					<p className='font-size--xxs text--light-grey'>Weight</p>
					<p className='font-size--sm font--semi-bold'>{userData.weight} kg</p>
				</div>
				<div>
					<p className='font-size--xxs text--light-grey'>Height</p>
					<p className='font-size--sm font--semi-bold'>{userData.height} cm</p>
				</div>
				<div>
					<p className='font-size--xxs text--light-grey'>Age</p>
					<p className='font-size--sm font--semi-bold'>{userData.age}</p>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
