// app/calculators/CalculatorsClient.tsx
"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Heart, Shield,
  Award, Users, Star, Sparkles, ExternalLink,
  Calculator, CalendarDays, Activity, Target,
  Scale, AlertCircle, X, Baby, Droplets,
  Phone, Mail, Clock, CheckCircle, Download,
  FileText, Printer, Share2, Gift, Crown,
  TrendingUp, Zap, BarChart3, LineChart,
  ClipboardCheck, Stethoscope, Syringe,
  Microscope, Dna, Pill, Thermometer,
  Menu, XCircle
} from "lucide-react";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ============================================
// CALCULATOR COMPONENTS - Responsive
// ============================================

function OvulationCalculator() {
  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState<null | { fertileDays: string[]; nextPeriod: string }>(null);

  const calculate = () => {
    if (!lastPeriod) return;
    const start = new Date(lastPeriod);
    const fertileStart = new Date(start);
    fertileStart.setDate(start.getDate() + cycleLength - 14 - 5);
    const fertileEnd = new Date(start);
    fertileEnd.setDate(start.getDate() + cycleLength - 14 + 5);
    const nextPeriod = new Date(start);
    nextPeriod.setDate(start.getDate() + cycleLength);
    
    setResult({
      fertileDays: [
        fertileStart.toLocaleDateString(),
        fertileEnd.toLocaleDateString()
      ],
      nextPeriod: nextPeriod.toLocaleDateString()
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Cycle Length (days)</label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
            min={21}
            max={35}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Last Period Date</label>
          <input
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
          />
        </div>
      </div>
      <button
        onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
      >
        Calculate Ovulation
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">Your Fertile Window</p>
          </div>
          <p className="text-sm text-ink-600 break-words">{result.fertileDays[0]} to {result.fertileDays[1]}</p>
          <p className="text-sm text-ink-600 mt-1 break-words">Next Period: {result.nextPeriod}</p>
        </div>
      )}
    </div>
  );
}

function PeriodCalculator() {
  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState<null | { nextPeriod: string; ovulation: string }>(null);

  const calculate = () => {
    if (!lastPeriod) return;
    const start = new Date(lastPeriod);
    const next = new Date(start);
    next.setDate(start.getDate() + cycleLength);
    const ovulation = new Date(start);
    ovulation.setDate(start.getDate() + cycleLength - 14);
    setResult({
      nextPeriod: next.toLocaleDateString(),
      ovulation: ovulation.toLocaleDateString()
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Cycle Length (days)</label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
            min={21}
            max={35}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Last Period Date</label>
          <input
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
          />
        </div>
      </div>
      <button
        onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
      >
        Calculate Period
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">Your Cycle Details</p>
          </div>
          <p className="text-sm text-ink-600 break-words">Next Period: <span className="font-medium">{result.nextPeriod}</span></p>
          <p className="text-sm text-ink-600 break-words">Ovulation Date: <span className="font-medium">{result.ovulation}</span></p>
        </div>
      )}
    </div>
  );
}

function DueDateCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState<null | { dueDate: string; weeks: number; trimester: string }>(null);

  const calculate = () => {
    if (!lastPeriod) return;
    const start = new Date(lastPeriod);
    const due = new Date(start);
    due.setDate(start.getDate() + 280);
    const today = new Date();
    const weeks = Math.floor((today.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000));
    const trimester = weeks < 13 ? "First" : weeks < 27 ? "Second" : "Third";
    setResult({
      dueDate: due.toLocaleDateString(),
      weeks: Math.max(0, weeks),
      trimester
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-medium text-ink-600 block mb-1">First Day of Last Period</label>
        <input
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
        />
      </div>
      <button
        onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
      >
        Calculate Due Date
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <Baby className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">Pregnancy Progress</p>
          </div>
          <p className="text-sm text-ink-600 break-words">Due Date: <span className="font-medium">{result.dueDate}</span></p>
          <p className="text-sm text-ink-600 break-words">Current Week: <span className="font-medium">{result.weeks} weeks</span></p>
          <p className="text-sm text-ink-600 break-words">Trimester: <span className="font-medium">{result.trimester}</span></p>
        </div>
      )}
    </div>
  );
}

function IVFFSuccessCalculator() {
  const [age, setAge] = useState(30);
  const [bmi, setBmi] = useState(22);
  const [previousAttempts, setPreviousAttempts] = useState(0);
  const [result, setResult] = useState<null | { successRate: number; recommendation: string }>(null);

  const calculate = () => {
    let rate = 65;
    if (age > 40) rate -= 25;
    else if (age > 35) rate -= 15;
    else if (age > 30) rate -= 5;
    if (bmi > 30 || bmi < 18.5) rate -= 10;
    else if (bmi > 25) rate -= 5;
    if (previousAttempts > 3) rate -= 10;
    else if (previousAttempts > 1) rate -= 5;
    
    rate = Math.max(15, Math.min(75, rate));
    
    const recommendation = rate > 50 ? "🌟 Good chance of success. Continue with your treatment plan." :
                          rate > 30 ? "📊 Moderate chance. Consider lifestyle improvements." :
                          "💡 Consult your doctor for personalized guidance.";
    
    setResult({ successRate: rate, recommendation });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
            min={18}
            max={50}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">BMI</label>
          <input
            type="number"
            value={bmi}
            onChange={(e) => setBmi(Number(e.target.value))}
            className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
            min={15}
            max={40}
            step={0.1}
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-ink-600 block mb-1">Previous IVF Attempts</label>
        <input
          type="number"
          value={previousAttempts}
          onChange={(e) => setPreviousAttempts(Number(e.target.value))}
          className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30"
          min={0}
          max={10}
        />
      </div>
      <button
        onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
      >
        Calculate IVF Success
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">Success Rate</p>
          </div>
          <p className="text-2xl font-bold text-rose-600">{result.successRate}%</p>
          <p className="text-sm text-ink-600 mt-1 break-words">{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}

function FertilityScoreCalculator() {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
  const [exercise, setExercise] = useState(3);
  const [stress, setStress] = useState(5);
  const [result, setResult] = useState<null | { score: number; level: string; advice: string }>(null);

  const calculate = () => {
    let score = 50;
    if (age < 25) score += 20;
    else if (age < 30) score += 15;
    else if (age < 35) score += 10;
    else if (age < 40) score += 5;
    else score -= 10;
    
    const bmi = weight / ((height/100) * (height/100));
    if (bmi >= 18.5 && bmi <= 24.9) score += 15;
    else if (bmi >= 25 && bmi <= 29.9) score += 5;
    else score -= 10;
    
    if (exercise >= 4) score += 15;
    else if (exercise >= 2) score += 8;
    else score -= 5;
    
    if (stress <= 3) score += 10;
    else if (stress <= 6) score += 3;
    else score -= 5;
    
    score = Math.max(10, Math.min(100, score));
    const level = score >= 70 ? "Excellent" : score >= 50 ? "Good" : "Needs Attention";
    const advice = level === "Excellent" ? "🌟 Maintain healthy lifestyle habits." :
                  level === "Good" ? "📈 Consider lifestyle improvements for better fertility." :
                  "💡 Consult a fertility specialist for personalized guidance.";
    
    setResult({ score, level, advice });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={18} max={50} />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={30} max={200} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={100} max={250} />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Exercise (days/week)</label>
          <input type="number" value={exercise} onChange={(e) => setExercise(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={0} max={7} />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-ink-600 block mb-1">Stress Level (1-10)</label>
        <input type="number" value={stress} onChange={(e) => setStress(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={1} max={10} />
      </div>
      <button onClick={calculate} className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base">
        Calculate Fertility Score
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">Fertility Score</p>
          </div>
          <p className="text-2xl font-bold text-rose-600">{result.score}/100</p>
          <p className="text-sm font-medium text-ink-800 break-words">Level: <span className={`${result.score >= 70 ? 'text-green-600' : result.score >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>{result.level}</span></p>
          <p className="text-sm text-ink-600 mt-1 break-words">{result.advice}</p>
        </div>
      )}
    </div>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
  const [result, setResult] = useState<null | { bmi: number; category: string; advice: string }>(null);

  const calculate = () => {
    const bmi = weight / ((height/100) * (height/100));
    const category = bmi < 18.5 ? "Underweight" :
                    bmi < 25 ? "Normal" :
                    bmi < 30 ? "Overweight" : "Obese";
    const advice = category === "Normal" ? "✅ Great! Maintain a healthy lifestyle." :
                  category === "Underweight" ? "🍎 Consider consulting a nutritionist." :
                  "🏃 Focus on balanced diet and regular exercise.";
    setResult({ bmi: Math.round(bmi * 10) / 10, category, advice });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={30} max={200} />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-600 block mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-50/30" min={100} max={250} />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base">
        Calculate BMI
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">BMI Result</p>
          </div>
          <p className="text-2xl font-bold text-rose-600">{result.bmi}</p>
          <p className="text-sm font-medium text-ink-800 break-words">Category: <span className={`${result.category === 'Normal' ? 'text-green-600' : 'text-amber-600'}`}>{result.category}</span></p>
          <p className="text-sm text-ink-600 mt-1 break-words">{result.advice}</p>
        </div>
      )}
    </div>
  );
}

function PCOSRiskCalculator() {
  const [symptoms, setSymptoms] = useState({
    irregularPeriods: false,
    excessiveHair: false,
    acne: false,
    weightGain: false,
    hairThinning: false,
    darkSkin: false
  });
  const [result, setResult] = useState<null | { risk: string; advice: string }>(null);

  const calculate = () => {
    const count = Object.values(symptoms).filter(Boolean).length;
    const risk = count >= 4 ? "High" : count >= 2 ? "Moderate" : "Low";
    const advice = risk === "Low" ? "✅ No significant PCOS indicators. Maintain healthy habits." :
                  risk === "Moderate" ? "📊 Some PCOS indicators present. Consult a doctor for proper evaluation." :
                  "⚠️ Multiple PCOS indicators detected. Please consult a gynecologist immediately.";
    setResult({ risk, advice });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.irregularPeriods} onChange={(e) => setSymptoms({...symptoms, irregularPeriods: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Irregular or missed periods</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.excessiveHair} onChange={(e) => setSymptoms({...symptoms, excessiveHair: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Excessive hair growth (face, chest, back)</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.acne} onChange={(e) => setSymptoms({...symptoms, acne: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Severe acne or oily skin</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.weightGain} onChange={(e) => setSymptoms({...symptoms, weightGain: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Unexplained weight gain</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.hairThinning} onChange={(e) => setSymptoms({...symptoms, hairThinning: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Hair thinning or loss</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-700 cursor-pointer hover:text-rose-600 transition-colors">
          <input type="checkbox" checked={symptoms.darkSkin} onChange={(e) => setSymptoms({...symptoms, darkSkin: e.target.checked})} className="h-4 w-4 rounded border-rose-300 text-rose-500 focus:ring-rose-400 flex-shrink-0" />
          <span className="break-words">Dark patches on skin (neck, armpits)</span>
        </label>
      </div>
      <button onClick={calculate} className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base">
        Assess PCOS Risk
      </button>
      {result && (
        <div className="mt-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-rose-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-ink-800">PCOS Risk Assessment</p>
          </div>
          <p className="text-sm font-medium text-ink-800 break-words">Risk Level: <span className={`${result.risk === 'Low' ? 'text-green-600' : result.risk === 'Moderate' ? 'text-amber-600' : 'text-rose-600'}`}>{result.risk}</span></p>
          <p className="text-sm text-ink-600 mt-1 break-words">{result.advice}</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// CONSULTATION & PDF COMPONENTS - Responsive
// ============================================

function ConsultationForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: ""
  });
  const [generated, setGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerated(true);
  };

  const handleDownload = () => {
    const content = `
      DIVINE IVF - Consultation Request
      ================================
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Age: ${formData.age}
      
      Message:
      ${formData.message}
      
      --------------------------------
      Date: ${new Date().toLocaleDateString()}
      Thank you for choosing Divine IVF
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Consultation_${formData.name.replace(/\s/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {!generated ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-medium text-ink-600 block mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-600 block mb-1">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-600 block mb-1">Phone *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-600 block mb-1">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm"
              placeholder="30"
              min={18}
              max={60}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-600 block mb-1">Your Message</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm resize-none"
              placeholder="Tell us about your fertility journey..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
          >
            Submit Consultation Request
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h4 className="text-lg font-bold text-ink-900">Request Submitted!</h4>
          <p className="text-sm text-ink-500 mt-1">Your consultation request has been received.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button
              onClick={() => setGenerated(false)}
              className="flex-1 py-3 bg-rose-50 text-rose-600 rounded-xl font-semibold hover:bg-rose-100 transition-all text-sm sm:text-base"
            >
              Edit Details
            </button>
          </div>
          <button
            onClick={onClose}
            className="w-full mt-3 py-2 text-sm text-ink-500 hover:text-ink-700 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================
// MODAL COMPONENT - Responsive
// ============================================

function CalculatorModal({ 
  isOpen, 
  onClose, 
  title, 
  icon: Icon, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  icon: any; 
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-[95vw] sm:max-w-md w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-rose-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-rose-100 p-3 sm:p-4 flex items-center justify-between rounded-t-2xl sm:rounded-t-3xl z-10">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md flex-shrink-0">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h3 className="font-bold text-ink-900 text-sm sm:text-base truncate">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="h-4 w-4 text-ink-600" />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT - Fully Responsive
// ============================================

export default function CalculatorsClient() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [showConsultation, setShowConsultation] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const calculators = [
    { 
      id: "ovulation",
      icon: Calendar, 
      title: "Ovulation Calculator",
      description: "Find your most fertile days",
      component: OvulationCalculator,
      gradient: "from-rose-500 to-pink-500",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500"
    },
    { 
      id: "period",
      icon: CalendarDays, 
      title: "Period Calculator",
      description: "Predict your next period",
      component: PeriodCalculator,
      gradient: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    { 
      id: "due-date",
      icon: Baby, 
      title: "Due Date Calculator",
      description: "Estimate your due date",
      component: DueDateCalculator,
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    { 
      id: "ivf-success",
      icon: Activity, 
      title: "IVF Success Calculator",
      description: "Estimate your IVF chances",
      component: IVFFSuccessCalculator,
      gradient: "from-rose-600 to-pink-600",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500"
    },
    { 
      id: "fertility-score",
      icon: Target, 
      title: "Fertility Score",
      description: "Evaluate your fertility health",
      component: FertilityScoreCalculator,
      gradient: "from-teal-500 to-emerald-500",
      iconBg: "bg-teal-50",
      iconColor: "text-teal-500"
    },
    { 
      id: "bmi",
      icon: Scale, 
      title: "BMI Calculator",
      description: "Check your BMI impact",
      component: BMICalculator,
      gradient: "from-indigo-500 to-blue-500",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    { 
      id: "pcos-risk",
      icon: AlertCircle, 
      title: "PCOS Risk Calculator",
      description: "Assess your PCOS risk",
      component: PCOSRiskCalculator,
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500"
    }
  ];

  const activeCalc = calculators.find(c => c.id === activeCalculator);
  const ActiveComponent = activeCalc?.component;

  const features = [
    { icon: Shield, text: "100% Confidential" },
    { icon: Award, text: "Expert Verified" },
    { icon: Clock, text: "Instant Results" },
    { icon: Users, text: "Trusted by 10K+" }
  ];

  return (
    <>
      {/* Hero Section - Responsive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 sm:py-16 md:py-20 lg:py-16 border-b border-rose-100">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-pink-200/20 to-rose-200/20 rounded-full blur-3xl" />
        
        {/* Decorative Elements - Hidden on small screens */}
        <div className="hidden lg:block absolute top-10 right-20 opacity-10 animate-float-slow">
          <Dna className="h-24 w-24 text-rose-400" />
        </div>
        <div className="hidden md:block absolute bottom-10 left-20 opacity-10 animate-float-medium">
          <Microscope className="h-16 w-16 sm:h-20 sm:w-20 text-rose-400" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Calculators" }
            ]} 
          />
          
          <div className="mt-6 sm:mt-8 md:mt-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-xs font-medium shadow-lg shadow-rose-200 mb-3 sm:mb-4 md:mb-5">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Smart Fertility Tools</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
              Understand Your{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
                Fertility
              </span>
              <br className="hidden sm:block" />
              <span className="text-ink-700">With Confidence</span>
            </h1>
            
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl mx-auto px-2">
              Track, calculate, and plan your path to parenthood with our suite of 
              expert-designed fertility calculators. Get instant insights and take control.
            </p>
            
          </div>
        </div>
      </section>

      {/* Features Bar - Responsive */}
      <section className="py-2 sm:py-3 md:py-4 bg-white/80 backdrop-blur-sm border-b border-rose-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 min-w-max">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-ink-600 whitespace-nowrap">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculators Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <SectionLabel>Our Fertility Calculators</SectionLabel>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink-900 mt-3 sm:mt-4">
              Choose Your Tool
            </h2>
            <p className="text-sm sm:text-base text-ink-400 mt-2 max-w-2xl mx-auto px-2">
              Click any calculator below to get started. All tools are free and provide instant results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-rose-100/50 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 text-left w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 to-pink-50/0 group-hover:from-rose-50/30 group-hover:to-pink-50/30 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${calc.iconBg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${calc.iconColor}`} />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-ink-900 group-hover:text-rose-600 transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-400 mt-1 leading-relaxed">
                      {calc.description}
                    </p>
                    <div className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-rose-500 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all">
                      Calculate Now
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 border border-rose-100/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-pink-100/30 to-rose-100/30 rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900 text-center mb-6 sm:mb-8 md:mb-10">
                How It Works in <span className="text-rose-600">4 Simple Steps</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: User, text: "Enter Your Details", color: "from-rose-500 to-pink-500" },
                  { icon: Calculator, text: "Run the Calculation", color: "from-pink-500 to-rose-500" },
                  { icon: Sparkles, text: "Get Instant Results", color: "from-rose-500 to-pink-500" },
                  { icon: ArrowRight, text: "Plan Your Next Step", color: "from-pink-500 to-rose-500" }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center relative">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-rose-200/50 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-ink-800">{step.text}</p>
                      {index < 3 && (
                        <div className="hidden md:block absolute -right-3 top-6 text-rose-300">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-rose-600 to-pink-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium mb-3 sm:mb-4 md:mb-5 border border-white/20">
            <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Expert Guidance Available</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Take the <span className="text-rose-200">Next Step</span>?
          </h2>
          
          <p className="text-white/90 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Book a consultation with our fertility experts for personalized advice and treatment planning.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setShowConsultation(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-rose-600 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              Book Consultation
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Us
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-5 md:mt-6 text-[10px] sm:text-xs text-white/80">
            <span className="flex items-center gap-1 sm:gap-1.5">
              <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Confidential Consultation
            </span>
            <span className="w-0.5 h-3 sm:h-3.5 rounded-full bg-white/30" />
            <span className="flex items-center gap-1 sm:gap-1.5">
              <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Expert Guidance
            </span>
            <span className="w-0.5 h-3 sm:h-3.5 rounded-full bg-white/30" />
            <span className="flex items-center gap-1 sm:gap-1.5">
              <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Personalized Care
            </span>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultation && (
        <CalculatorModal
          isOpen={true}
          onClose={() => setShowConsultation(false)}
          title="Book Consultation"
          icon={Calendar}
        >
          <ConsultationForm onClose={() => setShowConsultation(false)} />
        </CalculatorModal>
      )}

      {/* Calculator Modal */}
      {activeCalculator && activeCalc && ActiveComponent && (
        <CalculatorModal
          isOpen={true}
          onClose={() => setActiveCalculator(null)}
          title={activeCalc.title}
          icon={activeCalc.icon}
        >
          <ActiveComponent />
        </CalculatorModal>
      )}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}