import { v4 as uuidv4 } from 'uuid';

import photoshopCompanyImg from '../assets/images/photosnap.svg';
import manageCompanyImg from '../assets/images/manage.svg';
import accountCompanyImg from '../assets/images/account.svg';
import myHomeCompanyImg from '../assets/images/myhome.svg';
import loopStudiosCompanyImg from '../assets/images/loop-studios.svg';
import faceitCompanyImg from '../assets/images/faceit.svg';
import shortlyCompanyImg from '../assets/images/shortly.svg';
import insureCompanyImg from '../assets/images/insure.svg';
import eyeCamCompanyImg from '../assets/images/eyecam-co.svg';
import theAirFilterCompanyImg from '../assets/images/the-air-filter-company.svg';

export const DISTINCTIVE_FEATURE_NEW = 'New!';
export const DISTINCTIVE_FEATURE_FEATURED = 'Featured';

export const JOB_TYPE_PART_TIME = 'Part Time';
export const JOB_TYPE_FULL_TIME = 'Full Time';
export const JOB_TYPE_CONTRACTUAL = 'Contract';

export const JOB_TAG_FRONTEND = 'Frontend';
export const JOB_TAG_SENIOR = 'Senior';
export const JOB_TAG_HTML = 'HTML';
export const JOB_TAG_CSS = 'CSS';
export const JOB_TAG_JAVASCRIPT = 'JavaScript';
export const JOB_TAG_FULL_STACK = 'Fullstack';

export const JOB_TAG_MIDWEIGHT = 'Midweight';
export const JOB_TAG_PYTHON = 'Python';
export const JOB_TAG_REACT = 'React';
export const JOB_TAG_JUNIOR = 'Junior';
export const JOB_TAG_SASS = 'Sass';
export const JOB_TAG_RUBY = 'Ruby';
export const JOB_TAG_BACKEND = 'Backend';
export const JOB_TAG_ROR = 'RoR';
export const JOB_TAG_VUE = 'Vue';
export const JOB_TAG_DJANGO = 'Django';

export const jobListings = [
	{
		id: uuidv4(),
		companyLogoImageSrc: photoshopCompanyImg,
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
		companyLogoImageSrc: manageCompanyImg,
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
		companyLogoImageSrc: accountCompanyImg,
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
		companyLogoImageSrc: myHomeCompanyImg,
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
		companyLogoImageSrc: loopStudiosCompanyImg,
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
		companyLogoImageSrc: faceitCompanyImg,
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
		companyLogoImageSrc: shortlyCompanyImg,
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
		companyLogoImageSrc: insureCompanyImg,
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
		companyLogoImageSrc: eyeCamCompanyImg,
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
		companyLogoImageSrc: theAirFilterCompanyImg,
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

	// Dummy Job Listing with all job tags to test styles
	// {
	// 	id: uuidv4(),
	// 	companyLogoImageSrc: theAirFilterCompanyImg,
	// 	companyName: 'My Air Filter Company',
	// 	distinctiveFeatures: [],
	// 	jobTitle: 'Front-end Dev',
	// 	postTime: new Date(),
	// 	jobType: JOB_TYPE_PART_TIME,
	// 	jobLocale: 'Worldwide',
	// 	tags: [
	// 		JOB_TAG_FRONTEND,
	// 		JOB_TAG_SENIOR,
	// 		JOB_TAG_HTML,
	// 		JOB_TAG_CSS,
	// 		JOB_TAG_JAVASCRIPT,
	// 		JOB_TAG_FULL_STACK,
	// 		JOB_TAG_MIDWEIGHT,
	// 		JOB_TAG_REACT,
	// 		JOB_TAG_PYTHON,
	// 		JOB_TAG_JUNIOR,
	// 		JOB_TAG_SASS,
	// 		JOB_TAG_RUBY,
	// 		JOB_TAG_BACKEND,
	// 		JOB_TAG_ROR,
	// 		JOB_TAG_VUE,
	// 		JOB_TAG_DJANGO,
	// 	],
	// },
];

export const getFilteredListings = (listings, filters) => {
	if (!filters || filters.length === 0) {
		return listings;
	}

	return listings.filter((listing) =>
		filters.every((filter) => listing.tags.includes(filter))
	);
};
