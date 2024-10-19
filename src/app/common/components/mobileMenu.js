'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import ActiveMenuList from './ActiveMenu';
import { PhilosophyComponent } from './philosophy';
import { ExpertiseComponent } from './expertise';
import { MobileContainer } from '@/helper/mobileContainer';
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

export const MobileMenu = ({ open, setOpen, activeMenu, style }) => {
  
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div
      className={`relative py-2 text-right text-xs uppercase leading-6 text-text-primary md:leading-6 ${style}`}
    >
      <p className="flex flex-col">
        <span className="cursor-pointer font-semibold mr-4" onClick={() => handleOpen(0)}>
          &#47;&#47; About
        </span>
        <Accordion open={open === 1} className="text-right">
          <span onClick={() => handleOpen(1)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'philosophy' && 'line-through'
              }`}
            >
              philosophy &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <PhilosophyComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <span onClick={() => handleOpen(2)}>
            <a
              className={`cursor-pointer hover:line-through ${
                activeMenu === 'expertise' && 'line-through'
              }`}
            >
              expertise &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <ExpertiseComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <span onClick={() => handleOpen(3)}>
            <a
              className={`cursor-pointer hover:line-through ${
                activeMenu === 'clients' && 'line-through'
              }`}
            >
              clients &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <ClientComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <span onClick={() => handleOpen(4)}>
            <a
              className={`cursor-pointer hover:line-through ${
                activeMenu === 'team' && 'line-through'
              }`}
            >
              team &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <TeamComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
      </p>
      <p className="flex flex-col">
        <span className="cursor-pointer font-semibold mt-2" onClick={() => handleOpen(0)}>
          &#47;&#47; project showcase
        </span>
        <Accordion open={open === 5} className="text-right">
          <span onClick={() => handleOpen(5)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'ewaa' && 'line-through'
              }`}
            >
              ewaa abu dhabi &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <EwaaCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} className="text-right">
          <span onClick={() => handleOpen(6)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'scope' && 'line-through'
              }`}
            >
              scope investment &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <ScopeInvestmentsCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} className="text-right">
          <span onClick={() => handleOpen(7)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'market' && 'line-through'
              }`}
            >
              market i research &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <MarketIResearchCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8} className="text-right">
          <span onClick={() => handleOpen(8)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'coffee' && 'line-through'
              }`}
            >
              raw coffee company &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <RawCoffeeCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 9} className="text-right">
          <span onClick={() => handleOpen(9)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'freshly' && 'line-through'
              }`}
            >
              freshly meals &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <FreshlyMealsCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 10} className="text-right">
          <span onClick={() => handleOpen(10)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'ddy' && 'line-through'
              }`}
            >
              ddy autism center &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <DDYCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 11} className="text-right">
          <span onClick={() => handleOpen(11)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'arabian' && 'line-through'
              }`}
            >
              arabian knights &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <ArabianKnightsCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 12} className="text-right">
          <span onClick={() => handleOpen(12)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'lvmh' && 'line-through'
              }`}
            >
              lvmh fragrances &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <LVMHCarouselComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
      </p>
      <p className="flex flex-col">
        <span className="cursor-pointer font-semibold mt-2" onClick={() => handleOpen(0)}>
          &#47;&#47; contact
        </span>
        <Accordion open={open === 13} className="text-right">
          <span onClick={() => handleOpen(13)} className="text-right">
            <a
              className={`cursor-pointer hover:line-through text-right ${
                activeMenu === 'email' && 'line-through'
              }`}
            >
              email + phone &#47;
            </a>
          </span>
          <AccordionBody>
            <MobileContainer>
              <EmailComponent />
            </MobileContainer>
          </AccordionBody>
        </Accordion>
      </p>
      <p className="flex flex-col">
        <span className="cursor-pointer font-semibold mt-2" onClick={() => handleOpen(0)}>
          &#47;&#47; home
        </span>
      </p>
    </div>
  );
};
