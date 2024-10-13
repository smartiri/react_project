import "../cards/Cards.css";
import React, { useState, useEffect } from "react";
import data from "../projects.json";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";
export default function Cards() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(null);
  useEffect(() => {
    setItems(data);
  }, []);

  const handleClose = () => {
    setShowModal(null);
  };

  return (
    <>
      <h1>Projects</h1>
      <div id="project" class="project_section">
        {items.map((item) => (
          <div class="project" key={item.id}>
            <img src={item.image_path} alt={item.title} class="project_img" />
            <hr />
            <h2 class="project_title">{item.title}</h2>
            <button type="button" onClick={(e) => setShowModal(item.id)}>
              View More
            </button>
            {showModal === item.id && (
              <Modal
                id={item.id}
                name={item.name}
                title={item.title}
                image_path={item.image_path}
                description={item.description}
                handleClose={handleClose}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image_path: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};
