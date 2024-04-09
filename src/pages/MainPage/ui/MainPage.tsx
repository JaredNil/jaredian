import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Title } from 'shared/ui/Title/Title';
import BugButton from 'widgets/PageError/ui/BugButton';
import { useLocation, useParams } from 'react-router-dom';

const MainPage: React.FC = () => {
	const [value, setValue] = useState('');

	const location = useParams();
	console.log(location);
	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint, impedit nesciunt. Necessitatibus cumque veniam natus
				suscipit. Accusantium libero dolores quidem voluptate tempora harum eos natus.
			</div>
			<Title size="m">Lorem</Title>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint, impedit nesciunt. Necessitatibus cumque veniam natus
				suscipit. Accusantium libero dolores quidem voluptate tempora harum eos natus.
			</div>
			<Title size="m">Lorem</Title>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt nisi obcaecati neque sint, impedit nesciunt. Necessitatibus cumque veniam natus
				suscipit. Accusantium libero dolores quidem voluptate tempora harum eos natus.
			</div>
		</div>
	);
};

export default MainPage;
