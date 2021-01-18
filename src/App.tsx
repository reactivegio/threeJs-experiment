import React, { useState } from "react";
import Nurse from "./components/nurse";
import Stacy from "./components/stacy";
import Prisoner from "./components/prisoner";
// import './App.css';

function App() {
  const [animationIdx, setAnimationIdx] = useState(0);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {animationIdx === 0 ?
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div
              style={{
                flex: "1 0 0",
                textAlign: "center",
                backgroundColor: "#002E2C",
                color: "#FFF",
                height: "100vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => { setAnimationIdx(1) }}
              >
                <div>Nurse</div>
              </div>
            </div>
            <div
              style={{
                flex: "1 0 0",
                backgroundColor: "#4D2D52",
                height: "100vh",
                color: "#FFF",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => { setAnimationIdx(2) }}
              >
                <div>Zombie Prisoner</div>
              </div>
            </div>
            <div
              style={{
                flex: "1 0 0",
                color: "#FFF",
                backgroundColor: "#035E7B",
                height: "100vh",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => { setAnimationIdx(3) }}
              >
                <div>Stacy</div>
              </div>
            </div>
          </div>
        </>
        :
        <>
          {animationIdx === 1 && <Nurse />}
          {animationIdx === 2 && <Prisoner />}
          {animationIdx === 3 && <Stacy />}
        </>
      }
    </div>
  );
}

export default App;
