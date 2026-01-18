import Nav from "./components/common/nav/Nav";

function App() {
  // App is a parent of Nav, Landing, and Footer
  return (
    // only one tag can be returned (in this case, a simple wrapper tag)
    <>
      <Nav />
    </>
  );
};

export default App
