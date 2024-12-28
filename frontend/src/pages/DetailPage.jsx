import { Link, useParams } from "react-router";
import { useGetUserById } from "../hooks/useUsers";
import { User, Mail, Calendar, MapPin } from "lucide-react";

const DetailPage = () => {
  const { userId } = useParams();
  const { data: user, isLoading, error } = useGetUserById(userId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <div className="text-red-500 text-center">
            <p className="text-lg font-semibold">Error</p>
            <p>{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              {/* User Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.name}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Age */}
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Age</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.age} years
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-4 pt-6">
                <Link to={".."} relative="path">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Back
                  </button>
                </Link>
                <Link to={`../edit-user/${user._id}`}>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
                    Edit User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* User ID Display */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">User ID: {user._id}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
