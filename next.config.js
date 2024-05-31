/** @type {import('next').NextConfig} */
const path = require('path');
const env = process.env.NODE_ENV || 'development';

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/app/scss')]
	}
};

module.exports = nextConfig;
