import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, 
  Cloud, 
  Lock, 
  ShieldAlert, 
  BrainCircuit, 
  TrendingDown,
  Database,
  Smartphone,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Target,
  Globe,
  Crosshair,
  Zap,
  HardDrive,
  Cpu,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentSlide(p => Math.min(p + 1, totalSlides - 1));
      if (e.key === 'ArrowLeft') setCurrentSlide(p => Math.max(p - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen bg-black font-sans selection:bg-[#D5B6F6]/30 overflow-hidden flex flex-col relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D5B6F6]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-grow relative w-full h-full">
        <AnimatePresence mode="wait">
            {currentSlide === 0 && <ProblemSlide key="problem" />}
            {currentSlide === 1 && <SolutionSlide key="solution" />}
            {currentSlide === 2 && <MarketSlide key="market" />}
            {currentSlide === 3 && <TailwindsSlide key="tailwinds" />}
            {currentSlide === 4 && <CompetitiveSlide key="competitive" />}
            {currentSlide === 5 && <CompetitiveMatrixSlide key="matrix" />}
          </AnimatePresence>
        </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-6 z-50 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <button 
            onClick={() => setCurrentSlide(p => Math.max(p - 1, 0))}
            className={`p-2 rounded-full transition-colors ${currentSlide === 0 ? 'text-white/20 cursor-default' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#D5B6F6] w-8 shadow-[0_0_10px_rgba(213,182,246,0.5)]' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setCurrentSlide(p => Math.min(p + 1, totalSlides - 1))}
            className={`p-2 rounded-full transition-colors ${currentSlide === totalSlides - 1 ? 'text-white/20 cursor-default' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
  );
}

function ProblemSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      {/* Title */}
      <div className="mb-12 lg:mb-20 relative z-10 shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white">
          The Problem: <span className="text-zinc-500">Traders Are Flying Blind</span>
        </h1>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 relative z-10 flex-grow">
        
        {/* Column 1: Fragmented Logging */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-end pb-8 lg:pb-10 lg:min-h-[240px]">
            <div className="flex items-end gap-6 mb-6">
              <span className="text-7xl sm:text-[100px] lg:text-[120px] font-display font-bold tracking-tighter text-white leading-[0.8]">
                560<span className="text-zinc-500">M</span>
              </span>
              <div className="relative pb-2 hidden sm:block">
                <FileSpreadsheet className="w-10 h-10 lg:w-12 lg:h-12 text-zinc-600 absolute -top-2 -left-4 opacity-40 -rotate-12" />
                <Database className="w-10 h-10 lg:w-12 lg:h-12 text-[#D5B6F6] relative z-10 drop-shadow-[0_0_15px_rgba(213,182,246,0.3)]" />
              </div>
            </div>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-white">Fragmented Logging</h2>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex-grow">
            <ul className="space-y-5 text-zinc-400 text-base lg:text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">560M crypto traders</strong> rely on scattered spreadsheets or nothing.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">No Apple ecosystem immersion</strong>—disconnected from daily devices.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">No glanceable widgets</strong> to track performance on the go.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: Privacy Risk */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-end pb-8 lg:pb-10 lg:min-h-[240px]">
            <div className="flex flex-col gap-4 lg:gap-5 mb-8">
              <div className="flex items-center gap-4 lg:gap-5 bg-[#D5B6F6]/10 border border-[#D5B6F6]/20 rounded-2xl p-4 lg:p-5 w-fit backdrop-blur-sm shadow-[0_0_20px_rgba(213,182,246,0.1)]">
                <Cloud className="w-8 h-8 lg:w-10 lg:h-10 text-[#D5B6F6] shrink-0" />
                <span className="font-display font-semibold text-[#D5B6F6] text-lg lg:text-xl tracking-tight">100% Cloud-Based</span>
              </div>
              <div className="flex items-center gap-4 lg:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-5 w-fit opacity-60">
                <Lock className="w-8 h-8 lg:w-10 lg:h-10 text-zinc-400 shrink-0" />
                <span className="font-display font-semibold text-zinc-400 text-lg lg:text-xl tracking-tight line-through decoration-zinc-500 decoration-2">0 Local-First Options</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-2.5 bg-zinc-900 border border-zinc-800 rounded-full px-4 lg:px-5 py-2 w-fit">
                <ShieldAlert className="w-4 h-4 text-[#D5B6F6]" />
                <span className="text-xs lg:text-sm font-mono text-zinc-300 tracking-wide uppercase">$6.08M Avg. Breach Cost</span>
              </div>
            </div>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-white">Privacy Risk</h2>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex-grow">
            <ul className="space-y-5 text-zinc-400 text-base lg:text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D5B6F6] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(213,182,246,0.6)]" />
                <span><strong className="text-white font-medium">100%</strong> of major journals force cloud uploads, exposing your edge.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">No privacy, no trust</strong>—your proprietary data is held by third parties.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span>FinTech breaches average <strong className="text-white font-medium">$6.08M</strong> per incident.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Manual Reconstruction */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-end pb-8 lg:pb-10 lg:min-h-[240px]">
            <div className="flex flex-col items-start gap-5 lg:gap-6 mb-8">
              <div className="relative">
                <BrainCircuit className="w-14 h-14 lg:w-[72px] lg:h-[72px] text-[#D5B6F6] drop-shadow-[0_0_15px_rgba(213,182,246,0.3)]" strokeWidth={1.5} />
                <div className="absolute -bottom-2 -right-4 bg-[#0a0a0a] rounded-full p-2 border border-white/10">
                  <TrendingDown className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-500" />
                </div>
              </div>
              <div className="inline-block bg-white text-black rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 w-fit shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <span className="font-display font-bold text-base lg:text-lg uppercase tracking-widest">
                  Zero Behavioral Context
                </span>
              </div>
            </div>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-white">Manual Reconstruction</h2>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex-grow">
            <ul className="space-y-5 text-zinc-400 text-base lg:text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                <span>Tools lack context, forcing manual replay of order flows.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">No agentic intelligence</strong> based on behavior to help you out.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                <span><strong className="text-white font-medium">No intelligent tips and reminders</strong> to prevent costly mistakes.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function SolutionSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-full relative z-10 pb-16">
        
        {/* Left: The Solution Copy */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-4">
              Introducing <span className="text-[#D5B6F6] drop-shadow-[0_0_20px_rgba(213,182,246,0.4)]">Wick</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-400 font-display">
              The first native, local-first trading journal for iOS.
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Direct Answer to Problem 1 */}
            <div className="flex gap-5">
              <div className="mt-1.5 shrink-0">
                 <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display font-medium text-white mb-2">0-Tap Ecosystem Sync</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Sub-5-tap manual entry or 0-tap Apple Intelligence logging. <strong className="text-white font-medium">Moves journaling from a post-session review to an in-trade reflex</strong>, capturing psychological state and market context.
                </p>
              </div>
            </div>

            {/* Direct Answer to Problem 2 */}
            <div className="flex gap-5">
              <div className="mt-1.5 shrink-0">
                 <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display font-medium text-white mb-2">100% Local-First Architecture</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Client-Side Compute. Your trading history is proprietary IP. Strategies and P&L remain strictly local—<strong className="text-white font-medium">encrypted on your device, invisible to us.</strong>
                </p>
              </div>
            </div>

            {/* Direct Answer to Problem 3 */}
            <div className="flex gap-5">
              <div className="mt-1.5 shrink-0">
                 <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display font-medium text-white mb-2">Real-Time Behavioral AI</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Replaces manual analysis with immediate feedback. <strong className="text-white font-medium">Processes logs in real-time to identify behavioral leaks.</strong> Seamlessly imports venue data (e.g., Binance) for instant retroactive analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The App Visual (Image) */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#D5B6F6]/20 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Image Container */}
          <div className="w-[300px] sm:w-[320px] rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(213,182,246,0.2)] border border-[#D5B6F6]/20 relative z-10 bg-[#0a0a0a] aspect-[1/2.16] flex items-center justify-center">
            <img 
              src="/screenshot.png" 
              alt="Wick App Interface" 
              className="w-full h-full object-cover absolute inset-0 z-20"
              onError={(e) => {
                // Fallback text if image is not found in public folder
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-zinc-500 text-sm font-mono text-center px-6 z-10">
              Please upload your image as <br/><span className="text-[#D5B6F6]">screenshot.png</span><br/> in the public folder.
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function MarketSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-10 lg:mb-12 relative z-10 shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-4">
          Market Size & Projections
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-400 font-display max-w-4xl leading-relaxed">
          A <strong className="text-white">$27B</strong> market with zero privacy-native competitors and accelerating distrust of cloud platforms.
        </p>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative z-10 pb-8">
        
        {/* Left: Concentric Circles Visual */}
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center relative">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D5B6F6]/10 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Circles (Bottom Aligned) */}
          <div className="relative w-full aspect-square max-w-[420px] flex flex-col justify-end items-center">
            
            {/* TAM */}
            <div className="absolute bottom-0 w-full h-full rounded-full border border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.02] flex justify-center transition-all hover:bg-[#D5B6F6]/[0.05]">
              <div className="mt-[12%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6]/60 font-display font-bold text-2xl">TAM</span>
                <span className="text-zinc-500 text-sm mt-1 font-mono uppercase tracking-wider">560M Traders</span>
              </div>
            </div>

            {/* SAM */}
            <div className="absolute bottom-0 w-[70%] h-[70%] rounded-full border border-[#D5B6F6]/40 bg-[#D5B6F6]/[0.05] flex justify-center backdrop-blur-sm transition-all hover:bg-[#D5B6F6]/10">
              <div className="mt-[15%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6]/80 font-display font-bold text-2xl">SAM</span>
                <span className="text-zinc-400 text-sm mt-1 font-mono uppercase tracking-wider">65M Operators</span>
              </div>
            </div>

            {/* SOM */}
            <div className="absolute bottom-0 w-[40%] h-[40%] rounded-full border border-[#D5B6F6] bg-[#D5B6F6]/20 flex justify-center shadow-[0_0_30px_rgba(213,182,246,0.2)] backdrop-blur-md transition-all hover:bg-[#D5B6F6]/30">
              <div className="mt-[25%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6] font-display font-bold text-2xl">SOM</span>
                <span className="text-white text-sm mt-1 font-mono uppercase tracking-wider">1.5M Target</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: The Data & Projections */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-xl">
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#D5B6F6]" />
              <h3 className="text-white font-display font-medium text-xl">Revenue Projections</h3>
            </div>
            
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Assuming a baseline SaaS extraction of <strong className="text-white bg-white/10 px-2 py-1 rounded-md">$99/year</strong> for local-first intelligence:
            </p>

            <div className="space-y-4">
              {/* 0.1% SAM */}
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D5B6F6]/30 transition-colors">
                <div>
                  <div className="text-white font-medium mb-1">0.1% SAM Penetration</div>
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">65,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-display font-bold text-white">$6,435,000</div>
                  <div className="text-[#D5B6F6] text-xs font-mono uppercase tracking-wider">ARR</div>
                </div>
              </div>

              {/* 1.0% SAM */}
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D5B6F6]/50 transition-colors">
                <div>
                  <div className="text-white font-medium mb-1">1.0% SAM Penetration</div>
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">650,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-display font-bold text-white">$64,350,000</div>
                  <div className="text-[#D5B6F6] text-xs font-mono uppercase tracking-wider">ARR</div>
                </div>
              </div>

              {/* Target SOM */}
              <div className="flex justify-between items-center p-5 rounded-2xl bg-[#D5B6F6]/10 border border-[#D5B6F6]/30 shadow-[0_0_20px_rgba(213,182,246,0.1)] relative overflow-hidden mt-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#D5B6F6]" />
                <div>
                  <div className="text-[#D5B6F6] font-bold mb-1 text-lg">Target SOM Capture</div>
                  <div className="text-zinc-400 text-xs font-mono uppercase tracking-wider">1.5M Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-display font-bold text-white">$148,500,000</div>
                  <div className="text-[#D5B6F6] text-xs font-mono uppercase tracking-wider">ARR</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

function TailwindsSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      {/* Title */}
      <div className="mb-12 lg:mb-20 relative z-10 shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-4">
          Why Now: <span className="text-zinc-500">The Edge Compute Era</span>
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-400 font-display max-w-4xl leading-relaxed">
          The convergence of privacy demands and on-device neural engines makes <strong className="text-white">Wick</strong> the inevitable next step in trading infrastructure.
        </p>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10 flex-grow">
        
        {/* Column 1 */}
        <div className="flex flex-col">
          <div className="mb-6">
            <HardDrive className="w-8 h-8 text-zinc-500" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-white mb-4">The Privacy Breaking Point</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Traders are realizing their cloud-synced journals expose proprietary alpha to third parties. <strong className="text-white">Data sovereignty</strong> is no longer a feature—it's a requirement.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <div className="mb-6">
            <Cpu className="w-8 h-8 text-zinc-500" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-white mb-4">Edge Compute is Ready</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            For the first time, mobile devices have the neural engines required to run complex behavioral AI locally. <strong className="text-white">Zero cloud latency, zero server costs.</strong>
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <div className="mb-6">
            <TrendingUp className="w-8 h-8 text-zinc-500" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-white mb-4">Retail Institutionalization</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Retail traders are treating trading like a business. They demand <strong className="text-white">institutional-grade analytics</strong> but refuse the clunky, desktop-era UX of legacy tools.
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function CompetitiveSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-10 lg:mb-12 relative z-10 shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-4">
          Competitive Landscape
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-400 font-display max-w-4xl leading-relaxed">
          The only trading journal that treats a trader's history as <strong className="text-white">proprietary IP</strong> rather than a product to be harvested.
        </p>
      </div>

      <div className="flex-grow flex flex-col relative z-10 w-full max-w-6xl mx-auto">
        
        <div className="w-full overflow-x-auto no-scrollbar pb-4">
          <div className="min-w-[800px] flex flex-col gap-3">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-4 px-6">
              <div className="text-[#D5B6F6] font-display font-semibold text-lg lg:text-xl">Feature</div>
              <div className="text-white font-display font-bold text-xl lg:text-2xl flex items-center gap-2">
                Wick <span className="text-[10px] bg-[#D5B6F6]/20 text-[#D5B6F6] px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">Us</span>
              </div>
              <div className="text-zinc-400 font-display font-semibold text-lg lg:text-xl">TraderSync / Edgewonk</div>
              <div className="text-zinc-500 font-display font-semibold text-lg lg:text-xl">Spreadsheets</div>
            </div>

            {/* Table Body */}
            {/* Row 1 */}
            <div className="grid grid-cols-4 gap-4 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/[0.08] border-x border-[#D5B6F6]/20 -z-10 group-hover:bg-[#D5B6F6]/[0.12] transition-colors" />
              <div className="flex items-center gap-3 text-[#D5B6F6]">
                <HardDrive className="w-5 h-5" />
                <span className="font-medium">Data Ownership</span>
              </div>
              <div className="text-white font-medium">100% Local-First</div>
              <div className="text-zinc-400">Cloud-Stored</div>
              <div className="text-zinc-500">Manual / Local</div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 gap-4 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/[0.08] border-x border-[#D5B6F6]/20 -z-10 group-hover:bg-[#D5B6F6]/[0.12] transition-colors" />
              <div className="flex items-center gap-3 text-[#D5B6F6]">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Logging Speed</span>
              </div>
              <div className="text-white font-medium">Sub-5-Tap (In-Trade)</div>
              <div className="text-zinc-400">Post-Session Manual</div>
              <div className="text-zinc-500">Very Slow</div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 gap-4 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/[0.08] border-x border-[#D5B6F6]/20 -z-10 group-hover:bg-[#D5B6F6]/[0.12] transition-colors" />
              <div className="flex items-center gap-3 text-[#D5B6F6]">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-medium">Privacy Risk</span>
              </div>
              <div className="text-white font-medium">Zero (Zero-Server)</div>
              <div className="text-zinc-400">High (FinTech Breaches)</div>
              <div className="text-zinc-500">Low</div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-4 gap-4 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/[0.08] border-x border-[#D5B6F6]/20 -z-10 group-hover:bg-[#D5B6F6]/[0.12] transition-colors" />
              <div className="flex items-center gap-3 text-[#D5B6F6]">
                <BrainCircuit className="w-5 h-5" />
                <span className="font-medium">Automated Insights</span>
              </div>
              <div className="text-white font-medium">Real-Time (On-Device)</div>
              <div className="text-zinc-400">Retroactive Only</div>
              <div className="text-zinc-500">None</div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function CompetitiveMatrixSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-10 lg:mb-12 relative z-10 shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-4">
          The Market Gap
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-400 font-display max-w-4xl leading-relaxed">
          The industry forces a false choice between <strong className="text-white">simplicity</strong> and <strong className="text-white">data ownership</strong>. Wick delivers both.
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 w-full max-w-4xl mx-auto pb-12">
        
        {/* Cartesian Plane Container */}
        <div className="relative w-full aspect-square max-h-[500px] lg:max-h-[600px] bg-[#0a0a0a] border border-white/5 rounded-3xl shadow-2xl p-8 lg:p-12">
          
          {/* Grid Background */}
          <div className="absolute inset-0 rounded-3xl opacity-20" style={{ backgroundImage: 'radial-gradient(#D5B6F6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* Axes */}
          <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/20" />
          <div className="absolute top-1/2 left-8 right-8 h-px bg-white/20" />

          {/* Axis Labels */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-zinc-400 font-display font-medium text-sm tracking-wider uppercase bg-[#0a0a0a] px-2">Simplicity</div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-600 font-display font-medium text-sm tracking-wider uppercase bg-[#0a0a0a] px-2">High Friction</div>
          
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 font-display font-medium text-sm tracking-wider uppercase bg-[#0a0a0a] py-2 whitespace-nowrap -rotate-90 origin-center">Cloud Dependent</div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 font-display font-medium text-sm tracking-wider uppercase bg-[#0a0a0a] py-2 whitespace-nowrap rotate-90 origin-center">Local First</div>

          {/* Data Points */}
          
          {/* Wick */}
          <div className="absolute top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-20">
            <div className="w-6 h-6 rounded-full bg-[#D5B6F6] shadow-[0_0_30px_rgba(213,182,246,0.8)] ring-4 ring-[#D5B6F6]/20 transition-transform group-hover:scale-110" />
            <span className="text-[#D5B6F6] font-display font-bold text-lg drop-shadow-md">Wick</span>
          </div>

          {/* TradeZella */}
          <div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110" />
            <span className="text-white font-display font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">TradeZella</span>
          </div>

          {/* TraderSync */}
          <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110" />
            <span className="text-white font-display font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">TraderSync</span>
          </div>

          {/* Edgewonk */}
          <div className="absolute top-[60%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110" />
            <span className="text-white font-display font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">Edgewonk</span>
          </div>

          {/* Spreadsheets */}
          <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110" />
            <span className="text-white font-display font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">Spreadsheets</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
