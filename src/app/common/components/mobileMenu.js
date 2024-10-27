'use client';
import {
  Accordion,
  AccordionBody,
} from '@material-tailwind/react';
import { PhilosophyComponent } from './philosophy';
import { ExpertiseComponent } from './expertise';
import { ClientComponent } from './client';
import { TeamComponent } from './team';
import { EwaaCarouselComponent } from './projects/ewaa';
import { ScopeInvestmentsCarouselComponent } from './projects/scope-investments';
import { MarketIResearchCarouselComponent } from './projects/market-i-research';
import { RawCoffeeCarouselComponent } from './projects/raw-coffee';
import { FreshlyMealsCarouselComponent } from './projects/freshly-meals';
import { DDYCarouselComponent } from './projects/ddy';
import { ArabianKnightsCarouselComponent } from './projects/arabian-knights';
import { LVMHCarouselComponent } from './projects/lvmh';
import { EmailComponent } from './email';

export const MobileMenu = ({ open, setOpen, style }) => {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
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
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold mt-2"
          onClick={() => handleOpen(0)}
        >
          &#47;&#47; project showcase
        </span>
        <Accordion open={open === 5} className="text-right">
          <span onClick={() => handleOpen(5)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 5 && 'line-through'
              }`}
            >
              ewaa abu dhabi &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <EwaaCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} className="text-right">
          <span onClick={() => handleOpen(6)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 6 && 'line-through'
              }`}
            >
              scope investment &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <ScopeInvestmentsCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} className="text-right">
          <span onClick={() => handleOpen(7)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 7 && 'line-through'
              }`}
            >
              market i research &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <MarketIResearchCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8} className="text-right">
          <span onClick={() => handleOpen(8)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 8 && 'line-through'
              }`}
            >
              raw coffee company &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <RawCoffeeCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 9} className="text-right">
          <span onClick={() => handleOpen(9)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 9 && 'line-through'
              }`}
            >
              freshly meals &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <FreshlyMealsCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 10} className="text-right">
          <span onClick={() => handleOpen(10)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 10 && 'line-through'
              }`}
            >
              ddy autism center &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <DDYCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 11} className="text-right">
          <span onClick={() => handleOpen(11)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 11 && 'line-through'
              }`}
            >
              arabian knights &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <ArabianKnightsCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 12} className="text-right">
          <span onClick={() => handleOpen(12)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                open === 12 && 'line-through'
              }`}
            >
              lvmh fragrances &#47;
            </a>
          </span>
          <AccordionBody>
            <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
              <LVMHCarouselComponent />
            </div>
          </AccordionBody>
        </Accordion>
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
