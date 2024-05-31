const imageSizes = {
	thumbnail: {
		name: 'thumbnail',
		width: 360,
		height: 252,
		crop: true
	},
	small: {
		name: 'small',
		width: 540,
		height: 378,
		crop: true
	},
	medium: {
		name: 'medium',
		width: 720,
		height: 504,
		crop: true
	},
	medium_large: {
		name: 'medium_large',
		width: 960,
		height: 671,
		crop: true
	},
	large: {
		name: 'large',
		width: 1024,
		height: 716,
		crop: true
	},
	full: {
		name: 'full',
		width: '100%',
		height: 0,
		crop: true
	},
	'post-thumbnail': {
		name: 'post-thumbnail',
		width: 960,
		height: 671,
		crop: true
	},
	avatar: {
		name: 'avatar',
		width: 96,
		height: 96,
		crop: true
	}
};

export const Picture = ({
	alt = '',
	src = 'placeholder',
	loading = 'lazy',
	size = 'medium',
	sources = {
		'1024px': imageSizes['large'],
		'960px': imageSizes['medium_large'],
		'720px': imageSizes['medium'],
		'540px': imageSizes['small'],
		'360px': imageSizes['thumbnail']
	},
	path = 'images',
	classes = '',
	id = Math.floor(Math.random() * 5)
}) => {
	const img = {
		width: imageSizes[size].width,
		height: imageSizes[size].height
	};

	let thumbnailId = id;

	if (src === 'placeholder') {
		src = `${path}/mock/${size}/gradient-${thumbnailId}-${img.width}x${img.height}.jpg`;
	} else {
		src = `${path}/${src || 'placeholder'}`;
	}

	return (
		<picture className="picture">
			{sources !== null && Object.entries(sources).map(
				([key, source]) =>
					source.width <= img.width && (
						<source
							key={key}
							media={`(min-width: ${key})`}
							srcSet={`${path}/mock/${source.name}/gradient-${thumbnailId}-${source.width}x${source.height}.jpg`}
							width={source.width}
							height={source.height}
						/>
					)
			)}
			<img
				alt={alt}
				className={classes}
				src={src}
				loading={loading}
				width={img.width}
				height={img.height}
			/>
		</picture>
	);
};
