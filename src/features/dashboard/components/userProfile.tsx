import { FC } from 'react';
import { IUserData } from 'features/auth/interface/auth';
import ProfileImg from 'assets/images/profile2.jpg';
import { FOOD_DATA } from '../constants/dashboard.constants';

interface IUserDetails {
	userData: IUserData;
}
const UserProfile: FC<IUserDetails> = ({ userData }) => {
	return (
		<div className='profile-container show--md'>
			<h3 className='font-size--lg pl--20 pt--20 font--semi-bold mb--20'>My profile</h3>
			<div className='profile-wrapper m--0-auto border-radius--half'>
				<img className='profile-img width--full height--full  border-radius--half' src={ProfileImg} />
			</div>
			<p className='profile-name font-size--lg text--center mb--20 font--semi-bold'>{userData.name}</p>
			<div className='user-details m--0-auto flex justify-content--around align-items--center'>
				<div>
					<p className='weight-title font-size--xxs text--light-grey'>Weight</p>
					<p className='weight-name font-size--sm font--semi-bold'>{userData.weight} kg</p>
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

			<div>
				<p className='main-food-title font-size--22 text--center font--semi-bold mt--30 mb--10'>
					Recommendation Food
				</p>

				{FOOD_DATA.map(({ time, numberOfDay, foodTitle, details, img }, index) => {
					return (
						<div key={index}>
							<p className=' title font-size--browser-default font--medium pl--15 mt--20'>{time}</p>
							<div className='food-details-wrapper flex align-items--center justify-content--between'>
								<div className='food-details'>
									<h5 className='food-title font-size--sm font--medium pb--15'>{foodTitle}</h5>
									<p className='food-details-title font-size--xxs font--light'>
										<span className='font--medium'>{numberOfDay}</span> {details}
									</p>
								</div>
								<div className='food-img-wrapper border-radius--half'>
									<img src={img} className='food-img width--full height--full border-radius--half' />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserProfile;
