import React from 'react';

import '../styles/App.css';

import Header from './Header';
import JobListings from './JobListings';

import { jobListings } from '../utils/utils';

export const App = () => {
	return (
		<div className="app--container">
			<Header />
			<JobListings listings={jobListings} />
		</div>
	);
};

export default App;
