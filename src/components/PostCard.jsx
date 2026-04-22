import React, { useState } from 'react';

export default function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  // Default values if data is missing
  const {
    user = {
      name: 'Unknown User',
      headline: 'LinkedIn Member',
      avatar: 'https://via.placeholder.com/48',
    },
    timestamp = 'Just now',
    content = '',
    image = null,
    likes = 0,
    comments = 0,
  } = post || {};

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 pt-4 pb-2">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover mr-3 cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 truncate hover:text-blue-600 hover:underline cursor-pointer">
            {user.name}
          </h3>
          <p className="text-xs text-gray-500 truncate">{user.headline}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span>{timestamp}</span>
            <span className="mx-1">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-2">
        <p className="text-sm text-gray-800 whitespace-pre-wrap">{content}</p>
      </div>

      {/* Image */}
      {image && (
        <div className="mt-2 w-full">
          <img src={image} alt="Post content" className="w-full max-h-96 object-cover" />
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 border-b border-gray-100 border-t mt-2">
        <div className="flex items-center">
          <div className="flex -space-x-1 mr-1">
            <span className="bg-blue-500 rounded-full p-1 border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </span>
          </div>
          <span>{isLiked ? likes + 1 : likes}</span>
        </div>
        <div>
          <span className="hover:text-blue-600 hover:underline cursor-pointer">{comments} comments</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-2 py-1">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center justify-center flex-1 py-3 mx-1 rounded-md transition-colors hover:bg-gray-100 text-sm font-semibold ${isLiked ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isLiked ? "0" : "2"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514C5.024 10.02 5 10.51 5 11v9z" />
          </svg>
          Like
        </button>
        <button className="flex items-center justify-center flex-1 py-3 mx-1 rounded-md transition-colors hover:bg-gray-100 text-sm font-semibold text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </button>
        <button className="flex items-center justify-center flex-1 py-3 mx-1 rounded-md transition-colors hover:bg-gray-100 text-sm font-semibold text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
        <button className="flex items-center justify-center flex-1 py-3 mx-1 rounded-md transition-colors hover:bg-gray-100 text-sm font-semibold text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Send
        </button>
      </div>
    </div>
  );
}