
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import darshan from "../../assets/travel/darshan.png";
import packages from "../../assets/travel/packages.png";
import cab from "../../assets/travel/cabs.png";
import heritage from "../../assets/travel/haritages.png";
import pooja from "../../assets/travel/pooja.png";
import customTrip from "../../assets/travel/custom-trip.png";
import helpUs from "../../assets/travel/help-us.png";
import adventure from "../../assets/travel/adventure.png";

import "./TravelCategories.scss";

const categories = [
  {
    id: 1,
    title: "Darshan",
    images: darshan,
    path: "/darshan",
  },
  {
    id: 2,
    title: "Packages",
    images: packages,
    path: "/packages",
  },
  {
    id: 3,
    title: "Cabs",
    images: cab,
    path: "/cabs",
  },
  {
    id: 4,
    title: "Heritages",
    images: heritage,
    path: "/heritages",
  },
  {
    id: 5,
    title: "Pooja",
    images: pooja,
    url: "https://ujjaintirthyatra.com/pooja",
  },
  {
    id: 6,
    title: "Custom Trip",
    images: customTrip,
    url: "https://ujjaintirthyatra.com/custom-darshan-planner",
  },
  {
    id: 7,
    title: "Help Us",
    images: helpUs,
    path: "/about-us",
  },
  // {
  //   id: 8,
  //   title: "Adventure",
  //   images: adventure,
  //   path: "/adventure",
  // },
];

function TravelCategories() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryClick = (category) => {
    if (category.url) {
      window.open(category.url, "_blank", "noopener,noreferrer");
    } else if (category.path) {
      navigate(category.path);
    }
  };

  return (
    <section className="travel-categories">
      <div
        className={`travel-categories__container ${
          isExpanded ? "is-expanded" : ""
        }`}
      >
        <div className="travel-categories__grid">
          {categories.map((category) => (
            <div
              className="travel-categories__item"
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCategoryClick(category);
                }
              }}
            >
              <div className="travel-categories__icon">
                <img
                  src={category.images}
                  alt={category.title}
                  className="travel-categories__images"
                />
              </div>
              <div className="travel-categories__title">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="travel-categories__toggle"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? "Show less categories" : "Show more categories"}
          aria-expanded={isExpanded}
        >
          <span className="travel-categories__arrow"></span>
        </button>
      </div>
    </section>
  );
}

export default TravelCategories;
