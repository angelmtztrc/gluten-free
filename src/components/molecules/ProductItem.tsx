import { GlutenIndicator } from '@/atoms';
import { KIND } from '@/enums/kind.enum';

type ProductItemProps = {
  name: string;
  code: string;
  kind: KIND;
};

const ProductItem = ({ name, code, kind }: ProductItemProps) => {
  return (
    <li className="flex flex-col justify-between rounded-xl border border-dark-900 p-3">
      <div>
        <figure className="aspect-video rounded-lg bg-secondary-600" />
        <div className="mt-3">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-xs text-gray-900">{code}</p>
        </div>
      </div>
      <GlutenIndicator className="mt-3" kind={kind} />
    </li>
  );
};

export default ProductItem;
