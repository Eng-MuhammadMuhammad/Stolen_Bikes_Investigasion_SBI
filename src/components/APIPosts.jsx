import React, { useState, useEffect } from "react";
import axios from "axios";

const APIPosts = ({ setBlogPosts, currentPage, setTotalPages }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://bikeindex.org/api/v3/post", {
          params: {
            per_page: 10,
            page: currentPage,
          },
        });

        setBlogPosts(response.data.posts);
        setTotalPages(Math.ceil(response.data.total_posts / 10));
      } catch (err) {
        setError(
          err.response
            ? err.response.data.message || "An error occurred"
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [currentPage, setBlogPosts, setTotalPages]);

  if (loading)
    return (
      <div className="flex justify-center items-center text-xl">
        Loading blog posts...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center text-xl text-red-500">
        Error: {error}
      </div>
    );

  return null;
};

export default APIPosts;
