import React from 'react';
import { } from 'react-native';
import Slides from './Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Calendar' },
	{ text: 'Smartest Tool Ever' } 
];


export default class Welcome extends React.Component {
	render() {
		return (
			<Slides data={SLIDE_DATA} />
		);
	}
}
