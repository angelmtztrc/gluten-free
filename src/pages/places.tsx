import { useMemo } from 'react';

import { useGetPlacesQuery } from '@/hooks';
import { DefaultLayout } from '@/layouts';
import { PlaceItem } from '@/molecules';
import { PlacesService } from '@/services';

const PlacesPage = () => {
  const { data } = useGetPlacesQuery();
  const records = useMemo(
    () => data?.pages.map(doc => PlacesService.transform(doc)).flat() || [],
    [data]
  );

  return (
    <DefaultLayout>
      <div className="pt-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-bold text-white">Places</h2>
          <p className="text-sm text-gray-900">{records.length} registered records</p>
        </div>
        {/* TODO: ADD SEARCH INPUT */}
        <p>Search Input Here</p>
        {records.length === 0 ? (
          <div className="mt-3">
            <p>No data</p>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {records.map(place => (
              <PlaceItem
                key={place.id}
                name={place.name}
                description={place.description}
                kind={place.kind}
              />
            ))}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PlacesPage;
