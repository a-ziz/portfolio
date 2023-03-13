import React from "react";
import "../App.css";

const Popup = (props) => {
  // enable scroll when pop up is closed
  const enableScroll = () => {
    document.body.style = "overflow: scroll";
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
            enableScroll();
          }}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
