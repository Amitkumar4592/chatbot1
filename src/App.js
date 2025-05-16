import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import TshirtImage from "./TshirtImage";
import CustomizationForm from "./CustomizationForm";
import NavBar from "./NavBar";
import "./styles.css";

function App() {
  const [show3D, setShow3D] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [tshirtText, setTshirtText] = useState(["", "", ""]);
  const formRef = useRef();

  // ALT+Q toggles 3D/static
  useEffect(() => {
    const handler = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setShow3D((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="left-panel">
          <TshirtImage
            show3D={show3D}
            uploadedImg={uploadedImg}
            tshirtText={tshirtText}
          />
        </div>
        <div className="right-panel">
          <CustomizationForm
            formRef={formRef}
            setUploadedImg={setUploadedImg}
            tshirtText={tshirtText}
            setTshirtText={setTshirtText}
          />
        </div>
      </div>
    </>
  );
}

export default App;
