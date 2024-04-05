import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "../../public/assets/community.jpg",
      title: "Community Development",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elitExcepturi qusit laudantium consectetur a officia voluptate culpa sed rem aliquid",
    },
    {
      id: 2,
      image: "../../public/assets/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elitExcepturi qusit laudantium consectetur a officia voluptate culpa sed rem aliquid",
    },
    {
      id: 3,
      image: "../../public//assets/impact.jpg",
      title: "Impact Measurment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elitExcepturi qusit laudantium consectetur a officia voluptate culpa sed rem aliquid",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>Qualities</h2>
        <div className="container">
          {qualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <div className="content">
                  <p className="title">{element.title}</p>
                  <p className="description">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
