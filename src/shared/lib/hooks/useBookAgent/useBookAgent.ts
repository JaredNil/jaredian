/* eslint-disable indent */
import { useState } from 'react';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';
import { successUploadToastr } from 'shared/config/toastr/toastr.config';

export type PointType = {
	title: string;
	pid: number;
};

export type EssenceType = {
	essence: string;
	esid: number;
	points: PointType[];
	meta: boolean;
};

export type NamespaceType = {
	namespace: string;
	nsid: number;
	essences: EssenceType[];
};

const defaultContent: NamespaceType[] = [
	{
		namespace: 'WEB',
		nsid: 0,
		essences: [
			{
				essence: 'Теория',
				esid: 0,
				points: [
					{
						title: 'Реактивность',
						pid: 0,
					},
					{
						title: 'Функциональность',
						pid: 1,
					},
					{
						title: 'Динамичная подгрузка браузером',
						pid: 2,
					},
				],
				meta: false,
			},
			{
				essence: 'Практика. Со ссылками.',
				esid: 1,
				points: [
					{
						title: 'Codewars template',
						pid: 0,
					},
					{
						title: 'С собеседований',
						pid: 1,
					},
				],
				meta: true,
			},
			{
				essence: 'WebAPI. Conntection',
				esid: 2,
				points: [
					{
						title: 'REST',
						pid: 0,
					},
					{
						title: 'RPC',
						pid: 1,
					},
					{
						title: 'WebSockets',
						pid: 2,
					},
				],
				meta: false,
			},
		],
	},
	{
		namespace: 'React',
		nsid: 1,
		essences: [
			{
				essence: 'hooks',
				esid: 0,
				points: [
					{
						title: 'useSelector',
						pid: 0,
					},
					{
						title: 'useRef',
						pid: 1,
					},
					{
						title: 'useState',
						pid: 2,
					},
				],
				meta: true,
			},
			{
				essence: 'features',
				esid: 1,
				points: [
					{
						title: 'Dynamic chunk loading of SPA',
						pid: 0,
					},
					{
						title: 'Redux Toolkit',
						pid: 1,
					},
					{
						title: 'Cookie auth',
						pid: 2,
					},
				],
				meta: true,
			},
		],
	},
];

export const useBookAgent = () => {
	const [bookState, setBookState] = useState(() => defaultContent);

	const navigate = useNavigate();

	const setNewBookState = (path: string) => {
		console.log(path);

		const pathToChange = path.split('').map((e) => Number(e));

		const devInfoToastr = () => {
			toastr.info(`${path} NS ${pathToChange[0]} /ESS ${pathToChange[1]} /POINT ${pathToChange[2]}`, `Hash transit`, successUploadToastr);
		};

		switch (pathToChange.length) {
			case 1:
				devInfoToastr();
				break;
			case 2:
				setBookState((prevState) => {
					const newState = [...prevState];
					if (typeof newState[pathToChange[0]]?.essences[pathToChange[1]]?.meta === 'boolean') {
						newState[pathToChange[0]].essences[pathToChange[1]].meta = !newState[pathToChange[0]].essences[pathToChange[1]].meta;
					}
					return newState;
				});
				break;
			case 3:
				devInfoToastr();
				navigate(`/#${path}`);
				break;
			default:
				console.warn('СТРАННОЕ ПОВЕДЕНИЕ', pathToChange, ' не проходит через пайплайн');
				break;
		}
	};

	return { bookState, setNewBookState };
};
