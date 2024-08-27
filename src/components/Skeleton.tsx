import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="max-w-container mx-auto px-5 py-10 sm:px-10 sm:py-10 lg:px-0 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="relative w-[500px] h-[calc(500px*3/2)] overflow-hidden bg-gray-800 rounded-lg">
          <div className="w-full h-full skeleton-loader" />
        </div>
        <div className="flex-grow">
          <div className="h-16 skeleton-loader mb-6" />
          <div className="h-56 skeleton-loader mb-4" />
          <div className="h-72 skeleton-loader mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
