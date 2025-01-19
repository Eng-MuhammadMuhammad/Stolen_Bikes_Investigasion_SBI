import React, { useState, useEffect } from "react";
import styles from "./BikesSearch.module.css";

const BikesSearch = ({ bikeThefts, onSearch, allBikeThefts }) => {
  const [description, setDescription] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    onSearch(value, serialNumber);
  };

  const handleSerialNumberChange = (e) => {
    const value = e.target.value;
    setSerialNumber(value);
    onSearch(description, value);
  };
  useEffect(() => {
    if (!description && !serialNumber) {
      onSearch("", "");
    }
  }, [description, serialNumber, onSearch]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        SEARCH FOR NEARBY STOLEN BIKES
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
          <input
            type="text"
            placeholder="Search bike descriptions"
            className="p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Search for serial number"
            className="p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={serialNumber}
            onChange={handleSerialNumberChange}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex gap-4 items-center w-full">
            <label htmlFor="radius" className="text-sm text-gray-600">
              within
            </label>
            <input
              id="radius"
              type="number"
              defaultValue={100}
              className="p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
            />
            <span className="text-sm text-gray-600 whitespace-nowrap">
              miles of
            </span>
            <input
              type="text"
              defaultValue="Munich"
              className="p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            />
          </div>
          <button
            className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => onSearch(description, serialNumber)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button className={`${styles.filterButton} bg-gray-800 text-white`}>
          Stolen within 100 miles of Munich (115)
        </button>
        <button className={`${styles.filterButton} bg-gray-100 text-gray-800`}>
          Stolen anywhere (10k+)
        </button>
        <button className={`${styles.filterButton} bg-gray-100 text-gray-800`}>
          Not marked stolen (10k+)
        </button>
        <button className={`${styles.filterButton} bg-gray-100 text-gray-800`}>
          All
        </button>
      </div>

      <div className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikeThefts.map((theft) => (
            <div
              key={theft.id || theft.serial}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={theft.thumb}
                alt="Bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href={theft.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {theft.title}
                  </a>
                </h3>
                <p className="text-gray-700">
                  <strong>Serial:</strong> {theft.serial}
                </p>
                <p className="text-gray-700">
                  <strong>Primary Colors:</strong>{" "}
                  {theft.frame_colors.join(", ")}
                </p>
                <p className="text-gray-700">
                  <strong>Stolen On:</strong>{" "}
                  {new Date(theft.date_stolen * 1000).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> {theft.stolen_location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikesSearch;
