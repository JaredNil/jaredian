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
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
	};

	return [fontLoader, fileLoader, svgLoader, tsLoader, scssLoader];
}
