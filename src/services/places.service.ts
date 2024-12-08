import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  startAfter,
  Timestamp,
  where
} from 'firebase/firestore';
import { PlaceFormProps } from 'src/hooks/usePlaceForm';

import { IPlace } from '@/interfaces/place.interface';
import { database } from '@/libs/firebase.lib';

interface CreatePlacePayload extends PlaceFormProps {
  userId: string;
}

interface FindPlacesPayload {
  userId: string;
  limitOf: number;
  cursor?: DocumentData;
}

class PlacesService {
  async create(payload: CreatePlacePayload): Promise<IPlace> {
    const docRef = await addDoc(collection(database, 'places'), {
      ...payload,
      createdAt: Timestamp.fromDate(new Date())
    });

    const snap = await getDoc(docRef);
    return { id: docRef.id, ...snap.data() } as IPlace;
  }

  async find({ userId, cursor, limitOf = 20 }: FindPlacesPayload) {
    let docsRef;

    if (cursor) {
      docsRef = query(
        collection(database, 'places'),
        orderBy('name'),
        where('userId', '==', userId),
        limit(limitOf),
        startAfter(cursor)
      );
    } else {
      docsRef = query(
        collection(database, 'places'),
        orderBy('createdAt'),
        where('userId', '==', userId),
        limit(limitOf)
      );
    }

    return getDocs(docsRef);
  }

  transform(payload: QuerySnapshot<DocumentData>): IPlace[] {
    const values: IPlace[] = [];

    payload.forEach(doc => {
      values.push({ id: doc.id, ...doc.data() } as IPlace);
    });

    return values;
  }
}

const service = new PlacesService();

export default service;
