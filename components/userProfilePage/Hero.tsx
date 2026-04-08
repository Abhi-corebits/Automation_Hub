"use client"

import { Suspense, useEffect, useState } from "react";
import LeftNavBar from "./leftbar";
import Profile from "./profile";
import Options from "./optionsBlock";
import SkeletonProfile from "./profileSkeleton";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("myautomations");

  // const userInfo = await getUser()
  // const email = userInfo.email

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Decorative cloud-like glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Content - Full width on mobile, 10 cols on desktop */}
          <div className="flex flex-col col-span-1 lg:col-span-12">
            <div className="flex ">
            {/* Profile Header */}
            <Suspense fallback={<SkeletonProfile />}>
              <Profile />
            </Suspense>
            
            </div>

            {/* Tabs Section */}
            <div className="bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-800/50 overflow-hidden my-6">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-800/50 overflow-x-auto scrollbar-hide bg-gray-900/30 mb-4">
                <button
                  onClick={() => setActiveTab("myautomations")}
                  className={`px-6 sm:px-8 py-5 font-semibold whitespace-nowrap transition-all duration-300 relative text-base ${activeTab === "myautomations"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    My Automations
                  </span>
                  {activeTab === "myautomations" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-t-full shadow-lg shadow-blue-500/50"></span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("likedautomations")}
                  className={`px-6 sm:px-8 py-5 font-semibold whitespace-nowrap transition-all duration-300 relative text-base ${activeTab === "likedautomations"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Liked Automations
                  </span>
                  {activeTab === "likedautomations" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-t-full shadow-lg shadow-blue-500/50"></span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("addproject")}
                  className={`px-6 sm:px-8 py-5 font-semibold whitespace-nowrap transition-all duration-300 relative text-base ${activeTab === "addproject"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Project
                  </span>
                  {activeTab === "addproject" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-t-full shadow-lg shadow-blue-500/50"></span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-6 sm:px-8 py-5 font-semibold whitespace-nowrap transition-all duration-300 relative text-base ${activeTab === "settings"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </span>
                  {activeTab === "settings" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-t-full shadow-lg shadow-blue-500/50"></span>
                  )}
                </button>
              </div>

              {/* Content Area */}
              <div className="bg-black/20">
                <Options id={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;