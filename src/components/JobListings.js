import React from 'react';

import JobListing from './JobListing';
import '../styles/JobListings.css';
import JobFiltersBox from './JobFiltersBox';
import { getFilteredListings } from '../utils/utils';

class JobListings extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listings: props.listings,
			tagFiltersApplied: [],
		};
	}

	addFilter(tagFilter) {
		this.setState((prevState) => {
			const currentFilters = prevState.tagFiltersApplied;

			if (!currentFilters.includes(tagFilter)) {
				return {
					tagFiltersApplied: [...currentFilters, tagFilter],
				};
			} else {
				return {
					tagFiltersApplied: currentFilters,
				};
			}
		});
	}

	removeFilter(tagFilter) {
		// const newFilters = this.state.tagFiltersApplied.filter(
		// 	(tag) => tag !== tagFilter
		// );

		// console.log('Remove', tagFilter);
		// console.log('newFilters', newFilters);

		this.setState((prevState) => ({
			tagFiltersApplied: prevState.tagFiltersApplied.filter(
				(tag) => tag !== tagFilter
			),
		}));
	}

	clearFilters() {
		this.setState(() => ({
			tagFiltersApplied: [],
		}));
	}

	render() {
		const { listings, tagFiltersApplied } = this.state;

		const filteredListings = getFilteredListings(
			listings,
			tagFiltersApplied
		);

		let filtersDiv = null;

		if (tagFiltersApplied && tagFiltersApplied.length > 0) {
			filtersDiv = (
				<div className="job-listings--tag-filters-box-container">
					<JobFiltersBox
						tagFiltersApplied={tagFiltersApplied}
						clearFiltersHandler={() => this.clearFilters()}
						removeFilterHandler={(filter) =>
							this.removeFilter(filter)
						}
					/>
				</div>
			);
		}

		return (
			<div className="job-listings--container">
				<div className="job-listings--main-container container">
					{filtersDiv}

					<div className="job-listings--listings-container">
						{filteredListings.map((listing) => (
							<JobListing
								key={listing.id}
								listing={listing}
								tagClickHandler={(filter) =>
									this.addFilter(filter)
								}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default JobListings;
