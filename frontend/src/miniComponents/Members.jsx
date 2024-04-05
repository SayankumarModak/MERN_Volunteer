import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "../../public/assets/m1.jpg",
      title: "Soruin",
    },
    {
      id: 2,
      image: "../../public/assets/m2.jpg",
      title: "Subhrajyit",
    },
    {
      id: 3,
      image: "../../public//assets/m3.jpg",
      title: "Aritra",
    },
    {
      id: 4,
      image: "../../public/assets/m4.jpg",
      title: "Suresh",
    },
    {
      id: 5,
      image: "../../public/assets/m5.jpg",
      title: "Sayan",
    },
    {
      id: 6,
      image: "../../public/assets/m6.jpg",
      title: "somnath",
    },
    {
      id: 7,
      image: "../../public/assets/m7.jpg",
      title: "Subhajit",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="conatiner">
          <div className="header_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
              aut fugit eveniet amet debitis vero. Pariatur officia deserunt
              libero?
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
