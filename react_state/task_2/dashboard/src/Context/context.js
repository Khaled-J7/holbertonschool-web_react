// task_2/dashboard/src/Context/context.js
import React from 'react';

const defaultUser = {
	email: '',
	password: '',
	isLoggedIn: false,
};

const defaultLogOut = () => {};

export const newContext = React.createContext({
	user: defaultUser,
	logOut: defaultLogOut,
});
