import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const List = ({ primary, items = [], ...props }) => {
	const mode = primary
		? 'storybook-list--primary'
		: 'storybook-list--secondary';

	if (items.length == 0) {
		return null;
	}

	return (
		<ul
			type="list"
			className={`storybook-list storybook-list--${mode}`}
			{...props}
		>
			{items.map((item, i) => {
				return (
					<li key={i}>
						<h3>{item.title}</h3>
					</li>
				);
			})}
		</ul>
	);
};

List.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	items: PropTypes.array
};
