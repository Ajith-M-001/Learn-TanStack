import { Save, X, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useCreateUser,
  useGetUserById,
  useUpdateUser,
} from "../hooks/useUsers";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than 100"),
  address: z.string().min(1, "Address is required"),
});

const AddUser = () => {
  const { userId } = useParams();
  const {
    mutate: createUser,
    isPending: isCreatePending,
    error: userError,
  } = useCreateUser();
  const {
    mutate: updateUser,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateUser();
  const { data: userData, isLoading, error } = useGetUserById(userId);
  const navigate = useNavigate();

  const isEditMode = Boolean(userId);
  console.log(userData);

  const defaultValues = {
    name: "",
    email: "",
    age: "",
    address: "",
  };

  const handleClear = () => {
    reset(defaultValues);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  useEffect(() => {
    if (isEditMode && userData) {
      reset(userData);
    } else {
      reset(defaultValues);
    }
  }, [isEditMode, userData, reset]);

  const onSubmit = async (data) => {
    if (isEditMode) {
      updateUser(
        { userId, data },
        {
          onSuccess: () => {
            reset(defaultValues);
            navigate("../users");
          },
        }
      );
    } else {
      createUser(data, {
        onSuccess: () => {
          navigate("../users");
          reset();
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error: {userError.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-indigo-600">
            <h2 className="text-xl font-semibold text-white">
              {isEditMode ? "Edit User" : "Add New User"}
            </h2>
          </div>
          {(userError || updateError) && (
            <div className="p-4 mt-2 bg-red-100 border border-red-400 text-red-700">
              <p>{userError?.message || updateError?.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true, maxLength: 20 })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter full name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter job title"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Age Field */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                {...register("age", { valueAsNumber: true, required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter age"
              />
              {errors.age && (
                <p className="text-sm text-red-500">{errors.age.message}</p>
              )}
            </div>

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                {...register("address", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter full address"
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address.message}</p>
              )}
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <X className="h-4 w-4 mr-2" />
                Clear
              </button>
              <button
                disabled={isCreatePending || isUpdatePending} // Disable button if either create or update is pending
                type="submit"
                className={`flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isCreatePending || isUpdatePending ? "cursor-not-allowed" : ""
                }`}
              >
                {isCreatePending || isUpdatePending ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                {isCreatePending
                  ? "Saving..." // Show "Saving..." if create operation is pending
                  : isUpdatePending
                  ? "Editing..." // Show "Editing..." if update operation is pending
                  : isEditMode
                  ? "Edit User" // Show "Edit User" when in edit mode
                  : "Save User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
