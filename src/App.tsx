// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import backgroundVideo from "./assets/Strange.Space_LandingVideo_v02.mp4"; // Adjust path as needed

function App() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          padding: "0",
          margin: "0",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            position: "absolute",
            fontFamily: "futura",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "clamp(2rem, 10vw, 8rem)", // This is the responsive part

            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
            color: "white",
          }}
        >
          STRANGE &#10033; SPACE
          <div>
            <p
              style={{
                fontStyle: "italic",
                fontFamily: "serif",
                fontSize: "clamp(.5rem, 10vw, 1rem)", // This is the responsive part
              }}
            >
              <a
                href="mailto:hello@strange.space"
                style={{ textDecoration: "none", color: "white" }}
              >
                For Inquiries.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
