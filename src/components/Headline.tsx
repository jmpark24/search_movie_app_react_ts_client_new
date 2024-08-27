import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="mb-[40px]">
      <h1 className="text-headline-sm sm:text-headline-lg leading-[1] mb-[40px] font-oswald">
        <span className="text-color-primary">OMDb API</span>
        <br />
        THE OPEN
        <br />
        MOVIE DATABASE
      </h1>
      <p className="text-color-white-30">
        OMDb API는 영화 정보를 얻기 위한 RESTful 웹 서비스입니다.
        <br />
        해당 API를 활용한 영화 정보 검색을 위한 'React Web App' 입니다.
        <br />
        이 서비스는 현재 한글 검색을 지원하지 않습니다.
        <br />
        서비스를 정상적으로 이용하시려면 영문으로 영화 제목을 입력해주세요.
      </p>
    </div>
  );
};

export default Headline;
