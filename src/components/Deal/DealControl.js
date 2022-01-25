import React from "react";
import Container from "../Common/Container";
import "./DealControl.css";

function DealControl({ currentPage, setCurrentPage, filter, setFilter }) {
  return (
    <Container>
      <section className="deals-section">
        <div className="deals-title">
          <h2 className="title-text">Deals</h2>
        </div>
        <div className="button-group">
          <button
            className={`btn ${currentPage === "received" ? "btn-primary" : ""}`}
            onClick={() => setCurrentPage("received")}
          >
            Received
          </button>
          <button
            className={`btn btn-sent ${
              currentPage === "sent" ? "btn-primary" : ""
            }`}
            onClick={() => setCurrentPage("sent")}
          >
            Sent
          </button>
          <button
            className={`btn ${filter === "unread" ? "btn-primary" : ""}`}
            onClick={() => setFilter(filter === "unread" ? "" : "unread")}
          >
            Unread
          </button>
          <button
            className={`btn ${filter === "engage" ? "btn-primary" : ""}`}
            onClick={() => setFilter(filter === "engage" ? "" : "engage")}
          >
            Engaged
          </button>
          <button
            className={`btn ${filter === "pass" ? "btn-primary" : ""}`}
            onClick={() => setFilter(filter === "pass" ? "" : "pass")}
          >
            Passed
          </button>
        </div>
      </section>
    </Container>
  );
}

export default DealControl;
