import { FC } from 'react';

export interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
	onClick?: () => void;
}

export const HidePasswordIcon: FC<IIconProps> = ({ height, width, className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''} width={width || '20'} height={height || '20'}>
		<g opacity='0.3'>
			<path d='M19.8437 24.375C21.0041 24.375 22.1169 23.9141 22.9373 23.0936C23.7578 22.2731 24.2187 21.1603 24.2187 20C24.2187 19.8719 24.2129 19.7449 24.2019 19.6196L19.4633 24.3582C19.5887 24.3692 19.7152 24.375 19.8437 24.375ZM34.325 6.4672L32.6562 4.80001C32.5976 4.74145 32.5182 4.70856 32.4353 4.70856C32.3525 4.70856 32.273 4.74145 32.2144 4.80001L27.9441 9.0715C25.5884 7.86759 22.9404 7.26564 20 7.26564C12.4922 7.26564 6.89061 11.1758 3.19529 18.9961C3.04676 19.3106 2.96973 19.6541 2.96973 20.002C2.96973 20.3498 3.04676 20.6933 3.19529 21.0078C4.67186 24.118 6.44985 26.6108 8.52928 28.4864L4.39686 32.6172C4.3383 32.6758 4.3054 32.7553 4.3054 32.8381C4.3054 32.921 4.3383 33.0004 4.39686 33.059L6.06444 34.7266C6.12303 34.7851 6.20249 34.818 6.28533 34.818C6.36818 34.818 6.44763 34.7851 6.50623 34.7266L34.325 6.90939C34.354 6.88037 34.3771 6.8459 34.3928 6.80796C34.4086 6.77003 34.4166 6.72936 34.4166 6.6883C34.4166 6.64723 34.4086 6.60656 34.3928 6.56863C34.3771 6.53069 34.354 6.49622 34.325 6.4672ZM12.9687 20C12.9686 18.8125 13.2761 17.6453 13.8612 16.612C14.4463 15.5786 15.289 14.7145 16.3074 14.1036C17.3257 13.4928 18.4849 13.1562 19.672 13.1265C20.8591 13.0969 22.0337 13.3752 23.0812 13.9344L21.182 15.8336C20.4161 15.5884 19.5974 15.5588 18.8158 15.7482C18.0341 15.9377 17.3198 16.3387 16.7511 16.9074C16.1824 17.4761 15.7814 18.1904 15.592 18.9721C15.4025 19.7537 15.4321 20.5724 15.6773 21.3383L13.7781 23.2375C13.2451 22.2417 12.9671 21.1295 12.9687 20Z' />
			<path d='M36.8047 18.9922C35.4297 16.0964 33.7931 13.735 31.8949 11.9082L26.2645 17.5391C26.7391 18.7797 26.8443 20.1313 26.5674 21.4305C26.2904 22.7297 25.6432 23.9209 24.7039 24.8602C23.7646 25.7995 22.5735 26.4467 21.2743 26.7236C19.9751 27.0005 18.6235 26.8953 17.3828 26.4207L12.6071 31.1965C14.8227 32.2218 17.287 32.7344 20 32.7344C27.5078 32.7344 33.1094 28.8242 36.8047 21.0039C36.9533 20.6894 37.0303 20.3459 37.0303 19.9981C37.0303 19.6502 36.9533 19.3067 36.8047 18.9922Z' />
		</g>
	</svg>
);

export const ShowPasswordIcon: FC<IIconProps> = ({ height, width, className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''}>
		<path d='M19.9955 13.6332C16.9871 13.6332 14.5422 16.0781 14.5422 19.0865C14.5422 22.095 16.9871 24.5398 19.9955 24.5398C23.004 24.5398 25.4488 22.095 25.4488 19.0865C25.4488 16.0781 23.0039 13.6332 19.9955 13.6332Z' />
		<path d='M19.9955 5.45331C10.9066 5.45331 3.14477 11.1065 0 19.0866C3.14477 27.0665 10.9066 32.7198 19.9955 32.7198C29.0934 32.7198 36.8462 27.0665 39.991 19.0866C36.8462 11.1065 29.0934 5.45331 19.9955 5.45331ZM19.9955 28.1754C14.9784 28.1754 10.9066 24.1035 10.9066 19.0865C10.9066 14.0694 14.9784 9.9977 19.9955 9.9977C25.0125 9.9977 29.0844 14.0695 29.0844 19.0866C29.0844 24.1036 25.0125 28.1754 19.9955 28.1754Z' />
	</svg>
);

export const SideNavArrowIcon: FC<IIconProps> = ({ height, width, className }) => (
	<svg width={width || '40'} height={height || '40'} className={className || ''} viewBox='0 0 14 14'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.4961 11.35C11.2683 11.5778 10.899 11.5778 10.6712 11.35L6.73368 7.41246C6.50587 7.18465 6.50587 6.81531 6.73368 6.5875L10.6712 2.65C10.899 2.42219 11.2683 2.42219 11.4961 2.65C11.7239 2.87781 11.7239 3.24715 11.4961 3.47496L7.97112 6.99998L11.4961 10.525C11.7239 10.7528 11.7239 11.1222 11.4961 11.35Z'
			fill='#095f74'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.82915 11.35C6.60134 11.5778 6.23199 11.5778 6.00419 11.35L2.06669 7.41246C1.83888 7.18465 1.83888 6.81531 2.06669 6.5875L6.00419 2.65C6.23199 2.42219 6.60134 2.42219 6.82915 2.65C7.05695 2.87781 7.05695 3.24715 6.82915 3.47496L3.30412 6.99998L6.82915 10.525C7.05695 10.7528 7.05695 11.1222 6.82915 11.35Z'
			fill='#095f74'
		/>
	</svg>
);

export const DownArrow: FC<IIconProps> = ({ height, width, className }) => (
	<svg viewBox='0 0 10 7' width={width || '10'} height={height || '7'} className={className || ''}>
		<path
			d='M1 1.66675L5 5.66675L9 1.66675'
			stroke='#999999'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const DashboardIcon: FC<IIconProps> = ({ height, width, className }) => (
	<svg width={width || '24'} height={height || '24'} className={className || ''} viewBox='0 0 24 24' fill='none'>
		<g clipPath='url(#clip0_332_214)'>
			<path
				d='M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z'
				fill='#00A5CB'
			/>
		</g>
		<defs>
			<clipPath id='clip0_332_214'>
				<rect width='24' height='24' fill='white' />
			</clipPath>
		</defs>
	</svg>
);

export const TrainingIcon: FC<IIconProps> = ({ height, width, className }) => (
	<svg
		width={width || '24'}
		height={height || '24'}
		className={className || ''}
		viewBox='0 0 64 64'
		id='wight-lifting'
	>
		<path fill='#423d54' d='M6 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M6 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zM6 9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path fill='#423d54' d='M10 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M10 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zm0-18c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path fill='#423d54' d='M14 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M14 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zm0-18c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path fill='#423d54' d='M50 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M50 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zm0-18c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path fill='#423d54' d='M54 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M54 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zm0-18c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path fill='#423d54' d='M58 26c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1-.9 2-2 2z' />
		<path
			fill='#000056'
			d='M58 27c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3s3 1.35 3 3v14c0 1.65-1.35 3-3 3zm0-18c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V10c0-.55-.45-1-1-1z'
		/>
		<path d='M48 18h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zM39 18H26c-.55 0-1-.45-1-1s.45-1 1-1h13c.55 0 1 .45 1 1s-.45 1-1 1zM20 18h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z' />
		<path fill='#d1d1dd' d='M25 39c-2.21 0-4-1.79-4-4V15c0-1.1.9-2 2-2s2 .9 2 2v24z' />
		<path
			fill='#000056'
			d='M25 40c-2.76 0-5-2.24-5-5V15c0-1.65 1.35-3 3-3s3 1.35 3 3v24c0 .55-.45 1-1 1zm-2-26c-.55 0-1 .45-1 1v20c0 1.3.84 2.42 2 2.83V15c0-.55-.45-1-1-1z'
		/>
		<path fill='#d1d1dd' d='M39 39V15c0-1.1.9-2 2-2s2 .9 2 2v20c0 2.21-1.79 4-4 4z' />
		<path
			fill='#000056'
			d='M39 40c-.55 0-1-.45-1-1V15c0-1.65 1.35-3 3-3s3 1.35 3 3v20c0 2.76-2.24 5-5 5zm2-26c-.55 0-1 .45-1 1v22.83c1.16-.41 2-1.53 2-2.83V15c0-.55-.45-1-1-1z'
		/>
		<circle cx='32' cy='28' r='4' fill='#d1d1dd' />
		<path
			fill='#000056'
			d='M32 33c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z'
		/>
		<path fill='#d1d1dd' d='M25 34h13v22H25z' />
		<path
			fill='#000056'
			d='M38 57H25c-.55 0-1-.45-1-1V34c0-.55.45-1 1-1h13c.55 0 1 .45 1 1v22c0 .55-.45 1-1 1zm-12-2h11V35H26v20z'
		/>
	</svg>
);

export const GoalsIcon: FC<IIconProps> = ({ height, width, className }) => (
	<svg
		version='1.1'
		id='Layer_1'
		x='0px'
		y='0px'
		width={width || '24'}
		height={height || '24'}
		className={className || ''}
		viewBox='0 0 122.88 119.853'
		enable-background='new 0 0 122.88 119.853'
		xmlSpace='preserve'
	>
		<g>
			<path d='M59.927,0h0.009v0.002c5.902,0.001,11.606,0.855,16.99,2.446c0.861,0.254,1.73,0.534,2.605,0.836 c4.428,1.532,8.614,3.565,12.491,6.029c0.273,0.173,0.354,0.535,0.182,0.808c-0.018,0.027-0.039,0.054-0.06,0.078l-4.288,5.498 c-0.19,0.244-0.536,0.296-0.788,0.125l-0.01-0.006c-1.09-0.673-2.216-1.31-3.372-1.909c-1.165-0.602-2.349-1.16-3.55-1.669 l-0.002-0.001v0.001c-6.206-2.633-13.035-4.09-20.208-4.09h-0.006V8.146c-7.146,0-13.958,1.451-20.152,4.071 c-1.012,0.428-2.005,0.886-2.975,1.371c-5.007,2.504-9.555,5.801-13.48,9.726l-0.004,0.004l-0.027,0.025 c-1.302,1.304-2.535,2.677-3.692,4.113c-1.164,1.445-2.255,2.956-3.262,4.524c-5.177,8.06-8.181,17.652-8.181,27.946v0.006H8.145 c0,7.146,1.451,13.958,4.071,20.152c0.428,1.013,0.886,2.005,1.371,2.975c2.504,5.006,5.801,9.555,9.727,13.48l0.004,0.004 l0.022,0.023c1.304,1.303,2.679,2.537,4.116,3.695c1.445,1.165,2.956,2.255,4.525,3.262c8.06,5.177,17.653,8.181,27.946,8.181 h0.006v0.003c7.148-0.001,13.958-1.451,20.152-4.071c1.013-0.428,2.005-0.886,2.975-1.371c5.007-2.504,9.556-5.801,13.48-9.726 l0.005-0.005l0.03-0.029c1.3-1.303,2.532-2.674,3.688-4.108c1.165-1.445,2.255-2.957,3.262-4.525 c5.178-8.06,8.181-17.652,8.181-27.945v-0.01h0.003c-0.001-4.319-0.532-8.521-1.533-12.537c-0.166-0.669-0.341-1.318-0.523-1.946 c-0.962-3.307-2.247-6.479-3.814-9.478c-0.136-0.259-0.058-0.573,0.172-0.741l5.541-4.381c0.252-0.2,0.619-0.157,0.818,0.096 c0.018,0.022,0.033,0.046,0.046,0.07L112.418,31l0.004,0.008l0.006,0.012l0.001,0c0.661,1.198,1.285,2.425,1.866,3.676 c0.582,1.252,1.121,2.525,1.615,3.814c2.547,6.652,3.943,13.874,3.943,21.418v0.006h-0.002c-0.001,8.271-1.679,16.154-4.711,23.321 c-0.491,1.163-1.021,2.312-1.588,3.443c-2.903,5.805-6.717,11.069-11.251,15.604l-0.004,0.004l-0.022,0.02 c-1.512,1.511-3.105,2.94-4.771,4.283c-1.673,1.349-3.421,2.609-5.234,3.774c-9.33,5.992-20.433,9.471-32.344,9.471h-0.006v-0.002 c-8.271-0.001-16.154-1.679-23.321-4.711c-1.163-0.491-2.312-1.022-3.444-1.589c-5.804-2.902-11.069-6.717-15.604-11.25 l-0.004-0.005l-0.028-0.029c-1.508-1.51-2.935-3.1-4.275-4.763c-1.348-1.673-2.609-3.421-3.773-5.234 C3.479,82.939,0,71.837,0,59.927V59.92h0.002c0.001-8.271,1.679-16.153,4.71-23.321c0.492-1.163,1.022-2.311,1.589-3.444 c2.902-5.804,6.717-11.068,11.25-15.603l0.004-0.004l0.026-0.023c1.51-1.509,3.103-2.938,4.766-4.279 c1.674-1.348,3.421-2.609,5.235-3.773C36.915,3.478,48.017,0,59.927,0L59.927,0z M93.067,16.299l16.77-16.024l1.117,10.807 l11.926,1.491l-17.958,17.401l-8.738,0.75L61.316,63.154l-3.213-2.767l33.027-34.5L93.067,16.299L93.067,16.299z M59.927,40.958 h0.015v0.002c1.128,0.001,2.226,0.098,3.283,0.284c0.123,0.022,0.297,0.055,0.517,0.1h0.003l0,0c0.88,0.18,1.742,0.423,2.579,0.723 c0.304,0.108,0.462,0.442,0.353,0.746c-0.021,0.06-0.053,0.114-0.09,0.162l0.001,0.001l-4.681,6.004 c-0.131,0.169-0.339,0.244-0.538,0.218V49.2l-0.027-0.004v0.001l-0.208-0.025l-0.018-0.003l-0.18-0.019l-0.015-0.002 c-0.312-0.027-0.643-0.042-0.994-0.042h-0.006v-0.003c-1.491,0.001-2.915,0.305-4.209,0.853c-0.214,0.091-0.422,0.187-0.621,0.286 c-1.042,0.521-1.992,1.21-2.815,2.033l-0.004,0.004l-0.027,0.024c-0.264,0.266-0.514,0.547-0.75,0.84 c-0.243,0.301-0.471,0.618-0.682,0.946c-1.08,1.682-1.706,3.687-1.706,5.837v0.006h-0.003c0.001,1.493,0.305,2.916,0.853,4.209 c0.091,0.215,0.187,0.423,0.286,0.621c0.521,1.043,1.211,1.992,2.033,2.814l0.004,0.005l0.024,0.025 c0.266,0.264,0.547,0.516,0.84,0.751c0.301,0.243,0.618,0.472,0.946,0.683c1.683,1.079,3.688,1.706,5.837,1.706h0.006v0.002 c1.493,0,2.917-0.304,4.209-0.852c0.215-0.091,0.422-0.187,0.621-0.286c1.043-0.522,1.992-1.211,2.814-2.034l0.005-0.005 l0.02-0.019c0.146-0.147,0.288-0.296,0.419-0.443s0.268-0.312,0.408-0.49c0.678-0.86,1.229-1.824,1.621-2.861 c0.045-0.121,0.126-0.219,0.227-0.284l7.564-5.982c0.253-0.2,0.619-0.157,0.819,0.096c0.07,0.089,0.109,0.192,0.121,0.297h0.003 l0.005,0.045l0.002,0.031l0.024,0.25v0.007h0.002l0.022,0.272v0.005c0.035,0.48,0.055,0.957,0.055,1.431v0.006h-0.003 c-0.001,2.617-0.532,5.111-1.491,7.379c-0.154,0.365-0.323,0.729-0.503,1.09c-0.921,1.839-2.127,3.506-3.56,4.938l-0.004,0.004 l-0.032,0.027c-0.472,0.47-0.968,0.917-1.485,1.334c-0.53,0.426-1.084,0.826-1.656,1.193c-2.954,1.896-6.466,2.997-10.234,2.997 h-0.006v-0.003c-2.617-0.001-5.111-0.532-7.378-1.491c-0.365-0.154-0.73-0.323-1.09-0.503c-1.839-0.921-3.506-2.127-4.938-3.559 l-0.004-0.004l-0.033-0.036c-0.468-0.471-0.912-0.966-1.328-1.482c-0.427-0.53-0.826-1.083-1.194-1.656 c-1.896-2.953-2.997-6.466-2.997-10.233V59.92h0.002c0.001-2.616,0.533-5.11,1.491-7.377c0.155-0.365,0.323-0.729,0.503-1.09 c0.919-1.836,2.125-3.502,3.559-4.936l0.001-0.001l-0.001-0.001l0.004-0.004c0.475-0.474,0.982-0.929,1.518-1.361 c0.53-0.427,1.083-0.826,1.656-1.194C52.647,42.059,56.161,40.958,59.927,40.958L59.927,40.958z M60.92,49.148 c-0.307-0.038-0.531-0.31-0.512-0.618L60.92,49.148L60.92,49.148z M59.927,20.31h0.01v0.002c3.544,0.001,6.977,0.467,10.238,1.338 c0.531,0.142,1.059,0.295,1.582,0.459c2.685,0.838,5.251,1.958,7.661,3.323c0.28,0.159,0.379,0.516,0.22,0.796 c-0.015,0.024-0.03,0.049-0.048,0.071l-0.003,0.003l-4.344,5.572c-0.182,0.232-0.505,0.29-0.753,0.147l-0.014-0.007 c-0.588-0.307-1.201-0.604-1.838-0.884c-0.641-0.283-1.285-0.543-1.931-0.779c-3.359-1.226-6.991-1.895-10.781-1.895h-0.006v-0.002 c-4.343,0-8.482,0.883-12.247,2.475c-0.594,0.252-1.198,0.531-1.808,0.835l-0.046,0.021c-3.023,1.519-5.771,3.514-8.146,5.888 l-0.004,0.004L37.646,37.7c-0.787,0.789-1.534,1.623-2.235,2.493c-0.707,0.878-1.37,1.797-1.982,2.75 c-3.145,4.898-4.97,10.728-4.97,16.983v0.006h-0.002c0,4.343,0.883,8.483,2.475,12.247c0.26,0.616,0.539,1.22,0.833,1.808 c1.521,3.041,3.525,5.805,5.911,8.191l0.004,0.004c0.802,0.803,1.643,1.559,2.515,2.261c0.878,0.707,1.797,1.37,2.75,1.982 c4.898,3.146,10.729,4.97,16.983,4.97h0.006v0.002c4.343,0,8.483-0.882,12.248-2.474c0.616-0.261,1.22-0.539,1.808-0.834 c3.041-1.521,5.805-3.524,8.191-5.911l0.004-0.004c0.803-0.803,1.559-1.643,2.261-2.515c0.707-0.879,1.37-1.797,1.982-2.751 c3.147-4.899,4.972-10.729,4.972-16.982h-0.002v-0.015h0.002c0-1.941-0.178-3.845-0.516-5.691c-0.051-0.276-0.111-0.578-0.18-0.899 c-0.327-1.535-0.766-3.024-1.303-4.456c-0.096-0.257,0-0.539,0.217-0.687l5.663-4.478c0.253-0.2,0.619-0.157,0.818,0.096 c0.03,0.039,0.054,0.078,0.073,0.12l0.001,0l0.004,0.01l0.004,0.008l0.001-0.001c0.295,0.669,0.579,1.365,0.85,2.086 c0.267,0.712,0.513,1.427,0.734,2.143c1.155,3.719,1.778,7.67,1.778,11.763v0.006h-0.003c0,5.467-1.109,10.678-3.113,15.415 c-0.324,0.767-0.676,1.527-1.051,2.277c-1.919,3.838-4.44,7.318-7.437,10.314l-0.005,0.004l-0.022,0.021 c-0.998,0.995-2.048,1.939-3.146,2.824c-1.106,0.892-2.262,1.725-3.46,2.494c-6.17,3.962-13.509,6.261-21.381,6.261h-0.006V99.54 c-5.467-0.001-10.678-1.109-15.416-3.113c-0.767-0.325-1.527-0.676-2.277-1.051c-3.837-1.92-7.318-4.44-10.315-7.437l-0.004-0.004 l-0.028-0.03c-0.993-0.995-1.934-2.043-2.816-3.139c-0.892-1.106-1.725-2.262-2.495-3.46c-3.962-6.169-6.261-13.509-6.261-21.38 V59.92h0.002c0.001-5.467,1.111-10.678,3.115-15.416c0.324-0.767,0.675-1.527,1.05-2.277c1.918-3.835,4.439-7.314,7.436-10.312 l0.001-0.001l-0.001-0.001l0.004-0.004l0.026-0.024c0.996-0.995,2.046-1.937,3.142-2.82c1.107-0.892,2.262-1.725,3.46-2.494 C44.715,22.609,52.056,20.31,59.927,20.31L59.927,20.31z' />
		</g>
	</svg>
);