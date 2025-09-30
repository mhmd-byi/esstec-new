'use client';
import {
  Accordion,
  AccordionBody,
} from '@material-tailwind/react';
import { PhilosophyComponent } from './philosophy';
import { ExpertiseComponent } from './expertise';
import { ClientComponent } from './client';
import { TeamComponent } from './team';
import { CarouselComponent } from './projects/CarouselComponent';
import { ScopeInvestmentsCarouselComponent } from './projects/scope-investments';
import { MarketIResearchCarouselComponent } from './projects/market-i-research';
import { RawCoffeeCarouselComponent } from './projects/raw-coffee';
import { FreshlyMealsCarouselComponent } from './projects/freshly-meals';
import { DDYCarouselComponent } from './projects/ddy';
import { ArabianKnightsCarouselComponent } from './projects/arabian-knights';
import { LVMHCarouselComponent } from './projects/lvmh';
import { EmailComponent } from './email';
import { useEffect, useRef } from 'react';
import ProjectList from './projectListDynamic';
import ProjectListDynamic from './projectListDynamic';

const hashToAccordionMap = {
  philosophy: 1,
  expertise: 2,
  clients: 3,
  team: 4,
  ewaa: 5,
  scope: 6,
  market: 7,
  coffee: 8,
  freshly: 9,
  ddy: 10,
  arabian: 11,
  lvmh: 12,
  email: 13
};

export const MobileMenu = ({ open, setOpen, style }) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const hash = window.location.hash.substring(1);
    if (hash in hashToAccordionMap) {
      setOpen(hashToAccordionMap[hash]);
    }
  }, [setOpen]);

  const handleOpen = (value) => {
    const newValue = open === value ? 0 : value;
    setOpen(newValue);
    
    const hash = Object.keys(hashToAccordionMap).find(
      key => hashToAccordionMap[key] === newValue
    );
    
    if (hash) {
      window.location.hash = hash;
    } else {
      window.history.replaceState(null, null, ' ');
    }
  };

  return (
    <div
      className={`relative py-2 text-right text-xs uppercase leading-6 text-text-primary md:leading-6 ${style}`}
    >
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => handleOpen(0)}
        >
          &#47;&#47; About
        </span>
        <Accordion open={open === 1} className="text-right">
          <span onClick={() => handleOpen(1)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 1 && 'line-through'
              }`}
            >
              philosophy &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <PhilosophyComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <span onClick={() => handleOpen(2)}>
            <a
              className={`cursor-pointer hover:line-through ${
                open === 2 && 'line-through'
              }`}
            >
              expertise &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <ExpertiseComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <span onClick={() => handleOpen(3)}>
            <a
              className={`cursor-pointer hover:line-through ${
                open === 3 && 'line-through'
              }`}
            >
              clients &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <ClientComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <span onClick={() => handleOpen(4)}>
            <a
              className={`cursor-pointer hover:line-through ${
                open === 4 && 'line-through'
              }`}
            >
              team &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <TeamComponent />
            </div>
          </AccordionBody>
        </Accordion>
      </p>
      <p className="flex flex-col min-h-52">
        <span
          className="cursor-pointer font-semibold mt-2"
          onClick={() => handleOpen(0)}
        >
          &#47;&#47; project showcase
        </span>
        <ProjectListDynamic open={open} handleOpen={handleOpen} />
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold mt-2"
          onClick={() => handleOpen(0)}
        >
          &#47;&#47; contact
        </span>
        <Accordion open={open === 13} className="text-right">
          <span onClick={() => handleOpen(13)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 13 && 'line-through'
              }`}
            >
              email + phone &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <EmailComponent />
            </div>
          </AccordionBody>
        </Accordion>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold mt-2"
          onClick={() => handleOpen(0)}
        >
          &#47;&#47; home
        </span>
      </p>
    </div>
  );
};
