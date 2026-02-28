import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  TrendingUp,
} from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1));
      if (e.key === "ArrowLeft") setCurrentSlide((p) => Math.max(p - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          onClick={() => setCurrentSlide((p) => Math.max(p - 1, 0))}
          className={`p-2 rounded-full transition-colors ${currentSlide === 0 ? "text-white/20 cursor-default" : "text-white/60 hover:text-white hover:bg-white/10"}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-3">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#D5B6F6] w-8 shadow-[0_0_10px_rgba(213,182,246,0.5)]" : "bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1))
          }
          className={`p-2 rounded-full transition-colors ${currentSlide === totalSlides - 1 ? "text-white/20 cursor-default" : "text-white/60 hover:text-white hover:bg-white/10"}`}
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-16 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          The Problem
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
          Traders are flying blind with disconnected tools, sacrificing privacy,
          and losing money to behavioral leaks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10 flex-grow max-h-[500px]">
        {/* Fragmented Logging */}
        <div className="bg-[#0a0a0a]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
            <Database className="w-7 h-7 text-[#D5B6F6]" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Fragmented Logging
          </h2>
          <ul className="space-y-5 text-zinc-400 text-lg leading-relaxed flex-grow">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  560M crypto traders
                </strong>{" "}
                rely on scattered spreadsheets.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  No ecosystem immersion
                </strong>
                —disconnected from daily devices.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  No glanceable widgets
                </strong>{" "}
                to track performance on the go.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Risk */}
        <div className="bg-[#D5B6F6]/[0.02] border border-[#D5B6F6]/20 rounded-3xl p-8 backdrop-blur-xl flex flex-col relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B6F6]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="bg-[#D5B6F6]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-[#D5B6F6]/20 relative z-10">
            <ShieldAlert className="w-7 h-7 text-[#D5B6F6]" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-6 relative z-10">
            Privacy Risk
          </h2>
          <ul className="space-y-5 text-zinc-400 text-lg leading-relaxed flex-grow relative z-10">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D5B6F6]/50 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  100% cloud-based tools
                </strong>{" "}
                force uploads, exposing your edge.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  0 Local-First Options
                </strong>
                —your proprietary data is held by third parties.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D5B6F6] shadow-[0_0_8px_rgba(213,182,246,0.6)] mt-2.5 shrink-0" />
              <span>
                FinTech breaches average{" "}
                <strong className="text-[#D5B6F6] font-medium">$6.08M</strong>{" "}
                per incident.
              </span>
            </li>
          </ul>
        </div>

        {/* Manual Reconstruction */}
        <div className="bg-[#0a0a0a]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
            <BrainCircuit className="w-7 h-7 text-zinc-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Zero Behavioral Context
          </h2>
          <ul className="space-y-5 text-zinc-400 text-lg leading-relaxed flex-grow">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                Tools lack context, forcing manual replay of order flows.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  No agentic intelligence
                </strong>{" "}
                to understand why you took a trade.
              </span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white font-medium">
                  No intelligent reminders
                </strong>{" "}
                to prevent costly physiological mistakes.
              </span>
            </li>
          </ul>
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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 h-full relative z-10 pb-16 items-center">
        {/* Left: The Solution Copy */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
              Introducing{" "}
              <span className="text-[#D5B6F6] drop-shadow-[0_0_20px_rgba(213,182,246,0.4)]">
                Wick
              </span>
            </h1>
            <p className="text-2xl text-zinc-400 font-medium">
              The first native, local-first trading journal for iOS.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="mt-1 shrink-0 bg-white/5 p-3 rounded-2xl border border-white/5 h-fit">
                <ArrowRight className="w-6 h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  0-Tap Ecosystem Sync
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Sub-5-tap manual entry or 0-tap Apple Intelligence logging.{" "}
                  <strong className="text-white font-medium">
                    Moves journaling from a post-session review to an in-trade
                    reflex
                  </strong>
                  , capturing psychological state and market context.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-1 shrink-0 bg-white/5 p-3 rounded-2xl border border-white/5 h-fit">
                <ArrowRight className="w-6 h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  100% Local-First Architecture
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Client-Side Compute. Your trading history is proprietary IP.
                  Strategies and P&L remain strictly local—
                  <strong className="text-white font-medium">
                    encrypted on your device, invisible to us.
                  </strong>
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-1 shrink-0 bg-white/5 p-3 rounded-2xl border border-white/5 h-fit">
                <ArrowRight className="w-6 h-6 text-[#D5B6F6]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Real-Time Behavioral AI
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Replaces manual analysis with immediate feedback.{" "}
                  <strong className="text-white font-medium">
                    Processes logs in real-time to identify behavioral leaks.
                  </strong>{" "}
                  Seamlessly imports venue data (e.g., Binance) for instant
                  retroactive analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The App Visual (Image) */}
        <div className="lg:w-[400px] flex items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-[#D5B6F6]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="w-[320px] rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(213,182,246,0.15)] border border-[#D5B6F6]/30 relative z-10 bg-[#0a0a0a] aspect-[1/2.16] flex items-center justify-center p-2">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#111]">
              <img
                src="/screenshot.png"
                alt="Wick App Interface"
                className="w-full h-full object-cover absolute inset-0 z-20"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="text-zinc-500 text-sm md:text-base text-center px-6 z-10 font-medium absolute inset-0 flex items-center justify-center flex-col gap-2">
                <span>Please upload your image as</span>
                <span className="text-[#D5B6F6] bg-[#D5B6F6]/10 px-3 py-1 rounded-full text-xs tracking-wider">
                  screenshot.png
                </span>
                <span>in the public folder.</span>
              </div>
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-14 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          Market Size & Projections
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
          A <strong className="text-white">$27B</strong> market with zero privacy-native competitors and accelerating distrust of cloud platforms.
        </p>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative z-10 pb-8">
        
        {/* Left: Concentric Circles Visual */}
        <div className="flex-1 w-full max-w-[400px] flex flex-col items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#D5B6F6]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative w-full aspect-square max-w-[420px] flex flex-col justify-end items-center">
            
            {/* TAM */}
            <div className="absolute bottom-0 w-full h-full rounded-full border border-[#D5B6F6]/10 bg-white/[0.01] flex justify-center transition-all hover:bg-white/[0.03]">
              <div className="mt-[15%] flex flex-col items-center text-center">
                <span className="text-white/40 font-semibold text-2xl tracking-wide">TAM</span>
                <span className="text-zinc-500 text-sm mt-1 uppercase tracking-widest font-medium">560M Traders</span>
              </div>
            </div>

            {/* SAM */}
            <div className="absolute bottom-0 w-[70%] h-[70%] rounded-full border border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.03] flex justify-center backdrop-blur-sm transition-all hover:bg-[#D5B6F6]/[0.05]">
              <div className="mt-[18%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6]/60 font-semibold text-2xl tracking-wide">SAM</span>
                <span className="text-zinc-400 text-sm mt-1 uppercase tracking-widest font-medium">65M Operators</span>
              </div>
            </div>

            {/* SOM */}
            <div className="absolute bottom-0 w-[40%] h-[40%] rounded-full border border-[#D5B6F6]/50 bg-[#D5B6F6]/10 flex justify-center shadow-[0_0_40px_rgba(213,182,246,0.15)] backdrop-blur-md transition-all hover:bg-[#D5B6F6]/20">
              <div className="mt-[28%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6] font-semibold text-2xl tracking-wide">SOM</span>
                <span className="text-white text-sm mt-1 uppercase tracking-widest font-medium">1.5M Target</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: The Data & Projections */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-xl">
          <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <Target className="w-6 h-6 text-[#D5B6F6]" />
              </div>
              <h3 className="text-white font-semibold text-2xl tracking-tight">Revenue Projections</h3>
            </div>
            
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Assuming a baseline SaaS extraction of <strong className="text-white bg-white/10 px-2 py-1 rounded-lg border border-white/10">$99/year</strong> for local-first intelligence:
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-white font-medium text-lg mb-1">0.1% SAM Penetration</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-medium">65,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white tracking-tight">$6.4M</div>
                  <div className="text-[#D5B6F6] text-xs uppercase tracking-widest font-medium">ARR</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-white font-medium text-lg mb-1">1.0% SAM Penetration</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-medium">650,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white tracking-tight">$64.3M</div>
                  <div className="text-[#D5B6F6] text-xs uppercase tracking-widest font-medium">ARR</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-6 rounded-2xl bg-[#D5B6F6]/10 border border-[#D5B6F6]/30 shadow-[0_4px_30px_rgba(213,182,246,0.1)] relative overflow-hidden mt-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#D5B6F6]" />
                <div>
                  <div className="text-[#D5B6F6] font-semibold text-xl mb-1">Target SOM Capture</div>
                  <div className="text-[#D5B6F6]/70 text-xs uppercase tracking-widest font-medium">1.5M Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white tracking-tight">$148.5M</div>
                  <div className="text-[#D5B6F6] text-xs uppercase tracking-widest font-medium">ARR</div>
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      {/* Title */}
      <div className="mb-16 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          Why Now
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
          The convergence of privacy demands and on-device neural engines makes <strong className="text-white">Wick</strong> the inevitable next step in trading infrastructure.
        </p>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10 flex-grow max-h-[400px]">
        
        {/* Column 1 */}
        <div className="bg-[#0a0a0a]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
            <HardDrive className="w-7 h-7 text-[#D5B6F6]" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">The Privacy Breaking Point</h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Traders are realizing their cloud-synced journals expose proprietary alpha to third parties. <strong className="text-white font-medium">Data sovereignty</strong> is no longer a feature—it's a strict requirement.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-[#0a0a0a]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B6F6]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="bg-[#D5B6F6]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-[#D5B6F6]/20 relative z-10">
            <Cpu className="w-7 h-7 text-[#D5B6F6]" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">Edge Compute is Ready</h3>
          <p className="text-zinc-400 text-lg leading-relaxed relative z-10">
            For the first time, mobile devices have the neural engines required to run complex behavioral AI locally. <strong className="text-white font-medium">Zero cloud latency, zero server costs.</strong>
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-[#0a0a0a]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
            <TrendingUp className="w-7 h-7 text-zinc-300" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Retail Institutionalization</h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Retail traders are treating trading like a business. They demand <strong className="text-white font-medium">institutional-grade analytics</strong> but refuse the clunky, desktop-era UX of legacy tools.
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function CompetitiveSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-14 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          Competitive Landscape
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
          The only trading journal that treats a trader's history as <strong className="text-white">proprietary IP</strong> rather than a product to be harvested.
        </p>
      </div>

      <div className="flex-grow flex flex-col justify-center relative z-10 w-full max-w-6xl mx-auto">
        <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="min-w-[800px] flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 px-8 py-6 border-b border-white/10 bg-white/5">
              <div className="text-[#D5B6F6] font-semibold text-xl tracking-tight">Feature</div>
              <div className="text-white font-bold text-2xl flex items-center gap-3">
                Wick <span className="text-xs bg-[#D5B6F6]/20 text-[#D5B6F6] px-2.5 py-1 rounded-full uppercase tracking-widest font-semibold border border-[#D5B6F6]/20">Us</span>
              </div>
              <div className="text-zinc-300 font-semibold text-xl tracking-tight">Cloud Journals <span className="block text-sm text-zinc-500 font-normal mt-1">TraderSync, Edgewonk</span></div>
              <div className="text-zinc-500 font-semibold text-xl tracking-tight">Spreadsheets</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/[0.05]">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-4 items-center px-8 py-6 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-4 text-[#D5B6F6]">
                  <div className="bg-[#D5B6F6]/10 p-2 rounded-lg border border-[#D5B6F6]/20"><HardDrive className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg">Data Ownership</span>
                </div>
                <div className="text-white font-semibold text-lg">100% Local-First</div>
                <div className="text-zinc-400 text-lg">Cloud-Stored</div>
                <div className="text-zinc-500 text-lg">Manual / Local</div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-4 gap-4 items-center px-8 py-6 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-4 text-[#D5B6F6]">
                  <div className="bg-[#D5B6F6]/10 p-2 rounded-lg border border-[#D5B6F6]/20"><Zap className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg">Logging Speed</span>
                </div>
                <div className="text-white font-semibold text-lg">Sub-5-Tap (In-Trade)</div>
                <div className="text-zinc-400 text-lg">Post-Session Manual</div>
                <div className="text-zinc-500 text-lg">Very Slow</div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-4 gap-4 items-center px-8 py-6 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-4 text-[#D5B6F6]">
                  <div className="bg-[#D5B6F6]/10 p-2 rounded-lg border border-[#D5B6F6]/20"><ShieldAlert className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg">Privacy Risk</span>
                </div>
                <div className="text-white font-semibold text-lg">Zero (Zero-Server)</div>
                <div className="text-zinc-400 text-lg">High (FinTech Breaches)</div>
                <div className="text-zinc-500 text-lg">Low</div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-4 gap-4 items-center px-8 py-6 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-4 text-[#D5B6F6]">
                  <div className="bg-[#D5B6F6]/10 p-2 rounded-lg border border-[#D5B6F6]/20"><BrainCircuit className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg">Automated Insights</span>
                </div>
                <div className="text-white font-semibold text-lg">Real-Time (On-Device)</div>
                <div className="text-zinc-400 text-lg">Retroactive Only</div>
                <div className="text-zinc-500 text-lg">None</div>
              </div>
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-14 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          The Market Gap
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
          The industry forces a false choice between <strong className="text-white">simplicity</strong> and <strong className="text-white">data ownership</strong>. Wick delivers both.
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 w-full max-w-4xl mx-auto pb-12">
        
        {/* Cartesian Plane Container */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] lg:max-h-[600px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.5)] p-12 overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 rounded-[2.5rem] opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#D5B6F6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }} />

          {/* Axes */}
          <div className="absolute left-1/2 top-10 bottom-10 w-px bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          <div className="absolute top-1/2 left-10 right-10 h-px bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

          {/* Axis Labels */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-zinc-400 font-semibold text-xs tracking-widest uppercase bg-[#0a0a0a] px-4 py-1 rounded-full border border-white/10">Simplicity</div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 font-semibold text-xs tracking-widest uppercase bg-[#0a0a0a] px-4 py-1 rounded-full border border-white/5">High Friction</div>
          
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 font-semibold text-xs tracking-widest uppercase bg-[#0a0a0a] py-1 px-4 rounded-full border border-white/5 whitespace-nowrap -rotate-90 origin-center -translate-x-1/2">Cloud Dependent</div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 font-semibold text-xs tracking-widest uppercase bg-[#0a0a0a] py-1 px-4 rounded-full border border-white/10 whitespace-nowrap rotate-90 origin-center translate-x-1/2">Local First</div>

          {/* Data Points */}
          
          {/* Wick */}
          <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group z-20">
            <div className="absolute -inset-8 bg-[#D5B6F6]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8D4FF] to-[#D5B6F6] shadow-[0_0_30px_rgba(213,182,246,0.8)] ring-4 ring-[#D5B6F6]/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-8 relative z-10" />
            <span className="text-[#D5B6F6] font-bold text-xl drop-shadow-[0_0_10px_rgba(213,182,246,0.5)] relative z-10">Wick</span>
          </div>

          {/* TradeZella */}
          <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">TradeZella</span>
          </div>

          {/* TraderSync */}
          <div className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white/60 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/50 font-medium text-sm group-hover:text-white transition-colors">TraderSync</span>
          </div>

          {/* Edgewonk */}
          <div className="absolute top-[65%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/40 font-medium text-sm group-hover:text-white transition-colors">Edgewonk</span>
          </div>

          {/* Spreadsheets */}
          <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-5 h-5 rounded-full bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/30 font-medium text-sm group-hover:text-white transition-colors">Spreadsheets</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
