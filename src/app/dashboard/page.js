'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SidebarWithLogo } from './adminComponents/sidebar';
import { Typography } from '@material-tailwind/react';
import { getRandomQuotes } from '@/helper/helper';
import { Loader } from './adminComponents/loader/loader';

export default function Dashboard() {
  const router = useRouter();
  const [randomQuote, setRandomQuote] = useState('');
  const hasWindow = typeof window !== 'undefined';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authentication = hasWindow && localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authentication);
    if (!authentication) {
      console.log('Redirecting because not authenticated');
      router.push('/');
    }
  }, [router, isAuthenticated]);

  useEffect(() => {
    setRandomQuote(getRandomQuotes());
  }, []);

  if (randomQuote < 1) {
    return <Loader />;
  }

  return (
    <div className="flex flex-row w-full p-4 space-x-4">
      <div className="w-1/5">
        <SidebarWithLogo />
      </div>
      <div className="w-4/5 text-text-primary border-2 border-text-primary rounded-xl p-4">
        <Typography variant="h1" className="text-2xl">
          Hi Aravind!
        </Typography>
        <Typography variant="paragraph" className="text-lg mt-4">
          {randomQuote}
        </Typography>
      </div>
    </div>
  );
}
