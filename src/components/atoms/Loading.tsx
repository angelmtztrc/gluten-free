import { Waveform } from '@uiball/loaders';

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-darken-900">
      <Waveform color="#fff" />
      <p className="mt-2 text-gray-900">Loading...</p>
    </div>
  );
};

export default Loading;
