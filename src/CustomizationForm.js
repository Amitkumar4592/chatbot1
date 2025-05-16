import React from "react";
import { useForm } from "react-hook-form";

const buildOptions = ["lean", "reg", "athletic", "big"];

function CustomizationForm({ formRef, setUploadedImg, tshirtText, setTshirtText }) {
  const { register, setValue, watch } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      text1: tshirtText[0],
      text2: tshirtText[1],
      text3: tshirtText[2],
    },
  });

  // Watch form values
  const height = watch("height");
  const weight = watch("weight");
  const build = watch("build");

  // Handle image upload
  const handleImage = (e) => {
    const file = e.target.files?.[0] || e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setUploadedImg(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    handleImage(e);
  };

  // Handle text change
  const handleTextChange = (idx, val) => {
    const newText = [...tshirtText];
    newText[idx] = val.slice(0, 32); // Limit line length
    setTshirtText(newText);
  };

  // Default image for preview if none uploaded
  const previewImg = tshirtText.previewImg || null;
  const defaultImg = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500";

  return (
    <form className="customization-form" ref={formRef}>
      <div className="customization-form-title">Customize Your T-shirt</div>
      <div className="toggle-tip">Press <b>Alt + Q</b> to toggle 3D preview</div>
      <div className="input-group scroll-box">
        <label>Height</label>
        <input type="number" min="140" max="220" step="1" defaultValue={180}
          {...register("height")}
        />
        <label>cm</label>
      </div>
      <div className="input-group scroll-box">
        <label>Weight</label>
        <input type="number" min="40" max="160" step="1" defaultValue={80}
          {...register("weight")}
        />
        <label>kg</label>
      </div>
      <div className="input-group scroll-box">
        <label>Build</label>
        <select {...register("build")} defaultValue="athletic">
          {buildOptions.map((b) => (
            <option value={b} key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="image-upload-box"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          accept="image/*"
          id="upload-input"
          style={{ display: "none" }}
          onChange={handleImage}
        />
        <label htmlFor="upload-input" className="upload-label">
          <div className="upload-img-preview">
            {setUploadedImg && ( // Show preview image if uploaded
              <img
                src={typeof setUploadedImg === 'string' ? setUploadedImg : defaultImg}
                alt="preview"
                style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }}
              />
            )}
          </div>
          <span>Select File or Drop Here</span>
        </label>
        <div className="upload-note">10 MB maximum</div>
      </div>
      <div className="text-area-box">
        <label>Text to print (max 3 lines)</label>
        {[0, 1, 2].map((i) => (
          <div className="text-input-row" key={i}>
            <span className="text-input-label">Line {i + 1}</span>
            <input
              type="text"
              maxLength={32}
              value={tshirtText[i]}
              onChange={(e) => handleTextChange(i, e.target.value)}
              placeholder={`Max 32 chars`}
              className="tshirt-text-input"
            />
            <span style={{ color: '#7ee787', fontSize: '0.9rem', marginLeft: 4 }}>{tshirtText[i].length}/32</span>
          </div>
        ))}
      </div>
    </form>
  );
}

export default CustomizationForm;
