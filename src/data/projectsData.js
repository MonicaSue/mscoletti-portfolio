import Sneakerheads from '../assets/images/sneakerheads.png'
import BaamVoyage from '../assets/images/baam.png'
import FleetSuite from '../assets/images/fleetSolutions.png'
import NepaliCardGame from '../assets/images/nepali.png'

export const projects = [
  {
    title: 'Fleet Solutions', 
    description: 'An app to manage performance and maintenance for fleet inventory', 
    image: FleetSuite, 
    repositoryLink: 'https://github.com/MonicaSue/fleet-solutions-front-end', 
    deploymentLink: 'https://fleet-solutions.netlify.app/',
    tech: ['TYPESCRIPT', 'POSTGRES', 'EXPRESS', 'REACT', 'NODE', 'RECHARTS', 'CSS']
  },
  {
    title: 'BAAM Voyage', 
    description: 'An app to manage your flights, accommodations, and activities for every vacation!', 
    image: BaamVoyage, 
    repositoryLink: 'https://github.com/MonicaSue/bamm-voyage-front-end', 
    deploymentLink: 'https://bamm-voyage.netlify.app/',
    tech: ['REACT', 'MONGODB', 'EXPRESS', 'NODE', 'MUI', 'CSS']
  },
  {
    title: 'SNEAKERHEADS', 
    description: 'An app to manage your shoe collection, connect with other sneakerheads, and buy-sell-trade.', 
    image: Sneakerheads, 
    repositoryLink: 'https://github.com/MonicaSue/sneakerheads', 
    deploymentLink: 'https://sneakerheads.fly.dev/',
    tech: ['EJS', 'MONGODB', 'EXPRESS', 'NODE', 'CSS']
  },
  {
    title: 'Nepali Card Game', 
    description: 'A card game learned in Nepal', 
    image: NepaliCardGame, 
    repositoryLink: 'https://github.com/MonicaSue/nepali-card-game', 
    deploymentLink: 'https://nepali-card-game.netlify.app/',
    tech: ['JAVASCRIPT', 'HTML', 'CSS']
  },
]