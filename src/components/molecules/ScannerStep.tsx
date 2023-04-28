import { useEffect } from 'react';

import { Scanner } from '@codesaursx/react-scanner';

import { useDialogStore, useScanStore } from '@/store';

const ScannerStep = () => {
  const setScanData = useScanStore(state => state.setData);
  const setDialogTitleAndDescription = useDialogStore(state => state.setTitleAndDescription);

  useEffect(() => {
    setDialogTitleAndDescription('Scan your product', 'Please scan the barcode of your product.');
  }, []);

  return (
    <div className="overflow-hidden rounded-lg">
      <Scanner
        width="100%"
        height="100%"
        onUpdate={(e, data) => {
          if (data) {
            setScanData(data.getText());
          }
        }}
      />
    </div>
  );
};

export default ScannerStep;
