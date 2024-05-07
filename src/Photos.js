import React from "react";
import "./Photos.css";

const Photos = (props) => {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row row-gap-3">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
