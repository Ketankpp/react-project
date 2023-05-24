import React, { useState } from "react";

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://picsum.photos/id/237/300/300"
  );
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isFullView, setFullView] = useState(true);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const handleImageChange = () => {
    const newImage = "https://picsum.photos/500/300?grayscale"; // Replace with the new image URL
    setCurrentImage(newImage);
  };

  const handleImageReset = () => {
    setCurrentImage("https://picsum.photos/seed/picsum/500/300"); // Reset the image to the original URL
  };

  const handleViewSwitch = () => {
    const newImage = isFullView
      ? "https://picsum.photos/seed/picsum/400/400"
      : "https://picsum.photos/seed/picsum/800/500";
    setCurrentImage(newImage);
    setFullView(!isFullView);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <div className="card">
            <img
              src={currentImage}
              alt="Selected Image"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <div className="text-center">
                <button className="btn btn-primary me-2" onClick={handleLike}>
                  Like ({likeCount})
                </button>
                <button className="btn btn-danger me-2" onClick={handleDislike}>
                  Dislike ({dislikeCount})
                </button>
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-secondary me-2"
                  onClick={handleImageChange}
                >
                  Change Image
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={handleImageReset}
                >
                  Reset Image
                </button>
                <button className="btn btn-info" onClick={handleViewSwitch}>
                  {isFullView ? "Switch to Small View" : "Switch to Full View"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
