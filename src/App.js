import "./App.css";
// import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Notable from "./Components/Notable";
import Avalanch from "./Components/Avalanch";
import Browse from "./Components/Browse";
import Footer from "./Components/Footer";
// import Toyslider from "./Components/Toyslider";
import Table from "./Components/Table";
import Hot from "./Components/Hot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />

      <Trending />
      {/* <Table /> */}
      <Notable />
      <Avalanch />
      <Hot />
      {/*       <Toyslider /> */}
      <Browse />
      <Footer />
    </div>
  );
}

export default App;
