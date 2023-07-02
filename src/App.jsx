import Search from "./components/Search";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="m-b">
        <div className="h-b h-b-f">
          <h1>WELCOME TO AOT DICTIONARY</h1>
          <h3>Dictionary Definition and Example</h3>
        </div>
        <Search />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
