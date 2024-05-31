import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from '../content/Picture';
/**
 * Primary UI component for user interaction
 */
export const Card = ({ primary, item = null, ...props }) => {
	const mode = primary
		? 'storybook-card--primary'
		: 'storybook-card--secondary';

	if (item == null) {
		return null;
	}

	return (
		<div
			type="card"
			className={`storybook-card storybook-card--${mode}`}
			{...props}
		>
			<Picture />
			<div className="card-body">
				<div className="card-tag-wrapper"></div>

				<h3 className="card-title h2">{item.title}</h3>

				{item.description && (
					<p className="card-text mb-2">{item.description}</p>
				)}
			</div>
		</div>
	);
};

Card.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	item: PropTypes.object
};
