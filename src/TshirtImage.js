import React from "react";

// Placeholder for 3D t-shirt component import
// import ThreeJsTshirt from "threejs-t-shirt";

const DEFAULT_IMG = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500";

function TshirtImage({ show3D, uploadedImg, tshirtText }) {
  // If 3D, render 3D t-shirt (placeholder for now)
  if (show3D) {
    return (
      <div className="tshirt-3d-view">
        {/* TODO: Integrate threejs-t-shirt here */}
        <div className="threejs-placeholder">3D T-shirt View</div>
        <div className="toggle-tip" style={{position:'absolute',bottom:20,left:0,right:0,margin:'auto',width:'fit-content'}}>Press <b>Alt + Q</b> to return</div>
      </div>
    );
  }

  // Otherwise, render static image with previewed text
  const imgSrc = uploadedImg ? uploadedImg : DEFAULT_IMG;
  return (
    <div className="tshirt-image-container">
      <img
        src={imgSrc}
        alt="T-shirt preview"
        className="tshirt-image"
        style={{ width: "100%", height: "auto", maxHeight: "90vh" }}
      />
      <div className="tshirt-text-overlay">
        {tshirtText.map((line, i) => (
          <div className="tshirt-text-line" key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default TshirtImage;
