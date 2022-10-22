import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import Homes from "./components/Homes";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <hr />
      <Header />
      <hr />
      <Filters />
      <Homes />
      <Maps />
      <Footer />
    </main>
  );
}

export default App;
