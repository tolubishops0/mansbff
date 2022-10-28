import React from "react";
import { Link } from "react-router-dom";
import { HiPhoneOutgoing, HiSearch } from "react-icons/hi";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-cont">
      <div className="home-cont">
      <form className="form" id="form">
        <input
          className="search-bar"
          type="search"
          id="query"
          name="q"
          placeholder="Search here..."
        ></input>
        <button className="search-icon">
          <HiSearch />
        </button>
      </form> 
      <div className="center-cont">
        <div className="para-cont">
          <h1>WOOF!!</h1>
          <p>
            loremIrure do do in et qui proident esse mollit irure duis.
            Reprehenderit quis non nisi elit ut aliquip. Eiusmod dolore velit
            nostrud occaecat nulla labore aute ut nisi officia. Laborum aliqua
            Reprehenderit quis non nisi elit ut aliquip. Eiusmod dolore velit
            nostrud occaecat nulla labore aute ut nisi officia. Laborum aliqua
            ullamco proident exercitation eu. Esse nulla nostrud dolore sit est
            sud nostrud id nostrud dolore occaecat nulla.
          </p>
          <button className="btn home-page">
            <Link to="/">
              <span>PROCEED</span>
            </Link>
          </button>
        </div>
      </div>
      <button className="btn-talk">
        <Link className="phone-icon">
          <p>Talk to a vet</p>
          <HiPhoneOutgoing className="phone" style={{ fontSize: "12px" }}/>
        </Link>
      </button>
    </div>
    </div>
  );
}

export default HomePage;
