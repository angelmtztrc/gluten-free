import { useEffect, useState } from 'react';

import { Dialog } from '@/atoms';
import { ScannerStep, SelectionStep } from '@/molecules';
import { useDialogStore, useScanStore } from '@/store';

type AvailableSteps = 'selection' | 'scanner' | 'product-form' | 'place-form';
type AvailableItemTypes = '' | 'product' | 'place';

const CreateDialog = () => {
  const scannedData = useScanStore(state => state.data);
  const { title, description, isDialogOpen, setIsDialogOpen } = useDialogStore(state => ({
    title: state.title,
    description: state.description,
    isDialogOpen: state.isOpen,
    setIsDialogOpen: state.setIsOpen
  }));
  const [step, setStep] = useState<AvailableSteps>('selection');
  const [itemType, setItemType] = useState<AvailableItemTypes>('');

  useEffect(() => {
    if (scannedData !== null) {
      setStep('product-form');
    }
  }, [scannedData]);

  const handleSelectType = (type: AvailableItemTypes) => {
    setItemType(type);
    setStep(type === 'product' ? 'scanner' : 'place-form');
  };

  return (
    <Dialog
      title={title}
      description={description}
      isOpen={isDialogOpen}
      handleChange={setIsDialogOpen}
    >
      {step === 'selection' && (
        <SelectionStep value={itemType} onChange={handleSelectType as (value: string) => void} />
      )}
      {step === 'scanner' && <ScannerStep />}
      {step === 'product-form' && <p>Product Form</p>}
      {step === 'place-form' && <p>Place Form</p>}
    </Dialog>
  );
};

export default CreateDialog;
