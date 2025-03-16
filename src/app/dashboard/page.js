'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { getRandomQuotes } from '@/helper/helper';
import { Loader } from './adminComponents/loader/loader';

export default function Dashboard() {
  const router = useRouter();
  const [randomQuote, setRandomQuote] = useState('');
  const hasWindow = typeof window !== 'undefined';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authentication = hasWindow && sessionStorage.getItem('isAuthenticated');
    setIsAuthenticated(authentication);
    if (!authentication) {
      console.log('Redirecting because not authenticated');
      router.push('/');
    }
  }, [router, isAuthenticated]);

  // useEffect(() => {
  //   setRandomQuote(getRandomQuotes());
  // }, []);

  // if (randomQuote < 1) {
  //   return <Loader />;
  // }

  return (
    <div>
      <Typography variant="h1" className="text-2xl">
        Hi Aravind!
      </Typography>
      {/*<Typography variant="paragraph" className="text-lg mt-4">*/}
      {/*  {randomQuote}*/}
      {/*</Typography>*/}
    </div>
  );
}
