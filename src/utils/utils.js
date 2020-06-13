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

export const getFilteredListings = (listings, filters) => {
	if (!filters || filters.length === 0) {
		return listings;
	}

	const filtersSet = new Set(filters);

	return listings.filter((listing) =>
		listing.tags.reduce((exist, tag) => exist || filtersSet.has(tag), false)
	);
};
