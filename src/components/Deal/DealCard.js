import React, { useState } from "react";
import Container from "../Common/Container";
import "./DealCard.css";

function DealCard({
  reply,
  updatedAt,
  name,
  ownership,
  price,
  privacy,
  min_purchase: minPurchase,
  shares_type: sharesType,
  restrictions,
  email,
  phone,
  fname,
  lname,
  can_share: canShare,
}) {
  const [collapse, setCollapse] = useState(true);
  const updatedDate = new Date(updatedAt);
  return (
    <Container>
      <div
        className="deal-card-box"
        onClick={() => setCollapse((prev) => !prev)}
      >
        <div className="deal-card-header">
          <span>
            From {fname} {lname} |{" "}
          </span>
          <span>{updatedDate.toLocaleDateString("en-US")} | </span>
          <span>{canShare ? " Public" : " Private"}</span>
          <span className="deal-card-pull-right">
            {reply === "pass"
              ? "Passed"
              : reply === "engage"
              ? "Engaged"
              : "Unread"}
          </span>
        </div>
        <div className="deal-card-body">
          <div className="deal-card-name">{name}</div>
          {!collapse && (
            <div className="deal-card-collapsed-body">
              <div className="deal-card-collapsed-body-parts">
                <span>${price} per share</span>
                <span>${minPurchase} (minimum)</span>
                <span>{sharesType}</span>
              </div>
              <div className="deal-card-collapsed-body-parts">
                <span>{ownership}% offered</span>
                <span>{restrictions}</span>
              </div>
            </div>
          )}
        </div>
        <div className="deal-card-footer">
          <button className="pass-button">Pass</button>
          <button className="engage-button">Engage</button>
        </div>
      </div>
    </Container>
  );
}

export default DealCard;
