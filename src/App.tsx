import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

const OutletComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OutletComponent />}>
            <Route index element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
