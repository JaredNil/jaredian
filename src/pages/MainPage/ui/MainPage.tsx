import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import BugButton from 'widgets/PageError/ui/BugButton';

const MainPage: React.FC = () => {
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			{/* <BugButton /> */}
			<Input value={value} onChange={onChange} placeholder="Введите текст" />
			Главная_титул
		</div>
	);
};

export default MainPage;
