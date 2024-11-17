import React from "react";
import startlogo from "../assets/SvgIcons/start.svg";
import newlogo from "../assets/SvgIcons/NEW.svg";
import slotslogo from "../assets/SvgIcons/slot-machine-casino-svgrepo-com.svg";
import livelogo from "../assets/SvgIcons/cas.svg";
import jackpotlogo from "../assets/SvgIcons/jackpots.svg";
import tablelogo from "../assets/SvgIcons/card.svg";
import bingologo from "../assets/SvgIcons/coins 1.svg";
import otherlogo from "../assets/SvgIcons/APP SQUARE.svg";
import "../styles/Categ.css";

const Categories = ({ activeCat, onCategoryChange }) => {
    return (
        <div className="category-container">
            <div
                className={`category ${activeCat === "start" ? "active" : ""}`}
                onClick={() => onCategoryChange("start")}
            >
                <img src={startlogo} alt="Start" />
                <p>START</p>
            </div>

            <div
                className={`category ${activeCat === "new" ? "active" : ""}`}
                onClick={() => onCategoryChange("new")}
            >
                <img src={newlogo} alt="New" />
                <p>NEW</p>
            </div>

            <div
                className={`category ${activeCat === "slots" ? "active" : ""}`}
                onClick={() => onCategoryChange("slots")}
            >
                <img src={slotslogo} alt="Slots" />
                <p>SLOTS</p>
            </div>

            <div
                className={`category ${activeCat === "live" ? "active" : ""}`}
                onClick={() => onCategoryChange("live")}
            >
                <img src={livelogo} alt="Live" />
                <p>LIVE</p>
            </div>

            <div
                className={`category ${activeCat === "jackpot" ? "active" : ""}`}
                onClick={() => onCategoryChange("jackpot")}
            >
                <img src={jackpotlogo} alt="Jackpot" />
                <p>JACKPOT</p>
            </div>

            <div
                className={`category ${activeCat === "table" ? "active" : ""}`}
                onClick={() => onCategoryChange("table")}
            >
                <img src={tablelogo} alt="Table" />
                <p>TABLE</p>
            </div>

            <div
                className={`category ${activeCat === "bingo" ? "active" : ""}`}
                onClick={() => onCategoryChange("bingo")}
            >
                <img src={bingologo} alt="Bingo" />
                <p>BINGO</p>
            </div>

            <div
                className={`category ${activeCat === "other" ? "active" : ""}`}
                onClick={() => onCategoryChange("other")}
            >
                <img src={otherlogo} alt="Other" />
                <p>OTHER</p>
            </div>
        </div>
    );
};

export default Categories;
