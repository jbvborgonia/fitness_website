import React from 'react';
import { Flame } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-[60px] flex justify-between items-center shrink-0 w-full mt-4">
      <div>
        <div className="text-[15px] font-medium">
          <span className="text-text-dim">Workouts /</span> Full Body Strength
        </div>
        <div className="text-[11px] text-text-dim mt-0.5">Welcome back, Alex</div>
      </div>

      <div className="flex items-center gap-5">
        {/* Daily Streak */}
        <div className="flex items-center gap-2 bg-[#ff5c00]/15 border border-[#ff5c00]/30 rounded-[20px] px-4 py-2">
          <Flame className="w-[16px] h-[16px] text-fire" />
          <span className="text-[14px] font-semibold text-fire tracking-wide uppercase">14 Day Streak</span>
        </div>

        {/* Profile */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="text-right">
            <div className="text-[14px] font-semibold">Alex Rivera</div>
            <div className="text-[11px] text-text-dim">Pro Member</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#333] border-2 border-accent overflow-hidden shrink-0">
            <img 
              src="https://picsum.photos/seed/user1/100/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
