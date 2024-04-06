import { RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/ScssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
		],
	};
	const scssLoader = buildScssLoader(isDev);

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|webp|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const fontLoader = {
		test: /\.(woff2|woff)$/i,
		exclude: /node_modules/,
		loader: 'url-loader',
		options: {
			publicPath: './fonts/',
			name: '../fonts/[name]/[ext]',
			limit: 1000,
		},
	};

	return [fileLoader, svgLoader, tsLoader, scssLoader, fontLoader];
}
