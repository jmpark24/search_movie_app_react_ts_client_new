import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div
      className="
    max-w-container 
    mx-auto 
    my-0 
    px-5
    py-10 
    sm:px-10
    sm:py-10 
    lg:px-0
    lg:py-10 
  "
    >
      <h1 className="text-7xl font-bold text-color-white-10 text-center">
        죄송합니다.
        <br />
        페이지를 찾을 수 없습니다.
      </h1>
    </div>
  );
};

export default NotFound;
