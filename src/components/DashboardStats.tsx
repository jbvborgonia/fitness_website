import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from 'recharts';
import { Activity, Heart, TrendingUp, Zap } from 'lucide-react';

const heartRateData = Array.from({ length: 20 }).map((_, i) => ({
  time: `${i}m`,
  bpm: 120 + Math.random() * 50 + (i > 10 ? 20 : 0) - (i > 15 ? 30 : 0),
}));

export function DashboardStats() {
  return (
    <div className="h-full surface-panel rounded-[24px] p-5 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold uppercase tracking-[1px] text-text-dim">Real-time Biometrics</span>
          <div className="flex items-center gap-3 mt-4">
            <div className="glass-panel px-3 py-2 rounded-[12px] flex flex-col justify-center min-w-[90px]">
               <div className="text-[10px] text-text-dim uppercase font-semibold mb-1">Calories</div>
               <div className="text-[16px] font-bold">480 kcal</div>
            </div>
            <div className="glass-panel px-3 py-2 rounded-[12px] flex flex-col justify-center min-w-[90px]">
               <div className="text-[10px] text-text-dim uppercase font-semibold mb-1">Output</div>
               <div className="text-[16px] font-bold text-accent">790 kj</div>
            </div>
          </div>
        </div>
        <div className="text-[32px] font-extrabold text-[#FF4B4B] leading-none shrink-0" style={{ letterSpacing: '-0.5px' }}>
          142 <span className="text-[14px] font-normal text-text-dim ml-1 tracking-normal">BPM</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[120px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={heartRateData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBpm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4B4B" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#FF4B4B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} domain={['dataMin - 10', 'dataMax + 10']} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(22, 24, 29, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#FF4B4B', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="bpm" 
              stroke="#FF4B4B" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBpm)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
