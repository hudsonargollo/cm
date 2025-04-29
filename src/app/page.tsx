import React from 'react';
import OnboardingContainer from '@/components/onboarding/OnboardingContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OnboardingContainer />
    </main>
  );
}