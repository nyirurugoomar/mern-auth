// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5173/api/card/getCards"
        );
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleDelete = async (cardID) => {
    try {
      await axios.delete(`http://localhost:5173/api/card/cards/${cardID}`);
      setCards(cards.filter((card) => card._id !== cardID));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div>
      <div className="bg-blue-800 p-20 w-full ">
        <h1 className="text-center text-white">Home page</h1>
        <h1 className="text-center text-white mt-4">Search.....input</h1>
      </div>
      <div className="w-full h-full">
        {loading ? (
          <div className="text-center mt-10">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 mx-10 rounded-sm mb-40">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-2xl rounded-xl px-2"
                >
                  <div className="mt-4 mx-2">
                    <div className="flex gap-4">
                      <img
                        src={card.companyProfilePicture}
                        alt=""
                        className="rounded-[10px] w-12 h-12"
                      />
                      <div>
                        <h2 className="text-xl font-semibold text-[27px] text-center">
                          {card.title}
                        </h2>
                        <p className="font-bold text-center">{card.service}</p>
                      </div>
                    </div>
                    <h1 className="text-center font-bold text-[50px]">
                      {card.ssdNo}
                    </h1>
                    <button
                      onClick={() => handleDelete(card._id)}
                      className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
