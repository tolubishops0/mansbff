import React, { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiBone } from "react-icons/bi";
import { FaDog } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./DashBoard.css";

function DashBoard() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return function cleanup() {
      clearInterval(time);
    };
  });

  return (
    <div>
      <div className="dashboard">
        <div className="time">
          {" "}
          <p>Today, {date.toLocaleTimeString()}</p>
        </div>
        <div className="dashboard-cont">
          <img
            src={require("../Assets/pitbul.png")}
            alt="pitbull"
            className="pitbull"
            width="480px"
            height="500px"
          />
          <div>
            <p className="notification">
              Notifications <AiOutlineBell />
            </p>
            <div className="not-cont">
              <div className="flex-icon-cont">
                <Link to="#">
                  <div className="icon-cont">
                    <BiBone
                      className="icon"
                      style={{ fontSize: "22px", background: "orange" }}
                    />
                    Fido is hungry and thirsty after a walk
                  </div>
                </Link>
                <Link to="#">
                  <div className="icon-cont">
                    <FaDog
                      className="icon"
                      style={{ fontSize: "22px", background: "red" }}
                    />
                    its time to take fido out for a walk today
                  </div>
                </Link>
                <Link to="#">
                  <div className="icon-cont">
                    <HiOutlineOfficeBuilding
                      className="icon"
                      style={{ fontSize: "22px", background: "blue" }}
                    />
                    Fido appointement with the vet today
                  </div>
                </Link>
              </div>
              <div>
                <img
                  src={require("../Assets/graph1.jpg")}
                  alt="graph-img"
                  className="graph-img"
                />
              </div>
              <div className="nutrition">
                <h4>Nutritions</h4>
                <div className="food-cont">
                  <div className="food">
                    <div>Proteins</div>
                    <div>
                      <BiBone color="green" />
                      <BiBone color="green" />
                      <BiBone />
                      <BiBone />
                    </div>
                  </div>
                  <div className="food">
                    <div>Vitamins</div>
                    <div>
                      <BiBone color="red" />
                      <BiBone color="red" />
                      <BiBone color="red" />
                      <BiBone />
                    </div>
                  </div>
                </div>

                <div className="food-cont">
                  <div className="food">
                    <div>Carbohydrates</div>
                    <div>
                      <BiBone color="yellow" />
                      <BiBone color="yellow" />
                      <BiBone color="yellow" />
                      <BiBone />
                    </div>
                  </div>
                  <div className="food">
                    <div>Fat</div>
                    <div>
                      <BiBone color="lightblue" />
                      <BiBone color="lightblue" />
                      <BiBone color="lightblue" />
                      <BiBone color="lightblue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
