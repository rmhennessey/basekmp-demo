import React from 'react'
import LandingHero from './LandingHero';
import Definition from './Definition';
import LandingCards from './LandingCards';
import LandingAbout from './LandingAbout';
import LandingWhy from './LandingWhy';
import LandingProcess from './LandingProcess';
import LandingHeroTwo from './LandingHeroTwo';
import Benefits from './Benefits';

export default function LandingPage() {
  return (
    <div>
        <LandingHero />
        <Definition />
        <LandingCards />
        <LandingAbout />
        <LandingWhy />
        <LandingProcess />
        <LandingHeroTwo />
        <Benefits />
    </div>
  )
}