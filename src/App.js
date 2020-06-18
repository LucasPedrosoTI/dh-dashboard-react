import React from "react";
import { FiClipboard, FiDollarSign, FiUserCheck } from "react-icons/fi";
import "./App.css";

import Navbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import InfoContainer from "./components/InfoContainer";
import LastProduct from "./components/LastProduct";
import CategoryCard from "./components/CategoryCard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Navbar title="Walter White" />
        <div className="main_container">
          <h2>App Dashboard</h2>
          <div className="cards_container">
            <SummaryCard
              title="products in data base"
              info="135"
              icon={<FiClipboard />}
              cardColor="blue"
            />
            <SummaryCard
              title="amount in products"
              info="$546.456"
              icon={<FiDollarSign />}
              cardColor="green"
            />
            <SummaryCard
              title="users quantity"
              info="38"
              icon={<FiUserCheck />}
              cardColor="yellow"
            />
          </div>
          <div className="lstproduct_category_container">
            <InfoContainer title="Last product in data base">
              <LastProduct />
            </InfoContainer>
            <InfoContainer title="Categories in Data Base">
              <CategoryCard num="01" />
              <CategoryCard num="02" />
              <CategoryCard num="03" />
              <CategoryCard num="04" />
              <CategoryCard num="05" />
              <CategoryCard num="06" />
            </InfoContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
