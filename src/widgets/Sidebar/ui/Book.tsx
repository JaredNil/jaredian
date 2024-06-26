import { MouseEvent, memo } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';

import { EssenceType } from 'entities/Library/model/types/library';

import { useBookAgent } from 'shared/lib/hooks/useBookAgent/useBookAgent';

import cls from './Sidebar.module.scss';

interface BookProps {
	className?: string;
}

export const Book: React.FC<BookProps> = memo(({ className }: BookProps) => {
	const { bookState, setNewBookState } = useBookAgent();

	const sidebarClickHandler = (e: MouseEvent<HTMLDivElement>) => {
		const id = (e.target as HTMLDivElement).dataset?.m;
		if (id) setNewBookState(id);
	};

	return (
		<div className={`${cls.book} ${className}`} onClick={sidebarClickHandler}>
			{bookState.map((ns) => (
				<div className={cls.namespace} key={ns.nsid}>
					<div data-m={`${ns.nsid}`} className={cls.namespace__title}>
						<span>{ns.namespace}</span>
					</div>
					<div className={cls.namespace__body}>
						{ns.essences.map((essence: EssenceType) => (
							<div className={cls.essence} key={essence.esid}>
								<div
									className={`${cls.essence__title} ${essence.meta ? cls.essence__title_open : ' '}`}
									data-m={`${ns.nsid}` + `${essence.esid}`}
								>
									<HiOutlineChevronRight size={18} />
									<span>{essence.essence}</span>
								</div>
								<div className={cls.essence__points}>
									{essence.points.map((point) => (
										<div
											data-m={`${ns.nsid}` + `${essence.esid}` + `${point.pid}`}
											className={`${cls.point} ${essence.meta ? cls.point__open : ' '}`}
											key={point.pid}
										>
											<span>{point.title}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
});
