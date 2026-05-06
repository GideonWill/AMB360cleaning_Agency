import React from 'react';

const Suspended = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-[600px] w-full border border-gray-200">
        {/* Header Bar */}
        <div className="bg-[#007bff] h-12 w-full flex items-center px-6">
          <span className="text-white font-bold tracking-wider">SYSTEM NOTIFICATION</span>
        </div>
        
        <div className="p-10 md:p-14 text-center">
          {/* Warning Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-14 h-14 text-yellow-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
          </div>

          <h1 className="text-[36px] font-extrabold text-gray-900 mb-4 tracking-tight">
            Account Suspended
          </h1>
          
          <p className="text-[20px] text-gray-600 leading-relaxed mb-10">
            This account has been suspended. Please contact your hosting provider for more information.
          </p>

          <div className="border-t border-gray-100 pt-8 mt-4">
            <p className="text-gray-500 text-sm italic">
              If you are the owner of this account, please log in to your billing portal or contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suspended;

