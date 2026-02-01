"use client";

import { useState } from "react";

export default function DashboardSettings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate your API here
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    // Integrate API for password change
    setMessage("Password changed successfully!");
    setTimeout(() => setMessage(""), 3000);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white p-6 md:ml-[260px]">
       <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold mb-6">Settings</h1>
        </div>

      {message && (
        <div className="mb-4 rounded-lg bg-teal-500/20 text-teal-400 p-3 text-sm">
          {message}
        </div>
      )}

      {/* Profile Form */}
      <section className="mb-10">
        <h2 className="text-lg font-medium mb-4">Profile Information</h2>
        <form
          onSubmit={handleProfileUpdate}
          className="space-y-4 bg-[#0f1125] p-6 rounded-lg border border-white/10"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col flex-1">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 px-3 py-2 rounded-lg bg-[#1a1c2b] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>
            <label className="flex flex-col flex-1">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 px-3 py-2 rounded-lg bg-[#1a1c2b] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-teal-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-teal-300 transition"
          >
            Update Profile
          </button>
        </form>
      </section>

      {/* Password Form */}
      <section>
        <h2 className="text-lg font-medium mb-4">Change Password</h2>
        <form
          onSubmit={handlePasswordChange}
          className="space-y-4 bg-[#0f1125] p-6 rounded-lg border border-white/10"
        >
          <label className="flex flex-col">
            Current Password
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 px-3 py-2 rounded-lg bg-[#1a1c2b] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <label className="flex flex-col">
            New Password
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 px-3 py-2 rounded-lg bg-[#1a1c2b] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <label className="flex flex-col">
            Confirm New Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 px-3 py-2 rounded-lg bg-[#1a1c2b] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <button
            type="submit"
            className="bg-teal-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-teal-300 transition"
          >
            Change Password
          </button>
        </form>
      </section>
    </div>
  );
}
