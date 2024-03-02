import React, { useState } from "react";
import Navbar from "../reusable/Navbar";
import Carousel from "react-grid-carousel";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import "./profile.css";

const ProfileContainer = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  return (
    <div className="feed-container">
      <Navbar />
      <div className="profile-container">
        <div className="profile-heading">
          <div className="profile-img">
            <img
              className="img"
              src="https://avatars.githubusercontent.com/u/78010526?s=400&u=4135c48f89d0dc0269f40f02a826ec12b84f9d92&v=4"
              alt=""
            />
            <div>
              {[...Array(5)].map((_, index) =>
                rating >= index + 1 ? (
                  <StarIcon
                    key={index}
                    className="star"
                    onClick={() => handleStarClick(index)}
                    style={{ cursor: "pointer", color: "orange" }}
                  />
                ) : (
                  <StarBorderIcon
                    key={index}
                    className="star"
                    onClick={() => handleStarClick(index)}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                )
              )}
            </div>
            <p className="ratings">4.8</p>
          </div>
          <div className="profile-details">
            <div className="profile-heading">
              <h2>Sourabh Kumar</h2>
              <p>
                <EditIcon sx={{ color: "blue" }} />
              </p>
            </div>

            <small>User / Cook</small>
            <p>
              Knows North Indian, Chinese, Italian, South Indian, Continental,
              Barbecue, Ghar ka Khaana, Beverages, Desserts, Soups, Salads,
              Thai, Japanese, Snacks, Arabic, Mexican, Authentic South Indian,
              Navratri, Breakfast, American
            </p>
            <div className="btn-containers">
              <button className="btn">12 years</button>
              <button className="btn">8000 /month</button>
              <button className="btn">Male</button>
              <button className="btn">North/south</button>
            </div>
          </div>
        </div>

        {/* ---------------Carousel---------------- */}
        <div className="carousel-container">
          <h2 className="heading">South Indian dishes by chef sourabh</h2>
          <small className="small-opacity">
            All pics are clicked during booking via mobiles
          </small>
        </div>
        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>

          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
        <div className="carousel-container">
          <h2 className="heading">North Indian dishes by chef sourabh</h2>
          <small className="small-opacity">
            All pics are clicked during booking via mobiles
          </small>
        </div>
        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>

          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileContainer;
