import React from "react";

const RenderImage = ({ imageSrc, imageAlt }) => {
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} style={{ height: "300px" }} />
    </div>
  );
};

export default RenderImage;
