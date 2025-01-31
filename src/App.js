import "./App.css";
import BodyContainer from "./components/body/descriptions/BodyContainer";
import RestaurantMap from "./components/body/map/RestaurantMap";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <RestaurantMap />
      <Footer />
    </div>
  );
}

export default App;
