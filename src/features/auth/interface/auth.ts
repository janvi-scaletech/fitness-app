export interface IAuthState {
	isLogin: boolean;
	userData: IUserData;
}

export interface ILoginResponse {
	data: IUserData;
	token: string;
}

export interface IUserData {
	id: string;
	email: string;
	name: string;
	token: string;
	age: number;
	height: number;
	weight: number;
}
