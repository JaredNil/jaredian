import React from 'react';

import { useSelector } from 'react-redux';
import { getCurrentLibraryState } from 'entities/Library';
import cls from '../MainPage.module.scss';

export const LibraryCommon: React.FC = () => {
	const libraryCurrent = useSelector(getCurrentLibraryState);

	if (!libraryCurrent) {
		return <div>Ошибка загрузки данных. Библиотека пуста</div>;
	}
	return (
		<>
			{libraryCurrent.map((ns) => {
				return (
					<div className={cls.namespace} key={ns.nsid}>
						<div className={cls.namespace__title}>{ns.namespace} - NAMESPACE</div>
						<div className={cls.namespace__body}>
							{ns.essences.map((essence) => (
								<div className={cls.essence} key={essence.esid}>
									<div className={cls.essence__title}>{essence.essence}</div>
									<div className={cls.essence__points}>
										{essence.points.map((point) => (
											<div className={cls.point} key={point.pid}>
												<div className={cls.point__title}>{point.title}</div>
												{point.body && (
													<div className={cls.article}>
														{point.body.map((line, id) => (
															<div
																className={
																	cls.article__line
																}
															>
																<span>
																	{
																		id
																	}
																</span>
																{line}
															</div>
														))}
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</>
	);
};
