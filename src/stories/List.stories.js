import { fn } from '@storybook/test';
import { List } from '../app/components/List';
// import posts from '../app/posts.config';

const url = 'http://wordpress.framework.test/wp-json/wp/v2/posts?_embed=true';
const response = await fetch(url);
const data = await response.json();
const posts = _.reduce(
	data,
	function (result, value, key) {
		result[key] = {
			title: _.get(value, 'title.rendered'),
			description: _.get(value, 'excerpt.rendered', ''),
			author: _.get(value, '_embedded.author.name', null),
			categories: _.get(value, 'wp:term.0.name', '')
		};
		// console.log(result);
		return result;
	},
	[]
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Component/List',
	component: List,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' }
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: 'List',
		items: posts
	}
};

export const Secondary = {
	args: {
		label: 'List'
	}
};

export const Large = {
	args: {
		size: 'large',
		label: 'List'
	}
};

export const Small = {
	args: {
		size: 'small',
		label: 'List'
	}
};
