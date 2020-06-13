import React from 'react';
import timeago from 'time-ago';

import '../styles/JobListing.css';
import { StyledJobListing } from './styles/StyledJobListing';
import DistinctFeatureTag from './DistinctFeatureTag';
import { DISTINCTIVE_FEATURE_FEATURED } from '../utils/utils';
import JobTag from './JobTag';

const JobListing = ({ listing, tagClickHandler }) => {
	const jobListingSecondayInfo = {
		postTime: timeago.ago(listing.postTime),
		jobType: listing.jobType,
		jobLocale: listing.jobLocale,
	};
	const jobListingSecondayInfoLength = Object.keys(jobListingSecondayInfo)
		.length;

	return (
		<StyledJobListing className="job-listing--container">
			<div className="job-listing--main-container">
				<div className="job-listing--company-logo-container">
					<img
						className="job-listing--company-logo-image"
						src={listing.companyLogoImageSrc}
						alt={listing.companyName}
					/>
				</div>

				<div className="job-listing--listing-container">
					<div className="job-listing--listing-info-container">
						<div className="job-listing--listing-info-row job-listing--listing-primary-info-row">
							<h3 className="job-listing--company-name">
								{listing.companyName}
							</h3>

							<div className="job-listing--listing-distinctive-features-container">
								{listing.distinctiveFeatures.map(
									(feature, index) => (
										<div
											key={index}
											className="job-listing--listing-distinctive-feature"
										>
											<DistinctFeatureTag
												title={feature}
												color="white"
												backgroundColor={
													feature ===
													DISTINCTIVE_FEATURE_FEATURED
														? 'hsl(180, 14%, 20%)'
														: 'hsl(180, 29%, 50%)'
												}
											/>
										</div>
									)
								)}
							</div>
						</div>

						<div className="job-listing--listing-info-row job-listing--listing-title-row">
							<h3 className="job-listing--job-title">
								{listing.jobTitle}
							</h3>
						</div>

						<div className="job-listing--listing-info-row job-listing--listing-secondary-info-row">
							{Object.keys(jobListingSecondayInfo).map(
								(keyName, index) => (
									<div
										key={keyName}
										className="job-listing--secondary-info-container"
									>
										<span className="job-listing--secondary-info-span">
											{jobListingSecondayInfo[keyName]}
										</span>
										{index <
											jobListingSecondayInfoLength -
												1 && (
											<span className="job-listing--secondary-info-span job-listing--secondary-info-span-dot">
												·
											</span>
										)}
									</div>
								)
							)}
						</div>
					</div>
					<div className="job-listing--listing-tags-container">
						{listing.tags.map((tag, index) => (
							<div
								key={index}
								className="job-listing--listing-tag-container"
							>
								<JobTag
									tag={tag}
									tagClickHandler={() => tagClickHandler(tag)}
								></JobTag>
							</div>
						))}
					</div>
				</div>
			</div>
		</StyledJobListing>
	);
};

export default JobListing;
