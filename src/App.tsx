import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "motion/react";
import {
  Database,
  ShieldAlert,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  Cpu,
  ArrowRight,
  TrendingUp,
  Minus,
  Plus,
  Zap,
  Smartphone,
  Flame,
  Target,
} from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

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
      <div className="flex-grow relative w-full h-full">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && <CoverSlide key="cover" />}
          {currentSlide === 1 && <HookProblemSlide key="hook-problem" />}
          {currentSlide === 2 && <ParadigmShiftSlide key="paradigm-shift" />}
          {currentSlide === 3 && <WhyNowSlide key="why-now" />}
          {currentSlide === 4 && <MarketSlide key="market" />}
          {currentSlide === 5 && <CompetitiveTakedownSlide key="competitive" />}
          {currentSlide === 6 && <CompetitiveMatrixSlide key="matrix" />}
        </AnimatePresence>
      </div>

      {/* Navigation — arrows only, transparent */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 z-50">
        <button
          onClick={() => setCurrentSlide((p) => Math.max(p - 1, 0))}
          className={`p-2.5 rounded-full transition-colors ${
            currentSlide === 0
              ? "text-black/20 cursor-default"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1))
          }
          className={`p-2.5 rounded-full transition-colors ${
            currentSlide === totalSlides - 1
              ? "text-white/20 cursor-default"
              : currentSlide === 0
                ? "text-black/60 hover:text-black hover:bg-black/10"
                : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 0 — Cover
   ───────────────────────────────────────────── */
function CoverSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 bg-[#D5B6F6] flex flex-col items-start justify-center px-8 sm:px-12 lg:px-20"
    >
      {/* Icon placeholder */}
      <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center mb-8">
        <Flame className="w-8 h-8 text-black/50" />
      </div>

      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-black lowercase">
        wick
      </h1>

      <p className="mt-5 text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
        A zero-knowledge agentic ledger to interrupt behavioral variance, and enforce systematic execution.
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 1 — The Hook & The Problem
   ───────────────────────────────────────────── */
function HookProblemSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-12 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.1]">
          The Problem: Traders Are Blind To Their Own Variance
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Retail trading is a <strong className="text-white">$27B</strong> market, but the infrastructure is stuck in the past, forcing traders to choose between scattered spreadsheets or sacrificing their data sovereignty.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        <CardSpotlight className="p-6">
          <div className="mb-5">
            <Database className="w-6 h-6 text-zinc-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Win rate Delta at an all time high
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Across 560M crypto traders worldwide, most track executions in scattered spreadsheets and broker statements—if they track at all. Without a unified system, patterns remain invisible, turning improvement into gambling rather than data-driven strategy.
          </p>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <div className="mb-5">
            <ShieldAlert className="w-6 h-6 text-zinc-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Edge Compromise
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            <strong className="text-white font-medium">100% of incumbent journals (CoinMarketMan, TradeZella)</strong> operate on cloud architecture. The <strong className="text-[#D5B6F6] font-medium">$6.08M</strong> average cost of FinTech data breaches has created a massive privacy vacuum.
          </p>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <div className="mb-5">
            <BrainCircuit className="w-6 h-6 text-zinc-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-4">
            No modern solutions
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Crypto trader trapped in a behavioural loop they cannot see. Current tools show prices but lack behavioural context, forcing manual analysis of patterns that determine profitability. With <strong className="text-white font-medium">zero local-first solutions</strong> available, true execution insight remains inaccessible at scale.
          </p>
        </CardSpotlight>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 2 — The Paradigm Shift
   ───────────────────────────────────────────── */
function ParadigmShiftSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-12 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.1]">
          Wick: The First Local-First, AI-Native Trading Journal
        </h1> 
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          We have built a Swift-native powerhouse that replaces scattered spreadsheets and vulnerable cloud journals with a high-performance, private ecosystem designed to turn trading activity into a consistent win rate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 relative z-10 items-start">
        {/* Left Side: The Wick Way */}
        <div className="flex-[1.6] flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-[#D5B6F6]/20 flex items-center justify-center">
               <Plus className="w-5 h-5 text-[#D5B6F6]" />
             </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Wick Way</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CardSpotlight className="p-6 border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.02]">
              <h4 className="text-[#D5B6F6] font-bold text-base uppercase tracking-wider mb-2">Sovereign Intelligence</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                On-device LLMs (Apple Silicon) analyze your edge without data ever hitting our servers.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6 border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.02]">
              <h4 className="text-[#D5B6F6] font-bold text-base uppercase tracking-wider mb-2">Seamless Ecosystem</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Native iOS/macOS experience with Lock Screen widgets and encrypted iCloud Sync.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6 border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.02]">
              <h4 className="text-[#D5B6F6] font-bold text-base uppercase tracking-wider mb-2">Behavioral AI</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Our local AI identifies psychological patterns to move you toward systematic execution.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6 border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.02]">
              <h4 className="text-[#D5B6F6] font-bold text-base uppercase tracking-wider mb-2">Zero-Leak Infra</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Eliminating the cloud-middleman. No web2 vulnerabilities or data breaches—pure performance.
              </p>
            </CardSpotlight>
          </div>
        </div>

        {/* Right Side: Existing Cloud Journals */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
               <Minus className="w-5 h-5 text-zinc-500" />
             </div>
            <h3 className="text-xl font-semibold text-zinc-400 uppercase tracking-tight">Existing Journals</h3>
          </div>

          <CardSpotlight className="p-8 bg-white/[0.01] border-white/5">
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <ArrowRight className="mt-1 w-4 h-4 text-zinc-600 shrink-0" />
                <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  <span className="text-zinc-300 font-medium">Post-session entry</span> — the behavioral context of the trade is already gone
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="mt-1 w-4 h-4 text-zinc-600 shrink-0" />
                <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  <span className="text-zinc-300 font-medium">Proprietary strategies</span> stored on third-party servers — breach risk is real
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="mt-1 w-4 h-4 text-zinc-600 shrink-0" />
                <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  <span className="text-zinc-300 font-medium">Retroactive analytics</span> with no intelligence layer — tells you what happened, never why you won
                </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 3 — Why Now
   ───────────────────────────────────────────── */
function WhyNowSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-12 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.1]">
          Edge compute unlocks institutional analytics with zero server costs.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          The convergence of privacy demands and on-device neural engines makes <strong className="text-white">Wick</strong> the inevitable next step in trading infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        <CardSpotlight className="p-6">
          <div className="mb-5">
            <HardDrive className="w-6 h-6 text-zinc-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">The Catalyst</h3>
          <p className="text-zinc-400 text-base leading-relaxed">
            Traders now treat trading like a business and demand <strong className="text-white font-medium">data sovereignty</strong>. Cloud-synced journals expose proprietary alpha to third parties.
          </p>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <div className="mb-5">
            <Cpu className="w-6 h-6 text-zinc-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Edge Compute is Ready</h3>
          <p className="text-zinc-400 text-base leading-relaxed">
            For the first time, mobile devices have the neural engines required to run complex behavioral AI locally. <strong className="text-white font-medium">Zero cloud latency, zero server costs.</strong>
          </p>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <div className="mb-5">
            <TrendingUp className="w-6 h-6 text-zinc-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Retail Institutionalization</h3>
          <p className="text-zinc-400 text-base leading-relaxed">
            Retail traders demand <strong className="text-white font-medium">institutional-grade analytics</strong> but refuse the clunky, desktop-era UX of legacy tools.
          </p>
        </CardSpotlight>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 4 — Market Size & Revenue Projections
   ───────────────────────────────────────────── */
function MarketSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-10 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.1]">
          Market Size & Projections
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Zero privacy-native competitors in a massive market with accelerating distrust of cloud platforms.
        </p>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10 pb-8">

        {/* Left: Concentric Circles Visual */}
        <div className="flex-1 w-full max-w-[340px] flex flex-col items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-[360px] flex flex-col justify-end items-center">

            {/* TAM */}
            <div className="absolute bottom-0 w-full h-full rounded-full border border-[#D5B6F6]/10 bg-white/[0.01] flex justify-center transition-all hover:bg-white/[0.03]">
              <div className="mt-[15%] flex flex-col items-center text-center">
                <span className="text-white/40 font-semibold text-xl tracking-wide">TAM</span>
                <span className="text-zinc-500 text-xs mt-1 uppercase tracking-widest font-medium">560M Traders</span>
              </div>
            </div>

            {/* SAM */}
            <div className="absolute bottom-0 w-[70%] h-[70%] rounded-full border border-[#D5B6F6]/20 bg-[#D5B6F6]/[0.03] flex justify-center backdrop-blur-sm transition-all hover:bg-[#D5B6F6]/[0.05]">
              <div className="mt-[18%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6]/60 font-semibold text-xl tracking-wide">SAM</span>
                <span className="text-zinc-400 text-xs mt-1 uppercase tracking-widest font-medium">65M Operators</span>
              </div>
            </div>

            {/* SOM */}
            <div className="absolute bottom-0 w-[40%] h-[40%] rounded-full border border-[#D5B6F6]/50 bg-[#D5B6F6]/10 flex justify-center shadow-[0_0_40px_rgba(213,182,246,0.15)] backdrop-blur-md transition-all hover:bg-[#D5B6F6]/20">
              <div className="mt-[28%] flex flex-col items-center text-center">
                <span className="text-[#D5B6F6] font-semibold text-xl tracking-wide">SOM</span>
                <span className="text-white text-xs mt-1 uppercase tracking-widest font-medium">1.5M Target</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Revenue Projections */}
        <div className="flex-1 flex flex-col gap-5 w-full max-w-xl">
          <CardSpotlight className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-zinc-400" />
              <h3 className="text-white font-semibold text-xl tracking-tight">Revenue Projections</h3>
            </div>

            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Assuming a baseline SaaS extraction of <strong className="text-white bg-white/10 px-1.5 py-0.5 rounded-md border border-white/10 text-sm">$99/year</strong> for local-first intelligence:
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-white font-medium text-base mb-0.5">0.1% SAM Penetration</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">65,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white tracking-tight">$6.4M</div>
                  <div className="text-[#D5B6F6] text-[10px] uppercase tracking-widest font-medium">ARR</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-white font-medium text-base mb-0.5">1.0% SAM Penetration</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">650,000 Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white tracking-tight">$64.3M</div>
                  <div className="text-[#D5B6F6] text-[10px] uppercase tracking-widest font-medium">ARR</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-5 rounded-xl bg-[#D5B6F6]/10 border border-[#D5B6F6]/30 shadow-[0_4px_30px_rgba(213,182,246,0.1)] relative overflow-hidden mt-2">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#D5B6F6]" />
                <div>
                  <div className="text-[#D5B6F6] font-semibold text-lg mb-0.5">Target SOM Capture</div>
                  <div className="text-[#D5B6F6]/70 text-[10px] uppercase tracking-widest font-medium">1.5M Operators</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white tracking-tight">$148.5M</div>
                  <div className="text-[#D5B6F6] text-[10px] uppercase tracking-widest font-medium">ARR</div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 5 — The Competitive Takedown
   ───────────────────────────────────────────── */
function CompetitiveTakedownSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="mb-10 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.1]">
          Incumbents are treating trader history as a product to harvest.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Cloud-based competitors are built on an outdated, high-friction architecture.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 w-full max-w-5xl">
        <CardSpotlight className="w-full overflow-hidden">
          <div className="min-w-[700px] flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
              <div className="text-[#D5B6F6] font-semibold text-base tracking-tight">Feature</div>
              <div className="text-white font-bold text-lg flex items-center gap-2">
                Wick <span className="text-[10px] bg-[#D5B6F6]/20 text-[#D5B6F6] px-2 py-0.5 rounded-full uppercase tracking-widest font-semibold border border-[#D5B6F6]/20">Us</span>
              </div>
              <div className="text-zinc-300 font-semibold text-base tracking-tight">TradeZella & TraderSync</div>
              <div className="text-zinc-500 font-semibold text-base tracking-tight">Spreadsheets</div>
            </div>

            <div className="divide-y divide-white/[0.05]">
              <div className="grid grid-cols-4 gap-3 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-base text-[#D5B6F6]">Data Ownership</span>
                </div>
                <div className="text-white font-semibold text-base">100% Local-First</div>
                <div className="text-zinc-400 text-base">Cloud-Stored (Exposed)</div>
                <div className="text-zinc-500 text-base">Local</div>
              </div>

              <div className="grid grid-cols-4 gap-3 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-base text-[#D5B6F6]">Logging Speed</span>
                </div>
                <div className="text-white font-semibold text-base">Sub-5-Tap / 0-Tap</div>
                <div className="text-zinc-400 text-base">Post-Session Manual</div>
                <div className="text-zinc-500 text-base">Highly Manual</div>
              </div>

              <div className="grid grid-cols-4 gap-3 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-base text-[#D5B6F6]">Intelligence</span>
                </div>
                <div className="text-white font-semibold text-base">Real-Time AI (Edge)</div>
                <div className="text-zinc-400 text-base">Retroactive Only</div>
                <div className="text-zinc-500 text-base">None</div>
              </div>

              <div className="grid grid-cols-4 gap-3 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors relative group">
                <div className="absolute left-1/4 top-0 bottom-0 w-[25%] bg-[#D5B6F6]/5 -z-10 group-hover:bg-[#D5B6F6]/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-base text-[#D5B6F6]">Friction</span>
                </div>
                <div className="text-white font-semibold text-base">Seamless iOS Native</div>
                <div className="text-zinc-400 text-base">Clunky Web Apps</div>
                <div className="text-zinc-500 text-base">High Friction</div>
              </div>
            </div>
          </div>
        </CardSpotlight>

        <div className="flex items-start gap-3 px-1">
          <ArrowRight className="w-4 h-4 text-[#D5B6F6] mt-1 shrink-0" />
          <p className="text-zinc-400 text-base leading-relaxed">
            <strong className="text-white font-medium">The Bottom Line:</strong> Competitors like Edgewonk and TradeZella cannot pivot to match our privacy or real-time AI without entirely rebuilding their cloud-dependent architectures from scratch.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 6 — Competitive Matrix
   ───────────────────────────────────────────── */
function CompetitiveMatrixSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center max-w-7xl mx-auto w-full h-full"
    >
      <div className="flex-grow flex items-center justify-center relative z-10 w-full max-w-4xl mx-auto pb-8">

        {/* Cartesian Plane Container */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] lg:max-h-[560px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.5)] p-10 overflow-hidden">

          {/* Grid Background */}
          <div className="absolute inset-0 rounded-[2rem] opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#D5B6F6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }} />

          {/* Axes */}
          <div className="absolute left-1/2 top-10 bottom-10 w-px bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          <div className="absolute top-1/2 left-10 right-10 h-px bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

          {/* Axis Labels */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-zinc-400 font-semibold text-[10px] tracking-widest uppercase bg-[#0a0a0a] px-3 py-1 rounded-full border border-white/10">Simplicity</div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-600 font-semibold text-[10px] tracking-widest uppercase bg-[#0a0a0a] px-3 py-1 rounded-full border border-white/5">High Friction</div>

          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white font-semibold text-xs tracking-widest uppercase py-1 px-3 whitespace-nowrap z-30">Cloud Dependent</div>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white font-semibold text-xs tracking-widest uppercase py-1 px-3 whitespace-nowrap z-30">Local First</div>

          {/* Wick — top-right quadrant (simple + local-first) */}
          <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-20">
            <div className="w-7 h-7 rounded-full bg-[#D5B6F6] transition-all duration-300 group-hover:scale-110 relative z-10" />
            <span className="text-[#D5B6F6] font-bold text-lg relative z-10">Wick</span>
          </div>

          {/* TradeZella */}
          <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-4 h-4 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">TradeZella</span>
          </div>

          {/* TraderSync */}
          <div className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-4 h-4 rounded-full bg-white/60 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/50 font-medium text-sm group-hover:text-white transition-colors">TraderSync</span>
          </div>

          {/* Edgewonk */}
          <div className="absolute top-[65%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-4 h-4 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/40 font-medium text-sm group-hover:text-white transition-colors">Edgewonk</span>
          </div>

          {/* Spreadsheets */}
          <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group z-10">
            <div className="w-4 h-4 rounded-full bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
            <span className="text-white/30 font-medium text-sm group-hover:text-white transition-colors">Spreadsheets</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CardSpotlight Helper Component
   ───────────────────────────────────────────── */
export function CardSpotlight({
  children,
  radius = 350,
  color = "rgba(255, 255, 255, 0.05)",
  className = "",
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={`group/spotlight relative overflow-hidden bg-transparent border border-white/10 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovering ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
