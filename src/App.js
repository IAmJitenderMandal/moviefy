import React, { useState } from "react";
import "./app.css";

import requests from "./requests";

// custom component
import Sidebar from "./components/sidebar/Sidebar.component";
import Navigation from "./components/navigation/Navigation.component";
import Filter from "./components/filter/Filter.component";
import Pagination from "./components/pagination/Pagination.component";
import Results from "./components/results/Results.component";

export default function App() {
  const [SelectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <div className="layout">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Navigation />
          <Filter />
          <Results selectedOption={SelectedOption} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
