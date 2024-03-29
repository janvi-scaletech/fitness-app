export interface IUserActivity {
	id: string;
	name: string;
	date: string;
	duration?: number;
	distance?: number;
	calories_burned?: number;
	heart_rate?: IHeartRate;
	steps?: number;
	pace?: IPace;
	elevation_gain?: number;
	img?: string;
}

export interface IHeartRate {
	average: number;
	max: number;
}

export interface IPace {
	average: number;
	best: number;
}
export interface IChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		barThickness: number;
		borderRadius: number;
	}[];
}
export interface ILineChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		borderDash: number[];
		borderDashOffset: number;
	}[];
}
export interface IWeeklyProps {
	name: string;
	duration: number | undefined;
	calories: number | undefined;
	className: string;
	svgIcon: string | undefined;
	id: string;
}
export interface IIUserActivity {
	name: string;
	duration: number | undefined;
	className: string;
}

export interface IActivityData {
	name: string;
	duration: number | undefined;
	calories_burned: number | undefined;
	heartbeat: IHeartRate | undefined;
}
