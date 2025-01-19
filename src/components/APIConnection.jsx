import React, { useState, useEffect } from "react";
import axios from "axios";

const APIConnection = ({
  setBikeThefts,
  setFilteredBikeThefts,
  currentPage,
  setTotalPages,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikeThefts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://bikeindex.org/api/v3/search",
          {
            params: {
              location: "Munich", // Modify with the location you want
              per_page: 10, // Number of results per page
              page: currentPage, // Use currentPage to dynamically fetch the right page
            },
          }
        );

        setBikeThefts(response.data.bikes); // Set the original bike thefts data
        setFilteredBikeThefts(response.data.bikes); // Set the filtered bike thefts data
        setTotalPages(Math.ceil(response.data.total_bikes / 10)); // Calculate total pages based on total number of bikes
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikeThefts();
  }, [currentPage, setBikeThefts, setFilteredBikeThefts, setTotalPages]); // Re-fetch when currentPage changes

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Error: {error}
      </div>
    );

  return null; // No need to render anything here
};

export default APIConnection;
