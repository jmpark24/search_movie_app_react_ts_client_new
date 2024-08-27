import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="max-w-container mx-auto my-0 px-5 py-10 sm:px-10 sm:py-10 lg:px-0 lg:py-10">
      <div className="flex gap-16 lg:gap-8 p-5">
        <div className="w-[500px] h-[calc(500px*3/2)] skeleton-loader" />
        <div className="flex-grow">
          <div className="h-12 skeleton-loader mb-8" />
          <div className="h-40 skeleton-loader mb-5" />
          <div className="h-[320px] skeleton-loader mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
