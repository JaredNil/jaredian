import { NamespaceType } from '../types/library';

const defaultBody = () => [
	...[
		"Основной заголовок point'a",
		'---------------------------------',
		`Most developers experience when they put their hands on a new library`,
		`and try some exploring methods or hacking a prototype or tutorial.  like that of image placeholders mostly needed by web developers.`,
		`Hence, to test out new libraries and frameworks, they need some data for testing or exploring the aspects. `,
		`They also refrain from the idea of using some API that is public because it usually takes more time to register a client`,
		`and understand how things work in such a complex API rather than having to focus on the task he needs to do.`,
		`In all such instances, there arises a need for some data that is available to be tested and can be faked using the REST API.`,
		`This is the main reason why most developers use JSON Placeholder to gain insights. This is where the Placeholder comes in handy`,
		'---------------------------------',
	],
];

export const defaultContent: NamespaceType[] = [
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
						body: defaultBody(),
					},
					{
						title: 'Функциональность',
						pid: 1,
						body: defaultBody(),
					},
					{
						title: 'Динамичная подгрузка браузером',
						pid: 2,
						body: defaultBody(),
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
						body: defaultBody(),
					},
					{
						title: 'С собеседований',
						pid: 1,
						body: defaultBody(),
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
						body: defaultBody(),
					},
					{
						title: 'RPC',
						pid: 1,
						body: defaultBody(),
					},
					{
						title: 'WebSockets',
						pid: 2,
						body: defaultBody(),
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
						body: defaultBody(),
					},
					{
						title: 'useRef',
						pid: 1,
						body: defaultBody(),
					},
					{
						title: 'useState',
						pid: 2,
						body: defaultBody(),
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
						body: defaultBody(),
					},
					{
						title: 'Redux Toolkit',
						pid: 1,
						body: defaultBody(),
					},
					{
						title: 'Cookie auth',
						pid: 2,
						body: defaultBody(),
					},
				],
				meta: true,
			},
		],
	},
];
