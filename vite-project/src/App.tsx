import Footer from './components/common/footer/Footer.tsx';
import Landing from './components/common/rated-list/Landing.tsx'
import Nav from "./components/common/nav/Nav.tsx";

function App() {
  // App is a parent of Nav, Landing, and Footer.
  return (
    // Only one tag can be returned (in this case, a simple wrapper tag).
    <>
      <Nav/>
      <Landing/>
      <Footer/>
    </>
  );
};

export default App;