import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = [

      // feature section

      {
        feature: "Online Booking",
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05f6b4de049dc46db4_f1.png",
      },
      {
        feature: "Save Money",
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a057368f71163fdadf7_f3.png",
      },
      {
        feature: "Best Services",
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05a35a1ad891c8e985_f5.png",
      },
      {
        feature: "24/7 Support",
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05ed126fd09deb2309_f6.png",
      },

      //offer section

      {
        offer: "Today's Deal",
        off:
          "Upto 20% Off",
        img_off: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png",
      },
      {
        offer: "Today's Deal",
        off:
          "Upto 20% Off",
        img_off: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05cb6df16918640141_bike.png",
      },

      //customer review

      {
        name: "Customer Name",
        about:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, blanditiis asperiores quidem optio explicabo quo ullam enim ipsum nulla iste quisquam commodi maiores dignissimos deserunt dolores obcaecati possimus pariatur. Doloremque!",
        img_cus: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a0cd89be2a99f754e14_customer.png",
      },
      {
        name: "Another Customer",
        about:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, blanditiis asperiores quidem optio explicabo quo ullam enim ipsum nulla iste quisquam commodi maiores dignissimos deserunt dolores obcaecati possimus pariatur. Doloremque!",
        img_cus: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a0cd89be2a99f754e14_customer.png",
      },
    ];
    setData(initialData);
  }, []);

  return (
    <div>
      {/* Features */}
      <div className="fe-h1">
        <h1 className="Our">Our</h1>
        <h1>Feature</h1>
      </div>
      <div className="feature">
        {data.slice(0, 4).map((item, index) => (
          <div className="fe-box" key={index}>
            <img src={item.img} alt={item.feature} />
            <h6>{item.feature}</h6>
          </div>
        ))}
      </div>

      {/* Today's Deals */}
      <div className="fe-h1">
        <h1 className="Our">Today's</h1>
        <h1>Deal</h1>
      </div>
      <div className="box-container">
        {data.slice(4, 6).map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img_off} height="200px" alt="" />
            <h3>{item.offer}</h3>
            <p>{item.off}</p>
            <a href="#">
              <button className="btn">Read More</button>
            </a>
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="fe-h1">
        <h1 className="Our">Customer</h1>
        <h1>Reviews</h1>
      </div>
      <div className="box-container">
        {data.slice(6).map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img_cus} width="300px" alt="" />
            <h3>{item.name}</h3>
            <p>{item.about}</p>
            <a href="#">
              <button className="btn">Read More</button>
            </a>
          </div>
        ))}

      </div>
    </div>
  );
};

export default About;
