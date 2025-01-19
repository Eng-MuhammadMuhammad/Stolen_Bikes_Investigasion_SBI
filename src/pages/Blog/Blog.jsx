import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import APIPosts from "../../components/APIPosts";
import styles from "./Blog.module.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">BIKE THEFT ARTICLES</h1>

        {/* Fetch and display blog posts */}
        <APIPosts
          setBlogPosts={setBlogPosts}
          currentPage={currentPage}
          setTotalPages={setTotalPages}
        />

        {/* Render blog posts */}
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">
              {post.date} - Topics: {post.topics.join(", ")}
            </p>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3 className="text-xl font-semibold mb-4">RELATED</h3>
          <ul className="mb-4">
            <li>
              <a href="/all-news" className="text-blue-600 hover:underline">
                All Bike Index news
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-600 hover:underline">
                About
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">OTHER PAGES</h3>
          <ul>
            <li>
              <a
                href="/stolen-bike-recovery"
                className="text-blue-600 hover:underline"
              >
                How to get your stolen bike back
              </a>
            </li>
            <li>
              <a
                href="/protect-your-bike"
                className="text-blue-600 hover:underline"
              >
                Protect your bike
              </a>
            </li>
            <li>
              <a
                href="/bicycle-serials"
                className="text-blue-600 hover:underline"
              >
                Bicycle serials
              </a>
            </li>
            <li>
              <a href="/donate" className="text-blue-600 hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/store" className="text-blue-600 hover:underline">
                Bike Index Store
              </a>
            </li>
            <li>
              <a
                href="/developer-resources"
                className="text-blue-600 hover:underline"
              >
                Design and developer resources
              </a>
            </li>
            <li>
              <a
                href="/sign-up-organization"
                className="text-blue-600 hover:underline"
              >
                Sign up your organization
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;