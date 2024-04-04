import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Title } from 'shared/ui/Title/Title';
import BugButton from 'widgets/PageError/ui/BugButton';

const MainPage: React.FC = () => {
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint,
				impedit nesciunt. Necessitatibus cumque veniam natus suscipit. Accusantium libero dolores quidem
				voluptate tempora harum eos natus.
			</div>
			<Title size="m">Lorem</Title>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint,
				impedit nesciunt. Necessitatibus cumque veniam natus suscipit. Accusantium libero dolores quidem
				voluptate tempora harum eos natus.
			</div>
			<Title size="m">Lorem</Title>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint,
				impedit nesciunt. Necessitatibus cumque veniam natus suscipit. Accusantium libero dolores quidem
				voluptate tempora harum eos natus.
			</div>
		</div>
	);
};

export default MainPage;
