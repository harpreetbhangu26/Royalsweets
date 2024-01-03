import React from "react";
import Balushai from "../Royalsweets2/Balushai.jpg";
import PlainBrfi from "../Royalsweets2/PlainBrfi.jpg";
import AnjirBrfi from "../Royalsweets2/AnjirBrifi.jpg";
import badambrfi from "../Royalsweets2/badambrfi.jpg";
import MotichoorLadoo from "../Royalsweets2/Motichoorladdo.jpg";

export default function Home() {
  const images = [
    {
      id: 1,
      link: Balushai,
      title: "Balushai",
      price: "£.../KG",
    },
    {
      id: 2,
      link: PlainBrfi,
      title: "Plain Brfi",
      price: "£.../KG",
    },
    {
      id: 3,
      link: MotichoorLadoo,
      title: "Motichoor Ladoo",
      price: "£.../KG",
    },
    {
      id: 4,
      link: AnjirBrfi,
      title: "Anjir Brfi",
      price: "£.../KG",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2  justify-between items-center gap-4 lg:grid-cols-3 lg:justify-center bg-gray-700">
        {images.map(({ id, link, title, price }) => (
          <div className="bg-gray-500 h-auto rounded-md py-3 gap-x-1">
            <div className="" key={id}>
              <img
                className="px-5 py-3 hover:scale-105 rounded-lg"
                src={link}
                alt="img"
              />
              <h1 className="font-semibold hover:bg-amber-500 text-center py-2 my-2 rounded-lg shadow-lg hover:translate-x-1 hover:font-bold bg-gray-900 text-gray-100 mx-3">
                {title}
              </h1>
              <p className="text-right text-xl bg-amber-500 ml-40 mr-3">
                {price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
