export enum DataType {
	COMMON = 'common',
	NAMESPACE = 'namespace',
	ESSENCE = 'essence',
}

export interface LibrarySchema {
	dataType: DataType;
	data?: NamespaceType[];

	isLoadingData: boolean;
}

export type PointType = {
	title: string;
	pid: number;
	body?: string[];
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
