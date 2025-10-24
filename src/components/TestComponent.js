import React from "react";

const TestComponent = () => {
  return (
    <video title="time video" controls width="250">
      <source src="sample.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default TestComponent;
