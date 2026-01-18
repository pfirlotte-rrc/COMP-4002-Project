import { Footer } from './components/footer/Footer.tsx';
import Landing from './components/rated-list/Landing'
import Nav from "./components/common/nav/Nav";

function App() {
  // App is a parent of Nav, Landing, and Footer
  return (
    // only one tag can be returned (in this case, a simple wrapper tag)
    <>
      <Nav />
      <Landing/>
      <Footer></Footer>
    </>
  );
};

export default App;