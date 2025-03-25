'use client';

import { useState } from 'react';
import { Typography } from '@material-tailwind/react';

export default function Dashboard() {
  const [randomQuote, setRandomQuote] = useState('');

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
