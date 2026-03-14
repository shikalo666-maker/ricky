/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Spade, 
  Club, 
  Diamond, 
  Play, 
  ChevronRight, 
  User, 
  BookOpen, 
  Layers, 
  Gamepad2,
  ChevronDown
} from 'lucide-react';

const GameTypeCard = ({ 
  suit: SuitIcon, 
  title, 
  category, 
  description, 
  colorClass, 
  glowClass,
  image
}: { 
  suit: any, 
  title: string, 
  category: string, 
  description: string, 
  colorClass: string,
  glowClass: string,
  image: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`glass rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group cursor-pointer ${glowClass}`}
  >
    <div className="flex justify-between items-start">
      <div className={`${colorClass}`}>
        <SuitIcon size={32} fill="currentColor" />
      </div>
      <span className="text-xs font-mono opacity-50 uppercase tracking-widest">Type {title[0]}</span>
    </div>
    
    <div className="mt-4">
      <h3 className={`text-2xl font-display font-bold tracking-tighter uppercase ${colorClass}`}>{title}</h3>
      <p className="text-xs font-medium opacity-70 uppercase tracking-widest mt-1">{category}</p>
    </div>
    
    <p className="text-xs opacity-50 leading-relaxed line-clamp-2">
      {description}
    </p>
    
    <div className="mt-4 rounded-lg overflow-hidden h-24 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-2 left-2 text-[10px] font-mono opacity-70">CHALLENGE 1</div>
    </div>
  </motion.div>
);

const CharacterCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="flex flex-col gap-2 group cursor-pointer">
    <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="px-1">
      <h4 className="text-[10px] font-display font-bold uppercase tracking-wider">{name}</h4>
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? 'bg-netflix-red' : 'bg-white/10'}`} />
        ))}
      </div>
    </div>
  </div>
);

const ChallengeItem = ({ id, title, active = false }: { id: string, title: string, active?: boolean }) => (
  <div className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${active ? 'bg-netflix-red/10 border-netflix-red/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
    <div className="flex items-center gap-3">
      <span className={`text-[10px] font-mono ${active ? 'text-netflix-red' : 'opacity-40'}`}>{id}</span>
      <span className={`text-xs font-display font-bold uppercase tracking-wider ${active ? 'text-white' : 'opacity-70'}`}>{title}</span>
    </div>
    <ChevronDown size={14} className="opacity-40" />
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Games');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-netflix-red selection:text-white flex overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-y-auto">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/borderland-tokyo/1920/1080?grayscale&blur=2" 
            alt="Tokyo Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-8">
          <div className="flex items-center gap-12">
            <h1 className="text-3xl font-display font-black text-netflix-red tracking-tighter uppercase">Netflix</h1>
            <div className="hidden md:flex items-center gap-8">
              {['Games', 'Characters', 'Survival Guide', 'Episodes'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all hover:text-netflix-red ${activeTab === tab ? 'text-netflix-red' : 'text-white/60'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <button className="glass px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all">
            Enter the Arena
          </button>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 flex-1 flex flex-col justify-center px-12 pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-6xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
              Welcome to <br />
              <span className="text-netflix-red">Borderland</span> — <br />
              Every Game <br />
              Has a Price
            </h2>
            
            <div className="flex items-center gap-6 mt-12">
              <button className="glass px-8 py-4 rounded-full flex items-center gap-3 group hover:bg-white/10 transition-all">
                <Play size={16} fill="white" className="group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Watch Trailer</span>
              </button>
              <button className="bg-borderland-blue neon-glow-blue px-8 py-4 rounded-full text-black flex items-center gap-3 group hover:scale-105 transition-all">
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Join the Game</span>
              </button>
            </div>
          </motion.div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            <GameTypeCard 
              suit={Heart}
              title="Hearts"
              category="Psychological"
              description="Games of betrayal and trust. Players are forced to play with others' lives."
              colorClass="text-borderland-red"
              glowClass="hover:neon-glow-red"
              image="https://picsum.photos/seed/hearts/400/300"
            />
            <GameTypeCard 
              suit={Spade}
              title="Spades"
              category="Physical"
              description="Games of endurance and strength. Survival depends on physical prowess."
              colorClass="text-white"
              glowClass="hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              image="https://picsum.photos/seed/spades/400/300"
            />
            <GameTypeCard 
              suit={Club}
              title="Clubs"
              category="Teamwork"
              description="Games of cooperation and balance. Success requires collective effort."
              colorClass="text-borderland-blue"
              glowClass="hover:neon-glow-blue"
              image="https://picsum.photos/seed/clubs/400/300"
            />
            <GameTypeCard 
              suit={Diamond}
              title="Diamonds"
              category="Intellectual"
              description="Games of logic and strategy. Victory is achieved through sharp wit."
              colorClass="text-borderland-red"
              glowClass="hover:neon-glow-red"
              image="https://picsum.photos/seed/diamonds/400/300"
            />
          </div>
        </main>
      </div>

      {/* Sidebar Panel */}
      <aside className="w-80 border-l border-white/10 bg-black/80 backdrop-blur-xl flex flex-col overflow-y-auto hidden xl:flex">
        <div className="p-8 flex flex-col gap-12">
          {/* Game Types Header */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Game Type Types</h3>
              <ChevronRight size={14} className="opacity-30" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[Heart, Spade, Club, Diamond].map((Icon, i) => (
                <div key={i} className="aspect-square glass rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                  <Icon size={16} className={i % 2 === 0 ? 'text-borderland-red' : 'text-borderland-blue'} />
                </div>
              ))}
            </div>
          </section>

          {/* Survival Strategy Guide */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Survival Strategy Guide</h3>
              <BookOpen size={14} className="opacity-30" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CharacterCard name="Arisu" role="Strategy" image="https://picsum.photos/seed/arisu/200/300" />
              <CharacterCard name="Usagi" role="Physical" image="https://picsum.photos/seed/usagi/200/300" />
              <CharacterCard name="Chishiya" role="Logic" image="https://picsum.photos/seed/chishiya/200/300" />
              <CharacterCard name="Kuina" role="Combat" image="https://picsum.photos/seed/kuina/200/300" />
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-white/5 transition-all">
              Learn More
            </button>
          </section>

          {/* Game Challenges */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Game Challenges</h3>
              <Gamepad2 size={14} className="opacity-30" />
            </div>
            
            <div className="rounded-xl overflow-hidden mb-4 relative h-32">
              <img 
                src="https://picsum.photos/seed/challenge-bg/400/200?grayscale" 
                alt="Challenge" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="w-8 h-1 bg-netflix-red rounded-full mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-widest">Current Arena: Shibuya</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <ChallengeItem id="01" title="Challenge 1" />
              <ChallengeItem id="02" title="Challenge 2" active />
              <ChallengeItem id="03" title="Challenge 3" />
              <ChallengeItem id="04" title="Challenge 4" />
              <ChallengeItem id="05" title="Challenge 5" />
            </div>
            
            <button className="w-full mt-6 py-3 bg-white/5 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
              Select More
            </button>
          </section>
        </div>
      </aside>
    </div>
  );
}
