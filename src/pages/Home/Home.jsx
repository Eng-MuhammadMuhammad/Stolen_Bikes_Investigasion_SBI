import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import APIConnection from "../../components/APIConnection";
import BikesSearch from "./BikesSearch";
import Pagination from "./Pagination";

const Home = () => {
  const [bikeThefts, setBikeThefts] = useState([]);
  const [filteredBikeThefts, setFilteredBikeThefts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (description, serialNumber) => {
    let filteredBikes = bikeThefts;

    if (description) {
      filteredBikes = filteredBikes.filter((theft) =>
        theft.title.toLowerCase().includes(description.toLowerCase())
      );
    }

    if (serialNumber) {
      filteredBikes = filteredBikes.filter((theft) =>
        theft.serial.toLowerCase().includes(serialNumber.toLowerCase())
      );
    }

    setFilteredBikeThefts(filteredBikes);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BikesSearch
        bikeThefts={filteredBikeThefts}
        onSearch={handleSearch}
        allBikeThefts={bikeThefts}
      />
      <APIConnection
        setBikeThefts={setBikeThefts}
        setFilteredBikeThefts={setFilteredBikeThefts}
        currentPage={currentPage}
        setTotalPages={setTotalPages}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
