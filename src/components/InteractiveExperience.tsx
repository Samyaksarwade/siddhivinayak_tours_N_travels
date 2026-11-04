import React, { useState } from 'react';
import { 
  Volume2, 
  Snowflake, 
  Armchair, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Thermometer,
  ShieldCheck
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const InteractiveExperience: React.FC = () => {
  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSoundtrack, setActiveSoundtrack] = useState<'bhajan' | 'party' | 'ghat'>('bhajan');

  // AC dial state
  const [acTemp, setAcTemp] = useState<number>(20);

  // Seat recline state
  const [reclineAngle, setReclineAngle] = useState<number>(120);

  const soundtracks = {
    bhajan: {
      title: '॥ सुखकर्ता दुखहर्ता ॥ Ganpati Aarti & Bhajans',
      style: 'Devotional Sacred Harmony with Crisp Mic Clarity',
      icon: '🕉️'
    },
    party: {
      title: 'Bollywood & Dhol Barat Highway Hits',
      style: 'Punchy Deep Bass & Crystal Clear Highs',
      icon: '💃'
    },
    ghat: {
      title: 'Soothing Instrumental Ghat Ride Melodies',
      style: 'Relaxing Surround Sound for Ghat Serenity',
      icon: '🏔️'
    }
  };

  const whatsappExperienceUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Tours & Travels! I tried the interactive JBL sound and AC experience on your website. I want to book the 20 Seater AC Bus with this setup for our trip.'
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Interactive Onboard Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Experience the Comfort Before You Book
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Test the JBL Pro Sound Equalizer, arctic dual-zone air conditioning, and pushback recliners live on your screen.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. JBL Sound Simulator */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-purple-300 shadow-lg flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" /> JBL Sound Simulator
                </span>
                <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md">
                  Party on Wheels
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-brand-navy">Original JBL Audio</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect via Bluetooth, Aux, or use our wireless karaoke mic!
                </p>
              </div>

              {/* Equalizer Visualizer */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white flex flex-col items-center justify-center h-28 relative overflow-hidden">
                <div className="flex items-end gap-2.5 h-12">
                  <div className={`w-2.5 bg-orange-500 rounded-full transition-all ${isPlayingAudio ? 'eq-bar-1' : 'h-2'}`}></div>
                  <div className={`w-2.5 bg-amber-400 rounded-full transition-all ${isPlayingAudio ? 'eq-bar-2' : 'h-3'}`}></div>
                  <div className={`w-2.5 bg-emerald-400 rounded-full transition-all ${isPlayingAudio ? 'eq-bar-3' : 'h-2'}`}></div>
                  <div className={`w-2.5 bg-blue-400 rounded-full transition-all ${isPlayingAudio ? 'eq-bar-4' : 'h-4'}`}></div>
                  <div className={`w-2.5 bg-purple-400 rounded-full transition-all ${isPlayingAudio ? 'eq-bar-5' : 'h-2'}`}></div>
                </div>

                <div className="mt-2 text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                  <span>{soundtracks[activeSoundtrack].icon}</span>
                  <span className="truncate max-w-[200px]">{soundtracks[activeSoundtrack].title}</span>
                </div>
              </div>

              {/* Track Selector Buttons */}
              <div className="space-y-1.5">
                {(['bhajan', 'party', 'ghat'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveSoundtrack(key);
                      setIsPlayingAudio(true);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition flex items-center justify-between ${
                      activeSoundtrack === key
                        ? 'bg-purple-50 text-purple-900 border border-purple-300 shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{soundtracks[key].icon} {soundtracks[key].title.split(' ')[1] || key}</span>
                    <span className="text-[10px] text-purple-700 font-normal">Active</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="mt-4 w-full py-2.5 px-4 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? 'Pause Sound Simulator' : 'Play JBL Audio Experience'}</span>
            </button>
          </div>

          {/* 2. Arctic Dual AC Temperature Dial */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-blue-300 shadow-lg flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Snowflake className="w-4 h-4" /> Climate Control
                </span>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                  Dual Compressors
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-brand-navy">Arctic Chilled AC</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Adjust the cabin temperature to test our high-tonnage cooling system.
                </p>
              </div>

              {/* Temperature Display Gauge */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-4 text-white text-center flex flex-col items-center justify-center h-28 relative border border-blue-500/30">
                <div className="text-3xl font-black text-blue-300 flex items-center justify-center gap-1">
                  <Thermometer className="w-6 h-6 text-blue-400" />
                  <span>{acTemp}°C</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold mt-1">
                  {acTemp <= 19 ? '❄️ Arctic Freeze (Instant 3-Min Cooldown)' : '🌿 Gentle Comfort Cooling'}
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Target Cabin Temp:</span>
                  <span className="text-blue-700 font-black">{acTemp}°C</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="25"
                  step="1"
                  value={acTemp}
                  onChange={(e) => setAcTemp(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>16°C (Extreme Chill)</span>
                  <span>25°C (Mild)</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Individual roof louvers above every passenger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Tested to keep 20°C even in 45°C Vidarbha summer</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-center text-xs font-bold text-blue-900">
              Dual Zone Cooling Included in Base Rate
            </div>
          </div>

          {/* 3. Pushback Seat Recline Demo */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-orange-300 shadow-lg flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Armchair className="w-4 h-4" /> Pushback Seat Demo
                </span>
                <span className="text-[10px] font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded-md">
                  100% Recliners
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-brand-navy">Zero-Fatigue Seating</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Adjust the recline angle below to see our sleep comfort position.
                </p>
              </div>

              {/* Visual Seat Angle Indicator */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-center flex flex-col items-center justify-center h-28 relative border border-orange-500/30">
                <div className="text-2xl font-black text-orange-400">
                  {reclineAngle}° Recline Angle
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {reclineAngle >= 130 
                    ? '😴 Deep Sleep Position with Calf Support' 
                    : reclineAngle >= 110 
                    ? '☕ Relaxed Sightseeing Position' 
                    : '📖 Upright Reading Position'}
                </div>
              </div>

              {/* Slider for Recline */}
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Adjust Recline Angle:</span>
                  <span className="text-orange-600 font-black">{reclineAngle}°</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="135"
                  step="5"
                  value={reclineAngle}
                  onChange={(e) => setReclineAngle(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>90° (Upright)</span>
                  <span>135° (Max Sleep Recline)</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Extra 38-inch legroom to stretch without cramped knees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Padded headrest & soft leatherette cushioning</span>
                </div>
              </div>
            </div>

            <a
              href={whatsappExperienceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book This Setup on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
