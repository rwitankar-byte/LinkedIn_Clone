import React from 'react';

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-4">
      <div className="flex items-center space-x-2 mb-3">
        <img
          src="https://via.placeholder.com/48"
          alt="Profile Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <button className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-300 text-left px-4 py-3 rounded-full text-sm font-semibold text-gray-500 transition-colors">
          Start a post
        </button>
      </div>

      <div className="border-t border-gray-200 mb-1"></div>

      <div className="flex items-center justify-between mt-1">
        <button className="flex items-center justify-center flex-1 space-x-2 py-3 mx-1 rounded-md hover:bg-gray-100 transition-colors">
          <span className="text-xl">📷</span>
          <span className="text-sm font-semibold text-gray-600">Media</span>
        </button>
        <button className="flex items-center justify-center flex-1 space-x-2 py-3 mx-1 rounded-md hover:bg-gray-100 transition-colors">
          <span className="text-xl">💼</span>
          <span className="text-sm font-semibold text-gray-600">Job</span>
        </button>
        <button className="flex items-center justify-center flex-1 space-x-2 py-3 mx-1 rounded-md hover:bg-gray-100 transition-colors">
          <span className="text-xl">✍️</span>
          <span className="text-sm font-semibold text-gray-600">Write article</span>
        </button>
      </div>
    </div>
  );
}