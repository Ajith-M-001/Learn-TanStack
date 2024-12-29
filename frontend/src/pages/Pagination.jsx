import { useState } from "react";
import { usePaginatedPosts } from "../hooks/usePosts";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const {
    data: posts,
    isLoading,
    error,
  } = usePaginatedPosts({
    page,
    limit,
  });

  console.log("posts", posts);
  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    if (posts?.currentPage < posts?.totalPages) {
      setPage(posts.currentPage + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Skeleton Header */}
          <div className="mb-8 flex justify-between px-5">
            <div className="h-8 bg-gray-200 rounded w-48"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>

          {/* Skeleton Posts */}
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skeleton Pagination Controls */}
          <div className="mt-8 flex justify-between items-center">
            <div className="h-8 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-red-500">
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between px-5">
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="mt-2 text-gray-600">Page {page}</p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.data.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
              page === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Showing {(page - 1) * limit + 1} to{" "}
            {(page - 1) * limit + posts?.data.length}
          </span>

          <button
            onClick={handleNext}
            disabled={posts?.currentPage >= posts?.totalPages} // Disable if currentPage >= totalPages
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
              posts?.currentPage >= posts?.totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
