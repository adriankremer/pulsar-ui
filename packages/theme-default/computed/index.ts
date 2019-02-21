
	interface Theme {
		name: string;
		colors: Colors;
	}

	interface Colors {
		[key: string]: {
			[key: number]: any;
		}
	};

	const theme: Theme = {
		name: 'blue',
		colors: {"main":{"100":"#f80000","200":"#f80000","300":"#f80000","400":"#f80000","500":"#D60000","600":"#b40000","700":"#b40000","800":"#b40000","900":"#b40000"}},
	};

	export default theme;
