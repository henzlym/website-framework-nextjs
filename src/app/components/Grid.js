import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card';
/**
 * Primary UI component for user interaction
 */
export const Grid = ({ primary, items = [], ...props }) => {
	const mode = primary
		? 'storybook-grid--primary'
		: 'storybook-grid--secondary';

	if (items.length == 0) {
		return null;
	}

	return (
		<ul
			type="grid"
			className={`storybook-grid storybook-grid--${mode}`}
			{...props}
		>
			{items.map((item, i) => {
				return <Card key={i} item={item} />;
			})}
		</ul>
	);
};

Grid.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	items: PropTypes.array
};
