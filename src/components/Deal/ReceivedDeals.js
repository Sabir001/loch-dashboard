import React from "react";
import Container from "../Common/Container";
import DealCard from "./DealCard";
import "./Deals.css";

function ReceivedDeals({ filter, deals }) {
  const filteredDeals = deals.filter(
    (deal) => filter === "" || filter === deal.reply
  );
  return (
    <Container>
      <section className="deals-section">
        <div className="deal-title">
          <h3>
            {filteredDeals.length
              ? "Click a deal to expand"
              : "Nothing to show"}
          </h3>
        </div>
        <div className="deal-cards">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default ReceivedDeals;
