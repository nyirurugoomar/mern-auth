// eslint-disable-next-line no-unused-vars
import React from "react";

function Card() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Create Card</h1>
      <form className="flex flex-col gap-4">
        <input type="file" accept="image/*" />
        <input
          type="text"
          placeholder="Campany name"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="Campany Name"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="Campany Service"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="SSD CODE"
          className="bg-slate-100 rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          save
        </button>
      </form>
    </div>
  );
}

export default Card;
