import { KIND } from '@/enums/kind.enum';

export interface IPlace {
  id: string;
  name: string;
  description: string;
  kind: KIND;
  createdAt: Date;
}
