import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/App.css';

import Header from './Header';
import JobListings from './JobListings';
import {
	DISTINCTIVE_FEATURE_NEW,
	DISTINCTIVE_FEATURE_FEATURED,
	JOB_TYPE_FULL_TIME,
	JOB_TYPE_PART_TIME,
	JOB_TYPE_CONTRACTUAL,

	// Job Tags
	JOB_TAG_FRONTEND,
	JOB_TAG_SENIOR,
	JOB_TAG_HTML,
	JOB_TAG_CSS,
	JOB_TAG_JAVASCRIPT,
	JOB_TAG_FULL_STACK,
	JOB_TAG_MIDWEIGHT,
	JOB_TAG_REACT,
	JOB_TAG_PYTHON,
	JOB_TAG_JUNIOR,
	JOB_TAG_SASS,
	JOB_TAG_RUBY,
	JOB_TAG_BACKEND,
	JOB_TAG_ROR,
	JOB_TAG_VUE,
	JOB_TAG_DJANGO,
} from '../utils/utils';

const jobListings = [
	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/photosnap.svg',
		companyName: 'Photoshop',
		distinctiveFeatures: [
			DISTINCTIVE_FEATURE_NEW,
			DISTINCTIVE_FEATURE_FEATURED,
		],
		jobTitle: 'Senior Frontend Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'USA only',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_SENIOR,
			JOB_TAG_HTML,
			JOB_TAG_CSS,
			JOB_TAG_JAVASCRIPT,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/manage.svg',
		companyName: 'Manage',
		distinctiveFeatures: [
			DISTINCTIVE_FEATURE_NEW,
			DISTINCTIVE_FEATURE_FEATURED,
		],
		jobTitle: 'Fullstack Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_PART_TIME,
		jobLocale: 'Remote',
		tags: [
			JOB_TAG_FULL_STACK,
			JOB_TAG_MIDWEIGHT,
			JOB_TAG_PYTHON,
			JOB_TAG_REACT,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/account.svg',
		companyName: 'Account',
		distinctiveFeatures: [DISTINCTIVE_FEATURE_NEW],
		jobTitle: 'Junior Frontend Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_PART_TIME,
		jobLocale: 'USA only',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_JUNIOR,
			JOB_TAG_REACT,
			JOB_TAG_SASS,
			JOB_TAG_JAVASCRIPT,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/myhome.svg',
		companyName: 'MyHome',
		distinctiveFeatures: [],
		jobTitle: 'Junior Frontend Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_CONTRACTUAL,
		jobLocale: 'USA only',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_JUNIOR,
			JOB_TAG_CSS,
			JOB_TAG_JAVASCRIPT,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/loop-studios.svg',
		companyName: 'Loop Studios',
		distinctiveFeatures: [],
		jobTitle: 'Software Engineer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'Worldwide',
		tags: [
			JOB_TAG_FULL_STACK,
			JOB_TAG_MIDWEIGHT,
			JOB_TAG_JAVASCRIPT,
			JOB_TAG_SASS,
			JOB_TAG_RUBY,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/faceit.svg',
		companyName: 'FaceIt',
		distinctiveFeatures: [],
		jobTitle: 'Junior Backend Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'UK only',
		tags: [JOB_TAG_BACKEND, JOB_TAG_JUNIOR, JOB_TAG_RUBY, JOB_TAG_ROR],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/shortly.svg',
		companyName: 'Shortly',
		distinctiveFeatures: [],
		jobTitle: 'Junior Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'Worldwide',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_JUNIOR,
			JOB_TAG_HTML,
			JOB_TAG_SASS,
			JOB_TAG_JAVASCRIPT,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/insure.svg',
		companyName: 'Insure',
		distinctiveFeatures: [],
		jobTitle: 'Junior Frontend Developer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'USA only',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_JUNIOR,
			JOB_TAG_VUE,
			JOB_TAG_JAVASCRIPT,
			JOB_TAG_SASS,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/eyecam-co.svg',
		companyName: 'Eyecam Co.',
		distinctiveFeatures: [],
		jobTitle: 'Full Stack Engineer',
		postTime: new Date(),
		jobType: JOB_TYPE_FULL_TIME,
		jobLocale: 'Worldwide',
		tags: [
			JOB_TAG_FULL_STACK,
			JOB_TAG_MIDWEIGHT,
			JOB_TAG_JAVASCRIPT,
			JOB_TAG_DJANGO,
			JOB_TAG_PYTHON,
		],
	},

	{
		id: uuidv4(),
		companyLogoImageSrc: '/assets/images/the-air-filter-company.svg',
		companyName: 'The Air Filter Company',
		distinctiveFeatures: [],
		jobTitle: 'Front-end Dev',
		postTime: new Date(),
		jobType: JOB_TYPE_PART_TIME,
		jobLocale: 'Worldwide',
		tags: [
			JOB_TAG_FRONTEND,
			JOB_TAG_JUNIOR,
			JOB_TAG_REACT,
			JOB_TAG_SASS,
			JOB_TAG_JAVASCRIPT,
		],
	},
];

export const App = () => {
	return (
		<div className="app--container">
			<Header />
			<JobListings listings={jobListings} />
		</div>
	);
};

export default App;
