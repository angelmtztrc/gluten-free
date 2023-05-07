import { addDoc, collection, getDoc, Timestamp } from 'firebase/firestore';
import { PlaceFormProps } from 'src/hooks/usePlaceForm';

import { IPlace } from '@/interfaces/place.interface';
import { database } from '@/libs/firebase.lib';

class PlacesService {
  async create(payload: PlaceFormProps): Promise<IPlace> {
    const docRef = await addDoc(collection(database, 'places'), {
      ...payload,
      createdAt: Timestamp.fromDate(new Date())
    });

    const snap = await getDoc(docRef);
    return { id: docRef.id, ...snap.data() } as IPlace;
  }
}

const service = new PlacesService();

export default service;
