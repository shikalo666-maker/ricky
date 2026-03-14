/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Spade, 
  Club, 
  Diamond, 
  Play, 
  ChevronRight, 
  BookOpen, 
  Gamepad2,
  ChevronDown,
  Timer,
  Activity,
  ShieldAlert,
  Target
} from 'lucide-react';

// --- Components ---

const EnrollmentModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-2xl overflow-y-auto"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col my-auto border-4 border-black"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Form Header */}
        <div className="p-6 border-b-2 border-black flex justify-between items-start bg-gray-50 relative">
           <div className="flex gap-6 items-center">
             <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center border border-black/20 overflow-hidden">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Department_of_Education_logo.svg/1200px-Department_of_Education_logo.svg.png" alt="DepEd" className="w-16 h-16 object-contain" />
             </div>
             <div>
               <h1 className="text-2xl font-black uppercase leading-tight tracking-tight">Basic Education Enrollment Form</h1>
               <p className="text-xs font-bold italic text-gray-600">THIS FORM IS NOT FOR SALE.</p>
               <div className="mt-2 flex gap-4">
                 <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold uppercase">School Year:</span>
                   <div className="flex gap-0.5">
                     {[2,0,2,6].map((n, i) => <div key={i} className="w-5 h-6 border border-black flex items-center justify-center font-bold">{n}</div>)}
                     <div className="mx-1">-</div>
                     {[2,0,2,7].map((n, i) => <div key={i} className="w-5 h-6 border border-black flex items-center justify-center font-bold">{n}</div>)}
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="text-right">
             <p className="text-[10px] font-bold text-gray-500">Revised as of 03/27/2023</p>
             <div className="border-2 border-black px-4 py-1 mt-2 font-black text-sm inline-block bg-black text-white">ANNEX 1</div>
           </div>
        </div>

        {/* Form Body - Scrollable */}
        <div className="p-8 overflow-y-auto max-h-[70vh] space-y-8 text-[11px] selection:bg-black selection:text-white">
          {/* Instructions */}
          <div className="bg-gray-100 p-3 border-2 border-black font-bold uppercase text-[10px] leading-relaxed">
            INSTRUCTIONS: Print legibly all information required in CAPITAL letters. Submit accomplished form to the Person-in-Charge/Registrar/Class Adviser. Use black or blue pen only.
          </div>

          {/* Section: Learner Information */}
          <section>
            <div className="bg-black text-white p-2 text-center font-black uppercase tracking-[0.2em] mb-6">Learner Information</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-black pb-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">PSA Birth Certificate No.</label>
                <input type="text" className="border-b-2 border-black focus:outline-none bg-transparent py-1 font-mono text-sm" placeholder="ENTER PSA NUMBER" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">Learner Reference No. (LRN)</label>
                <input type="text" className="border-b-2 border-black focus:outline-none bg-transparent py-1 font-mono text-sm" placeholder="ENTER 12-DIGIT LRN" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px] text-gray-500">Last Name</label>
                <input type="text" className="border-2 border-black p-2 focus:bg-gray-50 outline-none font-bold text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px] text-gray-500">First Name</label>
                <input type="text" className="border-2 border-black p-2 focus:bg-gray-50 outline-none font-bold text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px] text-gray-500">Middle Name</label>
                <input type="text" className="border-2 border-black p-2 focus:bg-gray-50 outline-none font-bold text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
               <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">Birthdate</label>
                <input type="date" className="border-2 border-black p-1 font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">Sex</label>
                <select className="border-2 border-black p-1 font-bold">
                  <option>MALE</option>
                  <option>FEMALE</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">Age</label>
                <input type="number" className="border-2 border-black p-1 font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold uppercase text-[9px]">4Ps Beneficiary?</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-1"><input type="radio" name="4ps" /> Yes</label>
                  <label className="flex items-center gap-1"><input type="radio" name="4ps" /> No</label>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Address */}
          <section>
            <div className="bg-black text-white p-2 text-center font-black uppercase tracking-[0.2em] mb-6">Current Address</div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1"><label className="font-bold text-[9px] uppercase text-gray-500">House No.</label><input className="border-2 border-black p-2 font-bold" /></div>
              <div className="flex flex-col gap-1"><label className="font-bold text-[9px] uppercase text-gray-500">Sitio/Street Name</label><input className="border-2 border-black p-2 font-bold" /></div>
              <div className="flex flex-col gap-1"><label className="font-bold text-[9px] uppercase text-gray-500">Barangay</label><input className="border-2 border-black p-2 font-bold" /></div>
              <div className="flex flex-col gap-1"><label className="font-bold text-[9px] uppercase text-gray-500">Municipality/City</label><input className="border-2 border-black p-2 font-bold" /></div>
            </div>
          </section>

          {/* Section: Parent/Guardian */}
          <section>
            <div className="bg-black text-white p-2 text-center font-black uppercase tracking-[0.2em] mb-6">Parent's/Guardian's Information</div>
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4 items-end">
                <div className="font-black uppercase text-xs">Father's Name</div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">Last Name</label><input className="border-2 border-black p-2 font-bold" /></div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">First Name</label><input className="border-2 border-black p-2 font-bold" /></div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">Middle Name</label><input className="border-2 border-black p-2 font-bold" /></div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-end">
                <div className="font-black uppercase text-xs">Mother's Maiden Name</div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">Last Name</label><input className="border-2 border-black p-2 font-bold" /></div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">First Name</label><input className="border-2 border-black p-2 font-bold" /></div>
                <div className="flex flex-col gap-1"><label className="text-[8px] uppercase">Middle Name</label><input className="border-2 border-black p-2 font-bold" /></div>
              </div>
            </div>
          </section>

          {/* Certification */}
          <div className="pt-10 border-t-2 border-black space-y-4">
            <p className="text-center italic font-medium leading-relaxed">
              I hereby certify that the above information given are true and correct to the best of my knowledge and I allow the Department of Education to use my child's details to create and/or update his/her learner profile in the Learner Information System. The information herein shall be treated as confidential in compliance with the Data Privacy Act of 2012.
            </p>
            <div className="grid grid-cols-2 gap-20 pt-10">
              <div className="border-t-2 border-black text-center pt-2 font-bold uppercase">Signature Over Printed Name of Parent/Guardian</div>
              <div className="border-t-2 border-black text-center pt-2 font-bold uppercase">Date</div>
            </div>
          </div>
        </div>

        {/* Form Footer */}
        <div className="p-8 border-t-4 border-black flex justify-between items-center bg-gray-100">
          <button onClick={onClose} className="px-8 py-3 border-2 border-black font-black uppercase hover:bg-black hover:text-white transition-all tracking-widest">Cancel</button>
          <button 
            onClick={() => { alert('ENROLLMENT DATA CAPTURED. SYSTEM PROCESSING...'); onClose(); }}
            className="px-12 py-3 bg-black text-white font-black uppercase hover:bg-gray-800 transition-all tracking-[0.3em] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Submit Enrollment
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VisaStatus = () => {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(22);

  return (
    <div className="glass rounded-xl p-4 border-l-4 border-l-netflix-red neon-glow-red mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-netflix-red font-bold flex items-center gap-2">
          <ShieldAlert size={12} /> Visa Status: Critical
        </span>
        <Activity size={12} className="text-netflix-red animate-pulse" />
      </div>
      <div className="flex gap-4 items-end">
        <div>
          <span className="text-3xl font-display font-bold">{days}</span>
          <span className="text-[10px] font-mono opacity-50 ml-1">DAYS</span>
        </div>
        <div className="text-2xl font-display font-bold opacity-30">:</div>
        <div>
          <span className="text-xl font-display font-bold">{hours}</span>
          <span className="text-[10px] font-mono opacity-50 ml-1">HRS</span>
        </div>
        <div className="text-2xl font-display font-bold opacity-30">:</div>
        <div>
          <span className="text-xl font-display font-bold">{minutes}</span>
          <span className="text-[10px] font-mono opacity-50 ml-1">MIN</span>
        </div>
      </div>
    </div>
  );
};

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
    className={`glass rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group cursor-pointer ${glowClass} transition-all duration-500`}
  >
    <div className="flex justify-between items-start">
      <div className={`${colorClass}`}>
        <SuitIcon size={32} fill="currentColor" />
      </div>
      <div className="text-right">
        <span className="block text-[10px] font-mono opacity-50 uppercase tracking-widest">Difficulty</span>
        <span className="text-xs font-mono font-bold">{title === 'Hearts' ? 'K' : title === 'Spades' ? 'Q' : 'J'}</span>
      </div>
    </div>
    
    <div className="mt-4">
      <h3 className={`text-2xl font-display font-bold tracking-tighter uppercase ${colorClass}`}>{title}</h3>
      <p className="text-xs font-medium opacity-70 uppercase tracking-widest mt-1">{category}</p>
    </div>
    
    <p className="text-xs opacity-50 leading-relaxed line-clamp-2 italic">
      "{description}"
    </p>
    
    <div className="mt-4 rounded-lg overflow-hidden h-28 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-netflix-red animate-pulse" />
        <span className="text-[9px] font-mono opacity-70 uppercase tracking-tighter">Live Arena Feed</span>
      </div>
    </div>
  </motion.div>
);

const CharacterCard = ({ name, stats, image }: { name: string, stats: number[], image: string }) => (
  <div className="flex flex-col gap-2 group cursor-pointer">
    <div className="aspect-[3/4] rounded-lg overflow-hidden relative border border-white/10 bg-white/5 group-hover:border-white/30 transition-all">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-2 left-2 right-2">
        <h4 className="text-[10px] font-display font-bold uppercase tracking-widest mb-1 text-white">{name}</h4>
        <div className="flex gap-0.5">
          {stats.map((val, i) => (
            <div key={i} className="h-0.5 flex-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${val}%` }}
                className="h-full bg-netflix-red shadow-[0_0_5px_rgba(229,9,20,0.5)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ChallengeItem = ({ id, title, active = false, difficulty, onClick }: { id: string, title: string, active?: boolean, difficulty: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer group ${active ? 'bg-netflix-red/10 border-netflix-red/50 shadow-[0_0_15px_rgba(229,9,20,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
  >
    <div className="flex items-center gap-3">
      <span className={`text-[10px] font-mono ${active ? 'text-netflix-red' : 'opacity-40'}`}>{id}</span>
      <div>
        <span className={`block text-xs font-display font-bold uppercase tracking-wider ${active ? 'text-white' : 'opacity-70'}`}>{title}</span>
        <span className="text-[8px] font-mono opacity-30 uppercase">Difficulty: {difficulty}</span>
      </div>
    </div>
    <ChevronDown size={14} className={`transition-transform ${active ? 'text-netflix-red rotate-180' : 'opacity-40 group-hover:translate-y-0.5'}`} />
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('Games');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState('02');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-netflix-red selection:text-white flex overflow-hidden relative">
      
      {/* Enrollment Modal */}
      <AnimatePresence>
        {isModalOpen && <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" style={{ top: '10%' }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" style={{ top: '90%' }} />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10" style={{ left: '5%' }} />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10" style={{ left: '95%' }} />
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-netflix-red/20 shadow-[0_0_10px_rgba(229,9,20,0.5)]"
        />

        {/* Mouse Coordinates */}
        <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-40">
          X: {mousePos.x.toString().padStart(4, '0')} / Y: {mousePos.y.toString().padStart(4, '0')}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-y-auto scrollbar-hide">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80&grayscale=true" 
            alt="Tokyo Shibuya" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-8">
          <div className="flex items-center gap-12">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-display font-black text-netflix-red tracking-tighter uppercase cursor-pointer"
            >
              Netflix
            </motion.h1>
            <div className="hidden md:flex items-center gap-8">
              {['Games', 'Characters', 'Survival Guide', 'Episodes'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-netflix-red relative group ${activeTab === tab ? 'text-netflix-red' : 'text-white/60'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab-underline" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-netflix-red" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[8px] font-mono opacity-40 uppercase tracking-widest">System Status</span>
              <span className="text-[10px] font-mono text-emerald-500 uppercase flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> Online
              </span>
            </div>
            <button className="glass px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all border-white/20">
              Enter the Arena
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 flex-1 flex flex-col justify-center px-12 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-netflix-red" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-netflix-red font-bold">Now Streaming Season 2</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tighter uppercase">
              Welcome to <br />
              <span className="text-netflix-red">Borderland</span> <br />
              <span className="text-4xl md:text-5xl opacity-80">— Every Game <br /> Has a Price</span>
            </h2>
            
            <div className="flex items-center gap-6 mt-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-borderland-blue neon-glow-blue px-10 py-5 rounded-full text-black flex items-center gap-3 group hover:scale-105 transition-all font-bold"
              >
                <Target size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">Join the Game</span>
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
              image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
            />
            <GameTypeCard 
              suit={Spade}
              title="Spades"
              category="Physical"
              description="Games of endurance and strength. Survival depends on physical prowess."
              colorClass="text-white"
              glowClass="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              image="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=600&q=80"
            />
            <GameTypeCard 
              suit={Club}
              title="Clubs"
              category="Teamwork"
              description="Games of cooperation and balance. Success requires collective effort."
              colorClass="text-borderland-blue"
              glowClass="hover:neon-glow-blue"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
            />
            <GameTypeCard 
              suit={Diamond}
              title="Diamonds"
              category="Intellectual"
              description="Games of logic and strategy. Victory is achieved through sharp wit."
              colorClass="text-borderland-red"
              glowClass="hover:neon-glow-red"
              image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </main>
      </div>

      {/* Sidebar Panel */}
      <aside className="w-80 border-l border-white/10 bg-black/40 backdrop-blur-3xl flex flex-col overflow-y-auto hidden xl:flex z-10">
        <div className="p-8 flex flex-col gap-10">
          
          {/* Visa Status Widget */}
          <VisaStatus />

          {/* Game Types Header */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Game Type Analysis</h3>
              <ChevronRight size={14} className="opacity-30" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[Heart, Spade, Club, Diamond].map((Icon, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square glass rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all border-white/5"
                >
                  <Icon size={18} className={i % 2 === 0 ? 'text-borderland-red' : 'text-borderland-blue'} />
                </motion.div>
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
              <CharacterCard 
                name="Chishiya" 
                stats={[95, 20, 100, 10]} 
                image="https://picsum.photos/seed/chishiya_vibe_1/400/600" 
              />
              <CharacterCard 
                name="Usagi" 
                stats={[40, 95, 60, 80]} 
                image="https://picsum.photos/seed/usagi_vibe_1/400/600" 
              />
              <CharacterCard 
                name="Arisu" 
                stats={[90, 40, 95, 30]} 
                image="https://picsum.photos/seed/arisu_vibe_1/400/600" 
              />
              <CharacterCard 
                name="Kuina" 
                stats={[30, 90, 50, 95]} 
                image="https://picsum.photos/seed/kuina_vibe_1/400/600" 
              />
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              Full Database <ChevronRight size={12} />
            </button>
          </section>

          {/* Game Challenges */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Active Challenges</h3>
              <Gamepad2 size={14} className="opacity-30" />
            </div>
            
            <div className="rounded-xl overflow-hidden mb-4 relative h-36 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=80&grayscale=true" 
                alt="Challenge" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-netflix-red animate-pulse" />
                  <span className="text-[8px] font-mono text-netflix-red font-bold uppercase tracking-widest">Active Arena</span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest">Shibuya District: Zone 4</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <ChallengeItem id="01" title="Tag" difficulty="5 of Spades" active={activeChallenge === '01'} onClick={() => setActiveChallenge('01')} />
              <ChallengeItem id="02" title="Hide and Seek" difficulty="7 of Hearts" active={activeChallenge === '02'} onClick={() => setActiveChallenge('02')} />
              <ChallengeItem id="03" title="Distance" difficulty="4 of Clubs" active={activeChallenge === '03'} onClick={() => setActiveChallenge('03')} />
              <ChallengeItem id="04" title="Witch Hunt" difficulty="J of Hearts" active={activeChallenge === '04'} onClick={() => setActiveChallenge('04')} />
            </div>
            
            <button className="w-full mt-6 py-3 bg-netflix-red/10 border border-netflix-red/20 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-netflix-red/20 transition-all text-netflix-red">
              Select More
            </button>
          </section>
        </div>
      </aside>
    </div>
  );
}
