import { FC, Fragment, useState } from 'react';
import Lottie from 'react-lottie';
import { NavLink, useLocation } from 'react-router-dom';
import { CloseIcon, MyProfileIcon, SideNavArrowIcon, SideNavIcon } from 'shared/components/icons/icons';
import { SIDE_NAV_OPTIONS } from 'shared/constants/constants';
import fitnessLogo from 'assets/lotties/fitness-loading-spinner.json';
import { disableScrolling } from 'shared/util/utility';
import '../../assets/styles/module/sidenav.scss';
import { Link } from 'react-router-dom';

const SideNav: FC = () => {
	const [sidebarOpen, setSideBarOpen] = useState(true);
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [isChildNavOpen, setIsChildNavOpen] = useState<string | null>(null);

	const location = useLocation();
	const activeMenu = location.pathname.split('/')[1];

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: fitnessLogo
	};
	// const activeLink = router.pathname.split('/')[1];

	const handleOpenSideNav = () => {
		setIsSideNavOpen(true);
		disableScrolling(true);
	};

	const handleCloseSideNav = () => {
		setIsSideNavOpen(false);
		disableScrolling(false);
	};

	return (
		<nav className='navbar-default' role='navigation'>
			<div
				className={`navbar-static-side  d--flex flex--column full--height show--md ${
					sidebarOpen ? 'collapsed' : ''
				}`}
			>
				<NavLink className='ml--10' to='/'>
					<Lottie options={defaultOptions} height={100} width={sidebarOpen ? 100 : 50} />
				</NavLink>
				<div
					className={`collapse-icon cursor-pointer ${sidebarOpen ? '' : 'rotate-collapse-icon'}`}
					onClick={() => setSideBarOpen(!sidebarOpen)}
				>
					<SideNavArrowIcon />
				</div>
				<div className='cursor-pointer d--flex flex--column icons'>
					{SIDE_NAV_OPTIONS.map((data, index) => {
						const { SvgIcon, urlLink, title, className } = data;
						return (
							<Fragment key={index}>
								<NavLink
									to={urlLink}
									className={`nav-link ${activeMenu === urlLink ? 'active-menu' : ''} 
										`}
									onClick={() => setIsChildNavOpen(null)}
								>
									<div className='nav-link-content flex full--width align-items--center bg--twilight-blue'>
										<div>{SvgIcon && <SvgIcon className={className} />}</div>

										<p className='menu-label'>{title}</p>
									</div>
								</NavLink>
							</Fragment>
						);
					})}
				</div>
			</div>
			<div className='cursor--pointer hide--md navbar' onClick={() => handleOpenSideNav()}>
				<SideNavIcon className='side-nav' />
			</div>
			{isSideNavOpen && (
				<div className='overlay' onClick={() => handleCloseSideNav()}>
					<div className='side-nav--mobile-wrapper m--0-auto'>
						<div className='close-icon text--right cursor--pointer' onClick={() => handleCloseSideNav()}>
							<CloseIcon />
						</div>
						<div className='height--full-viewport side-nav--option flex flex--column align-items--center justify-content--center'>
							{SIDE_NAV_OPTIONS.map(({ title, urlLink, SvgIcon, className }, index) => (
								<Fragment key={index}>
									<NavLink
										to={urlLink}
										className={`nav-link ${activeMenu === urlLink ? 'active-menu' : ''} 
									`}
										onClick={() => setIsChildNavOpen(null)}
									>
										<div className='nav-link-content flex full--width align-items--center bg--twilight-blue'>
											<div>{SvgIcon && <SvgIcon className={className} />}</div>
											<p className='menu-label'>{title}</p>
										</div>
									</NavLink>
								</Fragment>
							))}
							<div className='nav-link-content flex full--width align-items--center bg--twilight-blue'>
								<div className='display-flex-center'>
									<MyProfileIcon className='profile-icon' />
								</div>
								<p className='menu-label'>My Profile</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};
export default SideNav;
