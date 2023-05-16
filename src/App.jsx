import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./assets/Component/Nav";
import Card from "./assets/Component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="d-grid d-md-flex mt-5  justify-content-around">
        <Card
          name="Reach your Goals "
          style="bg-light mx-2  border-none card mt-3  text-dark"
          paragraph=" We are committed to helping smart and ambitious young African women live their best lives"
        />
        <Card
          name="Get Promoted "
          style="bg-light mx-2 card text-dark mt-3"
          paragraph=" We promote and uplift African talent by showcasing them to the world!"
        />
        <Card
          name="Grow your Network"
          style="bg-light mx-2 card text-dark  mt-3"
          paragraph=" We connect African women to each other through our ever-growing community"
        />
      </div>
      <h2 className="text-center mt-5 mb-4 fw-bold text-primary">Plug in!</h2>

      <div className="d-md-flex d-grid justify-content-between px-5">
        <div className="col-6 ">
          <img className="sideImg" src="\image\MMI.svg" alt="" />
        </div>
        <div className="">
          <h2 className="text-dark fw-bolder ">SLA Newsletters </h2>
          <p className="col-md-9 p1  col-12 ">
            Our newsletters give you access to exclusive resources, career
            opportunities and the motivation you need to help you achieve your
            goals
          </p>
          <div className="mx-auto d-none d-md-block">
            <button className="imagebtn btn btn-primary fw-bold ">
              SIGN UP HERE
            </button>
          </div>
        </div>
        <div className="mx-auto d-block d-md-none">
          <button className="imagebtn btn btn-primary fw-bold ">
            SIGN UP HERE
          </button>
        </div>
      </div>

      <div className="d-md-flex mt-5 d-grid justify-content-between px-5">
        <div className="col-6 d-md-none d-block ">
          <img className="sideImg" src="\image\HGCP.svg" alt="" />
        </div>

        <div className="d-block d-md-none mt-5">
          <h2 className="text-dark fw-bolder">High Growth Coaching Program </h2>
          <p className="col-md-9 p1  col-12 ">
            HGCP is a 3-month program designed to identify, support and fund the
            next generation of Nigeria’s brightest female entrepreneurs.
            Applications for the #HGCP2022 are now open!
          </p>
          <div className="mx-auto d-none d-md-block">
            <button className="imagebtn btn btn-primary fw-bold ">
              APPLY NOW
            </button>
          </div>
        </div>
        <div className="mx-auto d-block d-md-none">
          <button className="imagebtn btn btn-primary fw-bold ">
            APPLY NOW
          </button>
        </div>

        <div className="d-none d-md-block mt-5 ">
          <h2 className="text-dark fw-bolder d-none d-md-block ">
            High Growth Coaching Program{" "}
          </h2>
          <p className="col-md-9 p1  col-12 ">
            cccc HGCP is a 3-month program designed to identify, support and
            fund the next generation of Nigeria’s brightest female
            entrepreneurs. Applications for the #HGCP2022 are now open!
          </p>
          <div className="mx-auto d-none d-md-block">
            <button className="imagebtn btn btn-primary fw-bold ">
              APPLY NOW
            </button>
          </div>
        </div>
        <div className="col-6 d-none d-md-block ">
          <img className="sideImg" src="\image\HGCP.svg" alt="" />
        </div>
      </div>

      <div className="d-md-flex d-grid mt-5 justify-content-between px-5">
        <div className="col-6 ">
          <img className="sideImg" src="\image\slay-festival.svg" alt="" />
        </div>
        <div className="">
          <h2 className="text-dark fw-bolder ">SLAY Festival </h2>
          <p className="col-md-9 p1  col-12 ">
            SLAY Festival is a celebration of culture, innovation and business
            for African women. Learn from speakers, attend masterclasses, shop
            from women led businesses, have fun with your girls and meet other
            fab African women.
          </p>
          <div className="mx-auto d-none d-md-block">
            <button className="imagebtn btn btn-primary fw-bold ">
              JOIN THE PARTY
            </button>
          </div>
        </div>
        <div className="mx-auto d-block d-md-none">
          <button className="imagebtn btn btn-primary fw-bold ">
            JOIN THE PARTY
          </button>
        </div>
      </div>

      <div className="bg-light mt-5 border py-5">
        <h2 className="text-center mt-4 my-5 fw-bold text-primary">
          Upcoming Events
        </h2>
        <div
          style={{ height: "7pc" }}
          className="col-10 col-md-7 mx-auto shadow"
        ></div>
      </div>
      <div
        className="w-100 border lastcontainer"
      >
        <h2 className="fw-bolder text-center text-light col-12 col-md-6 mx-auto">
          {" "}
          Join SLA’s community of young, ambitious and vibrant women across
          Africa
        </h2>
        <h4 className="fw-bolder text-light text-center mt-2">
          {" "}
          Subscribe to our Newsletter
        </h4>
        <div className="d-flex gap-2 col-10 col-md-7 mt-5 mx-auto">
          <input
            style={{ fontFamily: "monospace" }}
            className="form-control "
            type="text"
            placeholder="Email Address"
          />
          <button className="btn btn-primary col-4 col-md-3 fw-bold">SUBSCRIBE</button>
        </div>
        <hr style={{ borderBottom: "2px solid white" }} />
        <div className="sideLogo ">
          <img className="mt-3"
            style={{ height: "5pc" }}
            src="\image\SLA_Logo__White.png"
            alt=""
          />
          <div className="lastInfo text-light mt-3">
            <div><b> She Leads Africa </b> <br /> <br /> Home <br /> About Us <br /> Contact Us <br />Careers <br /></div>
            <div><b>Resources </b> <br /> <br /> Advice <br /> Guide <br /> SLAY Festival</div>
            <div><b>Discover</b>  <br /> <br /> MMI <br /> SMB <br /> HGCP <br /> Contribute</div>
            <div><b>Support </b> <br/> <br /> Press <br /> Partner & Advertise With Us <br /> Privacy Policy</div>
          </div>
        </div>
            <h6 className="text-light mt-5 px-5 mx-5">josephay125d@gmail.com</h6>
      </div>
    </>
  );
}

export default App;
