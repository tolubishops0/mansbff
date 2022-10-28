import React from "react";
import "./LeaderBoard.css";
import { HiOutlineFire } from "react-icons/hi";

function LeaderBoard() {
  return (
    <div className="leaderboard-page">
      <div className="leaderboard">
        <h1>Dog Breeds LeaderBoard</h1>
        <h4>2022 Ranking </h4>
      </div>

      <div className="table">
        <table width="80%" height="100%">
          <tr height="50px">
            <th width="100px">Rank</th>
            <th width="100px"></th>
            <th width="200px">Breed</th>
            <th width="100px">Ml/hr</th>
            <th width="100px"></th>
          </tr>
          <tr height="80px">
            <td>1</td>
            <td className="rank-img">
              <img
                src={require("../Assets/greyhound.jpg")}
                alt="greyhound"
                width="60px"
                height="60px"
              />
            </td>
            <td>GreyHound</td>
            <td>48 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>2</td>
            <td className="rank-img">
              <img
                src={require("../Assets/saluki.jpg")}
                alt="saluki"
                width="60px"
                height="60px"
              />
            </td>
            <td>Saluki</td>
            <td>47 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>3</td>
            <td className="rank-img">
              <img
                src={require("../Assets/AfghanHound.jpg")}
                alt="afghanhound"
                className="rank-img"
                width="65px"
                height="60px"
              />
            </td>
            <td>Afghan Hound</td>
            <td>45 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>4</td>
            <td className="rank-img">
              <img
                src={require("../Assets/vizla.jpg")}
                alt="vizla"
                width="60px"
                height="60px"
              />
            </td>
            <td>Vizla</td>
            <td>44 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>5</td>
            <td className="rank-img">
              <img
                src={require("../Assets/Whippet.jpg")}
                alt="whippet"
                width="60px"
                height="60px"
              />
            </td>
            <td>Whippet</td>
            <td>42 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>6</td>
            <td className="rank-img">
              <img
                src={require("../Assets/JackRussellTerrier.jpg")}
                alt="JackRussellTerrier"
                width="60px"
                height="60px"
              />
            </td>
            <td>Jack Russell Terrier</td>
            <td>40 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>7</td>
            <td className="rank-img">
              <img
                src={require("../Assets/Dalmatian.jpg")}
                alt="Dalmatian"
                width="60px"
                height="60px"
              />
            </td>
            <td>Dalmatians</td>
            <td>38 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>8</td>
            <td className="rank-img">
              <img
                src={require("../Assets/Doberman.jpg")}
                alt="Doberman"
                width="60px"
                height="60px"
              />
            </td>
            <td>Doberman Pinscher</td>
            <td>35 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>9</td>
            <td className="rank-img">
              <img
                src={require("../Assets/Borzoi.jpg")}
                alt="Borzoi"
                width="60px"
                height="60px"
              />
            </td>
            <td>Borzoi</td>
            <td>33 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>10</td>
            <td className="rank-img">
              <img
                src={require("../Assets/Bordercollie.jpg")}
                alt="Bordercollie"
                width="60px"
                height="60px"
              />
            </td>
            <td>Border Collie</td>
            <td>30 mph</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
