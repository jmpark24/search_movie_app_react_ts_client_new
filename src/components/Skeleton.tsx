import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="max-w-container mx-auto my-0 px-5 py-10 sm:px-10 sm:py-10 lg:px-0 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
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
