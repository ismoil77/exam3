import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E2F] to-[#141427] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-[#7B61FF] leading-none">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-400 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/"
            className="bg-[#7B61FF] hover:bg-[#684fd4] transition-all text-white px-6 py-3 rounded-lg text-base font-medium"
          >
            Go to Homepage
          </a>
          <a
            href="/contact"
            className="border border-white hover:bg-white hover:text-black transition-all px-6 py-3 rounded-lg text-base font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Иллюстрация или SVG */}
      <div className="mt-12 max-w-md w-full">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404 illustration"
          className="w-full h-auto opacity-80"
        />
      </div>
    </div>
  );
}
