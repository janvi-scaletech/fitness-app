import { FC } from 'react';
import { IIconProps } from 'shared/components/icons/icons';

export interface IChildSideNavOpt {
	urlLink: string;
	title: string;
}
export interface ISideNavOpt {
	SvgIcon?: FC<IIconProps>;
	urlLink: string;
	title: string;
}
