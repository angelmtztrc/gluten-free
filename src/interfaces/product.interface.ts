import { KINDS } from '@/enums/kind.enum';

export interface IProduct {
  id: string;
  name: string;
  code: string;
  kind: KINDS;
}
