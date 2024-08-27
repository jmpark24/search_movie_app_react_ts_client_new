import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '../redux/store';
import Logo from '../assets/images/logo.png';

interface Menu {
  name: string;
  href: string;
}

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menus] = useState<Menu[]>([
    { name: 'Search', href: '/' },
    { name: 'Movie', href: '/movie/:id' }, // 기본 경로 설정
    { name: 'About', href: '/about' },
  ]);

  const [activeMenu, setActiveMenu] = useState<string>(location.pathname);

  const lastMovieId = useSelector((state: RootState) => state.movieDetails.movieDetails?.imdbID);

  useEffect(() => {
    // location이 변경될 때마다 activeMenu 업데이트
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (href: string) => {
    let targetHref = href;

    if (href === '/movie/:id') {
      // 마지막으로 클릭한 영화 ID가 존재하면 해당 ID로 이동
      if (lastMovieId) {
        targetHref = `/movie/${lastMovieId}`;
      } else {
        // 마지막 영화 ID가 없으면 기본 경로로 이동
        targetHref = href;
      }
    }

    navigate(targetHref);
  };

  const isActive = (href: string, currentPath: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    if (href === '/movie/:id') {
      return currentPath.startsWith('/movie');
    }
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-[9] bg-[rgba(14,17,27,0.9)] p-[20px_40px] flex items-end gap-[40px]">
      <a
        href="/"
        className="text-xl font-oswald text-color-white-50 no-underline"
        onClick={(e) => {
          e.preventDefault();
          handleMenuClick('/');
        }}
      >
        <span className="text-color-primary cursor-pointer">OMDbAPI</span>.COM
      </a>
      <nav className="hidden sm:flex">
        <ul className="flex gap-[14px]">
          {menus.map((menu) => {
            const active = isActive(menu.href, activeMenu);
            return (
              <li key={menu.name}>
                <a
                  className={`text-[14px] font-bold no-underline ${
                    active ? 'text-color-primary' : 'text-color-white-50'
                  }`}
                  href={menu.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(menu.href);
                  }}
                >
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <a
        href="/about"
        className="w-[50px] h-[50px] rounded-full bg-color-area cursor-pointer absolute top-0 bottom-0 right-[30px] my-auto transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault();
          handleMenuClick('/about');
        }}
      >
        <img
          src={Logo}
          alt="User"
          className="w-full h-full object-cover rounded-full border-color-primary border-2"
        />
      </a>
    </header>
  );
};

export default Header;
