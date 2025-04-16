import Navbar from "./components/Navbar";
//import Hero from "./components/Hero"; // Import the Hero section component
import Footer from "./components/Footer"; 

function App() {
  return (
    <div className="min-h-screen bg-[#ffffff]"> {/* Set background here to match gradient */}
      <Navbar />
      {/* <Hero /> */}
      
      <Footer />
    </div>
  );
}

export default App;
