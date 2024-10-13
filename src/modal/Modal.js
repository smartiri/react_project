import React from "react";
import "../modal/Modal.css";

export default function Modal({
  id,
  title,
  description,
  image_path,
  handleClose,
}) {    
  return (
    <div id="modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" onClick={() => handleClose()}>
            &times;
          </span>
          <h2 id="modal_title">{title}</h2>
        </div>
        <div class="modal-body">
          <img src={image_path} alt={title} class="project_img" />

          <p id="modal_body">{description}</p>
        </div>
        <div class="modal-footer">
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
