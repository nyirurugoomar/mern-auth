// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCardID, setSelectedCardID] = useState(null);

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

  const handleUpdate = (cardID) => {
    const cardToUpdate = cards.find((card) => card._id === cardID);
    setUpdateData(cardToUpdate);
    setSelectedCardID(cardID);
    setShowUpdateModal(true);
  };

  const handleSubmitUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5173/api/card/cards/${selectedCardID}`,
        updateData
      );
      const response = await axios.get(
        "http://localhost:5173/api/card/getCards"
      );
      setCards(response.data);
      setShowUpdateModal(false);
      setUpdateData({});
      setSelectedCardID(null);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  return (
    <div>
      <div className="bg-blue-800 p-20 w-full ">
        <div>
          <section className=" ">
            <div className="">
              <h2 className="text-center text-white text-3xl mb-4 font-bold">
                Welcome
              </h2>
              <div className="flex flex-row md:flex-row items-center md:items-stretch md:justify-center mt-4">
                <input
                  className="p-2 rounded-l-lg md:w-3/5 focus:outline-none"
                  type="search"
                  placeholder="Search..... "
                />
                <button className="bg-[#1B1464] p-2 md:p-4 text-white rounded-r-lg md:rounded-r-[20px] font-bold ">
                  Search
                </button>
              </div>
            </div>
          </section>
        </div>
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
                        <h2 className="text-xl font-semibold text-[2rem] text-center">
                          {card.title}
                        </h2>
                        <p className="font-bold text-center">{card.service}</p>
                      </div>
                    </div>
                    <h1 className="text-center font-bold text-[50px]">
                      {card.ssdNo}
                    </h1>
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleDelete(card._id)}
                        className="text-red-600 px-4 py-2 mt-2 rounded-md"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleUpdate(card._id)}
                        className="text-gray px-4 py-2 mt-2 rounded-md"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Update Card Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Update Card
            </h2>
            <h4 className="font-bold">Title</h4>
            <input
              type="text"
              name="title"
              value={updateData.title || ""}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg p-3 w-full"
              placeholder="Title"
            />
            <h4 className="font-bold">Service</h4>
            <input
              type="text"
              name="service"
              value={updateData.service || ""}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg p-3 w-full"
              placeholder="Service"
            />
            <h4 className="font-bold">Number</h4>
            <input
              type="text"
              name="ssdNo"
              value={updateData.ssdNo || ""}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg p-3 w-full mb-4"
              placeholder="SSD No"
            />
            <button
              onClick={handleSubmitUpdate}
              className="bg-blue-800 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
            <button
              onClick={() => setShowUpdateModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
