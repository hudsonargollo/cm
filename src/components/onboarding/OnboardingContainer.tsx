import React from 'react';

const OnboardingContainer: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to Cave Awakening</h1>
      <p className="mb-6">Let's get you started with your onboarding process.</p>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded">
          <h2 className="text-lg font-semibold">Step 1: Create Your Profile</h2>
          <p>Complete your profile information to get started.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded">
          <h2 className="text-lg font-semibold">Step 2: Set Your Preferences</h2>
          <p>Customize your experience to match your needs.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded">
          <h2 className="text-lg font-semibold">Step 3: Explore Features</h2>
          <p>Discover all the features available to you.</p>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingContainer;