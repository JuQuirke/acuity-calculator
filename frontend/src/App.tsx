import { useState } from "react";
import { resolutions } from "@data/resolutions";

import "./App.css";
import { AcuityResultDisplay } from "@components/AcuityResultDisplay";

function App() {
  const [screenSize, setScreenSize] = useState(35);
  const [resolutionWidth, setResolutionWidth] = useState(3440);
  const [resolutionHeight, setResolutionHeight] = useState(1440);
  const [desiredPpd, setDesiredPpd] = useState(60);

  return (
    <>
      <h1>Monitor Acuity Calculator</h1>
      <p>Calculate minimum viewing distance for different monitor sizes and resolutions</p>
      <h2>Inputs</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="screenSize">Screen Size (inches)</label>
        <input value={screenSize} id="screenSize" type="number" onChange={(e) => setScreenSize(parseFloat(e.target.value))} />
        <label htmlFor="resolutionWidth">Width (pixels)</label>
        <input
          value={resolutionWidth}
          id="resolutionWidth"
          type="number"
          onChange={(e) => setResolutionWidth(parseFloat(e.target.value))}
        />
        <label htmlFor="resolutionHeight">Height (pixels)</label>
        <input
          value={resolutionHeight}
          id="resolutionHeight"
          type="number"
          onChange={(e) => setResolutionHeight(parseFloat(e.target.value))}
        />
        <label htmlFor="ppd">Desired Pixels per Degree</label>
        <input value={desiredPpd} id="ppd" type="number" onChange={(e) => setDesiredPpd(parseFloat(e.target.value))} />
      </div>
      <div>
        <h2>Results</h2>
        <AcuityResultDisplay
          screenSize={screenSize}
          desiredPpd={desiredPpd}
          resolution={{
            width: resolutionWidth,
            height: resolutionHeight,
          }}
        />
        <h2>Results for Common Resolutions</h2>
        {resolutions.map((resolution) => (
          <>
            <h3>{resolution.name}</h3>
            <AcuityResultDisplay screenSize={screenSize} resolution={resolution} desiredPpd={desiredPpd} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
