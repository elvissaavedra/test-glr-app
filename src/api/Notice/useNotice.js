import useSWR from 'swr';
import fetch from '../fetch';

function useNotice() {
	const { data, error } = useSWR(`https://run.mocky.io/v3/886c9ed0-d202-4203-b246-aa23b85306d4`, fetch);

	return {
		notice: data,
		isLoading: !error && !data,
		isError: error,
	};
}

export default useNotice;
