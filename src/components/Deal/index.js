import React, { useState } from "react";
import DealControl from "./DealControl";
import "./index.css";

const receivedDeals = [
  {
    id: 89,
    deal_id: 122,
    sender_id: 57,
    receiver_id: 56,
    reply: "pass",
    updatedAt: "2022-01-24T08:58:15.000Z",
    forwards_since_creator: 1,
    company_id: 84715,
    name: "Sabir's personal tech blog",
    website: "https://blog.iamsabir.com",
    deal_creator_id: 57,
    deal_updatedAt: "2022-01-24T07:40:31.000Z",
    ownership: "25.00",
    price: "1000.00",
    privacy: "public",
    min_purchase: "20.00",
    shares_type: "primary-preferred",
    restrictions: "first-refusal",
    email: "asabir196@gmail.com",
    phone: "1521465986",
    fname: "Sharafat",
    lname: "Ahmed",
    blurb: null,
    other_side: "sender",
    can_share: true,
  },
  {
    id: 89,
    deal_id: 122,
    sender_id: 57,
    receiver_id: 56,
    reply: "pass",
    updatedAt: "2022-01-24T08:58:15.000Z",
    forwards_since_creator: 1,
    company_id: 84715,
    name: "Sabir's personal tech blog",
    website: "https://blog.iamsabir.com",
    deal_creator_id: 57,
    deal_updatedAt: "2022-01-24T07:40:31.000Z",
    ownership: "25.00",
    price: "1000.00",
    privacy: "public",
    min_purchase: "20.00",
    shares_type: "primary-preferred",
    restrictions: "first-refusal",
    email: "asabir196@gmail.com",
    phone: "1521465986",
    fname: "Sharafat",
    lname: "Ahmed",
    blurb: null,
    other_side: "sender",
    can_share: true,
  },
];

const sentDeals = [
  {
    id: 89,
    deal_id: 122,
    sender_id: 57,
    receiver_id: 56,
    reply: "engage",
    updatedAt: "2022-01-25T08:17:39.000Z",
    forwards_since_creator: 1,
    company_id: 84715,
    name: "Sabir's personal tech blog",
    website: "https://blog.iamsabir.com",
    deal_creator_id: 57,
    deal_updatedAt: "2022-01-24T07:40:31.000Z",
    ownership: "25.00",
    price: "1000.00",
    privacy: "public",
    min_purchase: "20.00",
    shares_type: "primary-preferred",
    restrictions: "first-refusal",
    email: "asabir24@gmail.com",
    phone: "",
    fname: "Sharafat",
    lname: "Ahmed",
    blurb: null,
    other_side: "receiver",
    can_share: true,
  },
  {
    id: 89,
    deal_id: 122,
    sender_id: 57,
    receiver_id: 56,
    reply: "engage",
    updatedAt: "2022-01-25T08:17:39.000Z",
    forwards_since_creator: 1,
    company_id: 84715,
    name: "Sabir's personal tech blog",
    website: "https://blog.iamsabir.com",
    deal_creator_id: 57,
    deal_updatedAt: "2022-01-24T07:40:31.000Z",
    ownership: "25.00",
    price: "1000.00",
    privacy: "public",
    min_purchase: "20.00",
    shares_type: "primary-preferred",
    restrictions: "first-refusal",
    email: "asabir24@gmail.com",
    phone: "",
    fname: "Sharafat",
    lname: "Ahmed",
    blurb: null,
    other_side: "receiver",
    can_share: true,
  },
];

function Index() {
  const [currentPage, setCurrentPage] = useState("received");
  const [filter, setFilter] = useState("");
  return (
    <div className="deals-page">
      <DealControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Index;
