import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Home from "./components/Home";

// ABIs
import RealEstate from "./abis/RealEstate.json";
import Escrow from "./abis/Escrow.json";

// Config
import config from "./config.json";

function App() {
  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <div className="cards__section">
        <h3>Welcome to Millow!</h3>
      </div>
    </div>
  );
}

export default App;
