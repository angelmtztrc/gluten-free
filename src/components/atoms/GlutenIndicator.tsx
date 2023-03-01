import { ExclamationTriangleIcon, FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { KIND } from 'src/enums/kind.enum';

import { cls } from '@/libs/cls.lib';

type GlutenIndicatorProps = {
  kind: KIND;
  className?: string;
};

const GlutenIndicator = ({ kind, className }: GlutenIndicatorProps) => {
  return (
    <div
      className={cls(
        className,
        kind === KIND.FREE && 'bg-secondary-500',
        kind === KIND.MAY_CONTAIN && 'bg-amber-500',
        kind === KIND.CONTAINS && 'bg-rose-500',
        'flex w-full items-center justify-center rounded-lg py-2'
      )}
    >
      {kind === KIND.FREE && <FaceSmileIcon className="h-6 w-6 text-white" />}
      {kind === KIND.MAY_CONTAIN && <ExclamationTriangleIcon className="h-6 w-6 text-white" />}
      {kind === KIND.CONTAINS && <FaceFrownIcon className="h-6 w-6 text-white" />}
    </div>
  );
};

export default GlutenIndicator;
