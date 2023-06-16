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
}

export interface IHeartRate {
	average: number;
	max: number;
}

export interface IPace {
	average: number;
	best: number;
}
