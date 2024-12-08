import { useInfiniteQuery } from '@tanstack/react-query';

import { GET_PLACES_KEY } from '@/constants/query.constants';
import { PlacesService } from '@/services';
import { useUserStore } from '@/store';

const useGetPlacesQuery = () => {
  const user = useUserStore(state => state.user);

  return useInfiniteQuery({
    queryKey: [GET_PLACES_KEY],
    queryFn: ({ pageParam }) =>
      PlacesService.find({ userId: user?.uid as string, limitOf: 25, cursor: pageParam }),
    getNextPageParam: lastPage => {
      return lastPage;
    }
  });
};

export default useGetPlacesQuery;
