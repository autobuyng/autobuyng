import { useGetFavoriteVehicle } from '@/app/(buyer)/api/user';
import { useState, useEffect } from 'react';

export function useLikedVehicles() {
  const [likedVehicles, setLikedVehicles] = useState<Set<string>>(new Set());
  const { data: favoriteVehicle } = useGetFavoriteVehicle();

  useEffect(() => {
    if (favoriteVehicle) {
      const likedCars = new Set(favoriteVehicle.likedVehicles.map(({ _id }) => _id));
      setLikedVehicles(likedCars);
    }
  }, [favoriteVehicle]);

  return likedVehicles;
}
