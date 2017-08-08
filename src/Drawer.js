import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { CalendarContent, Sidebar, Settings } from './components/';

const Drawer = DrawerNavigator(
	{
		CalendarContent: { screen: CalendarContent },
		Settings: { screen: Settings },
	},
	{
		initialRouteName: 'CalendarContent',
		contentOptions: {
			activeTintColor: '#e91e63'
		},
		contentComponent: props => <Sidebar {...props} />
	}
);

export default Drawer;
