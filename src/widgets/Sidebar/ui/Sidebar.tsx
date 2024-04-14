/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import { memo, useEffect } from 'react';

import { Book } from './Book';

import clsGlobal from '../../../app/styles/index.module.scss';

export const Sidebar: React.FC = memo(() => {
	useEffect(() => console.log('RENDER SIDEBAR_COMPONENT'));

	return (
		<div className={clsGlobal.sidebar}>
			<Book />
		</div>
	);
});
