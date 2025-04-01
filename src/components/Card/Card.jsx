// src/components/Card/Card.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Card.css"; 

const Card = ({ link, image, title }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="posts">
            <a href={link}>
              <img src={image} alt={title} loading="lazy" />
              <h3 className="title">{title}</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding prop validation for better error handling
Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
