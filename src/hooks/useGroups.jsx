import { useQuery } from '@tanstack/react-query';
import API from '../utils/API';

const searchGroup = async searchText => {
	const { data } = await API.get(`/groups/search?q=${searchText}`);

	if (!searchText || searchText.length < 2) return [];
	return data;
};

const useGroups = searchText => {
	const {
		data: groups,
		isLoading: groupsLoading,
		error: groupsError,
	} = useQuery({
		queryFn: () => searchGroup(searchText),
		queryKey: ['search', searchText],
		enabled: searchText.length > 1,
	});

	return {
		groups,
		groupsLoading,
		groupsError,
	};
};

export default useGroups;
