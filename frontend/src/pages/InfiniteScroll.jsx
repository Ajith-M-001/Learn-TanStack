/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useInfinitePosts } from "../hooks/usePosts";
import { useInView } from "react-intersection-observer";
import { Loader2, AlertCircle, User, Calendar } from "lucide-react";

const PostCard = ({ post }) => (
  <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg p-6 border border-gray-200 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 mb-4">
      {post.title}
    </h2>
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex items-center text-sm text-gray-600">
        <User className="w-4 h-4 mr-2 text-indigo-600" />
        <span>{post.author}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
        <span>{new Date(post.createdAt).toLocaleString()}</span>
      </div>
    </div>
    <p className="text-base text-gray-700 leading-relaxed">{post.content}</p>
  </div>
);

const LoadingCard = () => (
  <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 max-w-3xl mx-auto animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="flex gap-4 mb-4">
      <div className="h-5 bg-gray-200 rounded w-32"></div>
      <div className="h-5 bg-gray-200 rounded w-40"></div>
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="max-w-3xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
    <div className="flex items-center gap-2 text-red-600">
      <AlertCircle className="w-5 h-5" />
      <p className="font-medium">Error loading posts</p>
    </div>
    <p className="mt-1 text-red-500">{message}</p>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
  </div>
);

const InfiniteScroll = () => {
  const limit = 5;
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePosts({ limit });

  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "100px",
  });

  console.log("AFdsafas", data);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <div className="space-y-6 px-4 py-8">
        {[...Array(3)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-8">
        <ErrorMessage message={error.message} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Infinite Scroll Example
          </h1>
          <p className="text-gray-600">
            This example demonstrates infinite scrolling using TanStack Querys
            useInfiniteQuery hook. Scroll down to load more posts automatically.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {data?.pages?.map((page) =>
            page.data.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          )}
        </div>

        {/* Loading More Indicator */}
        <div ref={ref} className="mt-6">
          {isFetchingNextPage && <LoadingSpinner />}
          {!hasNextPage && (
            <p className="text-center text-gray-500 py-8">
              No more posts to load
            </p>
          )}
        </div>

        {/* Optional Manual Load More Button
        {hasNextPage && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronDown className="w-4 h-4" />
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InfiniteScroll;
