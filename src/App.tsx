import { Routes, Route } from "react-router-dom";

import "./App.css"
import { Layout } from "./components/common/layout/Layout";
import Landing from './components/common/rated-list/Landing'

import { ArticlesProvider } from './components/pages/ArticlesContext';
import Popular from "./components/pages/Popular"
import Recent from "./components/pages/Recent";
import UserProfile from "./components/pages/UserProfile";

function App() {
  // App is a parent of Nav, Landing, and Footer.
  return (
     <ArticlesProvider>
      <Routes>
          {/* The root path renders <Layout>. That component contains an <Outlet>
          which will render the elements of their child routes. */}
          <Route path="/" element={<Layout />}>

            {/* 
              Renders the different pages in the Layout. 
              index: indicates route at the root of this path (/)
            */}
            <Route index element={<Landing/>} />

            <Route path="/popular">
                <Route index element={<Popular />} />
            </Route>

            <Route path="/recent"> 
              <Route  element={<Recent/>} />
            </Route>

            <Route path="/userprofile"> 
              <Route  element={<UserProfile/>} />
            </Route>

          </Route>
        </Routes>
       </ArticlesProvider>
  );
};

export default App;