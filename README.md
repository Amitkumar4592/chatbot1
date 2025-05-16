# POD T-shirt Customizer (React)

A React-based customization page for a Print-On-Demand t-shirt store. Features:
- User form for height, weight, build (with scroll/select controls)
- Upload or drag-and-drop image for t-shirt print
- 3-line text input for t-shirt print
- Animated 3D t-shirt preview (toggle with Alt+Q, placeholder for now)
- Styled with CSS only, no extra UI libraries
- Uses [react-hook-form](https://github.com/react-hook-form/react-hook-form) for form handling
- Integrate [threejs-t-shirt](https://github.com/Starklord17/threejs-t-shirt) for 3D preview (add to `TshirtImage.js`)

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```

## Folder Structure
- `src/App.js` — Main layout and logic
- `src/TshirtImage.js` — T-shirt image/3D preview
- `src/CustomizationForm.js` — Form controls and image upload
- `src/styles.css` — Custom CSS styles
- `public/index.html` — HTML entry point

## Notes
- To switch between static and 3D t-shirt preview, press **Alt+Q**.
- To integrate the 3D t-shirt, follow the [threejs-t-shirt](https://github.com/Starklord17/threejs-t-shirt) documentation and replace the placeholder in `TshirtImage.js`.
