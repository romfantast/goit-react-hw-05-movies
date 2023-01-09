import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
