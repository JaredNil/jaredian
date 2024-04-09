/* eslint-disable indent */
import { useState } from 'react';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';

import { defaultContent } from 'entities/Library/model/service/default';

import { successUploadToastr } from 'shared/config/toastr/toastr.config';

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
