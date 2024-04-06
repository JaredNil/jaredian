/* eslint-disable jsx-a11y/media-has-caption */
import pedro from 'shared/assets/PEDRO_DONE.webm';
import cls from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={cls.Loader}>
			<div className={cls.square}>
				<div className={cls.video}>
					<video
						src={pedro}
						// width={200}
						// height={200}
						playsInline
						autoPlay
						muted
						loop
						// controls
					/>
				</div>
			</div>
		</div>
	);
};
