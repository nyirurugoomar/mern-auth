// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigateTo = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyService, setCompanyService] = useState("");
  const [supportNumber, setSupportNumber] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [error, setError] = useState(""); // Added error state

  const handleSubmit = async () => {
    try {
      if (!companyName.trim()) {
        setError("Please enter the company name"); // Fixed error message
      } else if (!companyService.trim()) {
        setError("Please enter the services");
      } else if (!supportNumber.trim()) {
        setError("Please enter the support number");
      } else {
        setError(""); // Reset error state on successful submission
        const response = await axios.post(
          "http://localhost:5173/api/card/createCard", // Fixed URL
          {
            title: companyName,
            service: companyService,
            ssdNo: supportNumber,
            companyProfilePicture: companyLogo,
          }
        );

        if (response.status === 200) {
          console.log("Card created successfully");

          setCompanyName("");
          setCompanyService("");
          setSupportNumber("");
          setCompanyLogo("");

          navigateTo("/");
        } else {
          console.error("Error creating card:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error creating card:", error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Create Card</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* <input
          type="file"
          accept="image/*"
          value={companyLogo}
          onChange={(e) => setCompanyLogo(e.target.files)}
        />{" "} */}

        <input
          type="text"
          placeholder="Company name"
          className="bg-slate-100 rounded-lg p-3"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Services"
          className="bg-slate-100 rounded-lg p-3"
          value={companyService}
          onChange={(e) => setCompanyService(e.target.value)}
        />
        <input
          type="text"
          placeholder="SSD NUMBER"
          className="bg-slate-100 rounded-lg p-3"
          value={supportNumber}
          onChange={(e) => setSupportNumber(e.target.value)}
        />
        <div className="text-red-500 text-center">
          {error && <p>{error}</p>}
        </div>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Save
        </button>
      </form>
    </div>
  );
}

export default Card;
