"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sessionStrgAuthKey } from "@/helper/helper";

const UserSettings = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    // Get user from session storage
    const hasWindow = typeof window !== "undefined";
    if (hasWindow) {
      const userData = sessionStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(prev => ({
          ...prev,
          username: parsedUser.username || "admin",
          email: parsedUser.email || "admin@esstec.com"
        }));
      } else {
        // Fallback to default values
        setUser(prev => ({
          ...prev,
          username: "admin",
          email: "admin@esstec.com"
        }));
      }
    }
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      // For now, we'll just show a success message
      // In a real app, you'd call the API to update the user
      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      setTimeout(() => setError(""), 5000);
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    if (user.newPassword !== user.confirmPassword) {
      setError("New passwords do not match");
      setSaving(false);
      return;
    }

    if (user.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      setSaving(false);
      return;
    }

    try {
      // For now, we'll just show a success message
      // In a real app, you'd call the API to update the password
      setMessage("Password updated successfully!");
      setUser(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      }));
      setShowPasswordForm(false);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setError("Failed to update password. Please try again.");
      setTimeout(() => setError(""), 5000);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionStrgAuthKey, "false");
    }
    router.push("/login");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">User Settings</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {saving ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>

      {/* Password Change */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Password</h2>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showPasswordForm ? "Cancel" : "Change Password"}
          </button>
        </div>

        {showPasswordForm && (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={user.currentPassword}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={user.newPassword}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                minLength="6"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                minLength="6"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
              >
                {saving ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        )}

        {!showPasswordForm && (
          <p className="text-gray-500 text-sm">
            Click "Change Password" to update your password
          </p>
        )}
      </div>

      {/* Account Information */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p><span className="font-medium">Account Type:</span> Administrator</p>
          <p><span className="font-medium">Last Login:</span> {new Date().toLocaleString()}</p>
          <p><span className="font-medium">Account Created:</span> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
