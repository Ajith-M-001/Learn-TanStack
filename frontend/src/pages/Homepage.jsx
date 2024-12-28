/* eslint-disable react/prop-types */
import { Users, Table, Infinity, Database } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learn TanStack Query with Examples
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore practical implementations of CRUD operations, caching,
          pagination, and infinite scroll using TanStack Query v5
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors">
            View Documentation
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard
            icon={Users}
            title="CRUD Operations"
            description="Learn how to implement Create, Read, Update, and Delete operations with TanStack Query. Includes error handling and optimistic updates."
          />
          <FeatureCard
            icon={Table}
            title="Pagination"
            description="Implement server-side pagination with TanStack Query. Handle loading states, error boundaries, and cache management."
          />
          <FeatureCard
            icon={Infinity}
            title="Infinite Scroll"
            description="Build infinite scroll functionality using TanStack Query's useInfiniteQuery hook. Learn about cursor-based pagination."
          />
          <FeatureCard
            icon={Database}
            title="Cache Management"
            description="Master TanStack Query's powerful caching system. Learn about cache invalidation, prefetching, and optimistic updates."
          />
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Latest Updates
        </h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-gray-700">
                Added example for optimistic updates in CRUD operations
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <p className="text-gray-700">
                Updated pagination example with new filtering options
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <p className="text-gray-700">
                Implemented infinite scroll with cursor-based pagination
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
