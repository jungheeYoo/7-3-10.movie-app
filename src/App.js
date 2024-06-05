// 라우팅: 웹 애플리케이션에서 다른 페이지나 뷰로 사용자를 네비게이션하는 프로세스

import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

// path="/" 홈화면 가기
// 누군가 우리 웹사이트의 '/' url에 있다면, Home 컴포넌트를 보여줌
// react-router-dom의 컴포넌트를 가져다 씀
// 아래 컴포넌트들이 하는 일은 url을 바라봄
// url이 바뀌면 어떤 것을 보여줄지 결정함
// 즉, 유저가 '/movie' path에 있다면 Detail컴포넌트를 보여주라고 하면 됨
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/movie/:id',
      element: <Detail />,
    },
    {
      path: '/hello',
      element: <h1>Hello</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};

// 영화 리스트 API
// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

export default App;
