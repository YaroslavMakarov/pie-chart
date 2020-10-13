import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PieChart from "./components/PieChart/PieChart";

function App() {
    const [pieChunks, addPieChunk] = useState<Chunk[]>([]);

  return (
    <div className="App">
      <Header />
      <Switch>
          <Route
              path="/"
              exact
              render={
                  () =>
                      <HomePage
                          pieChunks={pieChunks}
                          addPieChunk={addPieChunk}
                      />
              }
          />
          <Route
              path="/pieChart"
              exact
              render={
                  () =>
                      <PieChart
                          pieChunks={pieChunks}
                      />
              }
          />
      </Switch>
    </div>
  );
}

export default App;
