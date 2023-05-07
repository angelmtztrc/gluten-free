import { useEffect, useState } from 'react';

import { toast } from 'sonner';

import { Dialog } from '@/atoms';
import { PlaceForm, ScannerStep, SelectionStep } from '@/molecules';
import { useDialogStore, useScanStore } from '@/store';

type AvailableSteps = 'selection' | 'scanner' | 'product-form' | 'place-form';
type AvailableItemTypes = '' | 'product' | 'place';

const CreateDialog = () => {
  const scannedData = useScanStore(state => state.data);
  const { title, description, isDialogOpen, setIsDialogOpen, setDialogTitleAndDescription } =
    useDialogStore(state => ({
      title: state.title,
      description: state.description,
      isDialogOpen: state.isOpen,
      setIsDialogOpen: state.setIsOpen,
      setDialogTitleAndDescription: state.setTitleAndDescription
    }));
  const [step, setStep] = useState<AvailableSteps>('selection');
  const [itemType, setItemType] = useState<AvailableItemTypes>('');

  useEffect(() => {
    if (scannedData !== null) {
      setStep('product-form');
    }
  }, [scannedData]);

  const handleHidden = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      setItemType('');
      setStep('selection');
      setDialogTitleAndDescription(
        'Add an item',
        'Please select the type of entity you want to create.'
      );
    }, 500);
  };

  const handleSelectType = (type: AvailableItemTypes) => {
    setItemType(type);
  };

  const handleNextStep = () => {
    if (itemType === '') {
      toast.error('Please choose the item category you wish to create.');
      return;
    }

    const nextStep = itemType === 'product' ? 'scanner' : 'place-form';
    setStep(nextStep);
  };

  return (
    <Dialog title={title} description={description} isOpen={isDialogOpen} onHidden={handleHidden}>
      {step === 'selection' && (
        <SelectionStep
          value={itemType}
          onChange={handleSelectType as (value: string) => void}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 'scanner' && <ScannerStep />}
      {step === 'product-form' && <p>Product Form</p>}
      {step === 'place-form' && <PlaceForm />}
    </Dialog>
  );
};

export default CreateDialog;
