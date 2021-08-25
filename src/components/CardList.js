import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const CardComponent = robots.map((r) => (
    <Card id={r.id} name={r.name} email={r.email} key={r.id} />
  ));
  return <div>{CardComponent}</div>;
};

export default CardList;
