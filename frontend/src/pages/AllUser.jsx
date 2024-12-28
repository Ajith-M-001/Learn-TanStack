import { Link, useNavigate } from "react-router";
import { useDeleteUser, useGetAllUsers } from "../hooks/useUsers";
import { Eye, Pencil, Trash2, Users } from "lucide-react";

const AllUser = () => {
  const {
    data: users,
    isLoading: isUserLoading,
    error: userError,
  } = useGetAllUsers();

  const { mutate: deleteUser } = useDeleteUser();

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure you want to delete the user?");
    if (confirm) {
      deleteUser(id);
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error: {userError.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h1 className="text-2xl font-semibold text-gray-900">All Users</h1>
          </div>
          <button
            onClick={() => {
              navigate("../add-user");
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New User
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-5">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => {
                          navigate(`${user._id}`);
                        }}
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <Link to={`../edit-user/${user._id}`}>
                        <button className="text-green-600 hover:text-green-800">
                          <Pencil className="h-5 w-5" />
                        </button>
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(user._id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {users?.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No users found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new user.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
