import { FC, Fragment, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DownArrow, SideNavArrowIcon } from 'shared/components/icons/icons';
import { SIDE_NAV_OPTIONS } from 'shared/constants/constants';
import '../../assets/styles/module/sidenav.scss';
//import fitnessLogo from 'assets/lotties/gym-animation.json';
//import Lottie from 'react-lottie';

const SideNav: FC = () => {
	const [sidebarOpen, setSideBarOpen] = useState(true);
	const [isChildNavOpen, setIsChildNavOpen] = useState<string | null>(null);

	const location = useLocation();
	const activeMenu = location.pathname.split('/')[1];

	//const defaultOptions = {
	//	loop: true,
	//	autoplay: true,
	//	animationData: fitnessLogo
	//};

	return (
		<nav className='navbar-default' role='navigation'>
			<div
				className={`navbar-static-side bg--white d--flex flex--column full--height ${
					sidebarOpen ? 'collapsed' : ''
				}`}
			>
				<NavLink className='ml--10' to='/dashboard'>
					{/*<Lottie options={defaultOptions} height={50} width={50} />*/}
				</NavLink>
				<div
					className={`collapse-icon cursor-pointer ${sidebarOpen ? '' : 'rotate-collapse-icon'}`}
					onClick={() => setSideBarOpen(!sidebarOpen)}
				>
					<SideNavArrowIcon />
				</div>
				<div className='cursor-pointer d--flex flex--column icons'>
					{SIDE_NAV_OPTIONS.map((data, index) => {
						const { SvgIcon, urlLink, title } = data;
						console.log('SvgIcon', SvgIcon);
						return (
							<Fragment key={index}>
								<NavLink
									to={urlLink}
									className={`nav-link ${activeMenu === urlLink ? 'active-menu' : ''} 
										`}
									onClick={() => setIsChildNavOpen(null)}
								>
									<div className='nav-link-content flex full--width align-items--center bg--twilight-blue'>
										<div>{SvgIcon && <SvgIcon />}</div>

										<p className='menu-label'>{title}</p>
									</div>
								</NavLink>
							</Fragment>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
export default SideNav;
