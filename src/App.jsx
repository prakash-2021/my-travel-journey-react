import React from "react";
import Header from "./component/Header";
import { Card } from "./component/Card";
import data from "./data.json";
export default function App() {
  const cards = data.map((item, index) => {
    return <Card key={index} {...item} />;
  });
  return (
    <>
      <Header />
      <section className="card-collection">{cards}</section>
    </>
  );
}
