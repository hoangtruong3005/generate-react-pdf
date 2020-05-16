import React, { useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";

// import Movie from "./components/Movie";
import CVTemplate from "./components/CVTemplate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="preview-pdf">
          <PDFViewer
            style={{
              width: 800,
              height: "100vh",
            }}
          >
            <CVTemplate />
          </PDFViewer>
        </div>
        {/* <Movie /> */}
      </header>
    </div>
  );
}

export default App;
