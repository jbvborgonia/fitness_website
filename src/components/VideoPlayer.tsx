import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, Heart, Crown } from 'lucide-react';
import { cn } from '../lib/utils';

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  avatar: string;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: '1', name: 'Sarah J.', score: 842, avatar: 'https://picsum.photos/seed/user2/50/50' },
  { id: '2', name: 'Mike R.', score: 815, avatar: 'https://picsum.photos/seed/user3/50/50' },
  { id: '3', name: 'Alex M.', score: 790, avatar: 'https://picsum.photos/seed/user1/50/50', isCurrentUser: true },
  { id: '4', name: 'Elena V.', score: 745, avatar: 'https://picsum.photos/seed/user4/50/50' },
  { id: '5', name: 'David C.', score: 710, avatar: 'https://picsum.photos/seed/user5/50/50' },
];

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {/* Video Placeholder Container */}
      <div className="relative flex-1 bg-black rounded-[24px] border border-border overflow-hidden group aspect-video">
        <img
          src="https://picsum.photos/seed/fitness_hiit/1920/1080"
          alt="Workout Video"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent mix-blend-overlay"></div>
        
        {/* Center Play Button Overlay if Paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_0_20px_var(--color-accent-glow)] text-black hover:scale-105 transition-all"
            >
              <Play className="w-8 h-8 ml-1 fill-black" />
            </button>
          </div>
        )}

        {/* Bottom Left Title overlaid inside video */}
        <div className="absolute bottom-6 left-6 flex flex-col">
          <h2 className="text-[24px] font-bold text-white mb-1">Advanced HIIT Blast</h2>
          <p className="text-[14px] text-text-dim">Instructor: Coach Sarah • 45 mins • 420 kcal</p>
        </div>

        {/* Bottom Player Controls */}
        <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-accent transition-colors text-white"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-text-dim" />
            </div>
            <button className="hover:text-accent transition-colors text-white">
               <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Leaderboard extracted into side column */}
      <div className="w-full lg:w-[300px] xl:w-[280px] glass-panel rounded-[24px] p-5 flex flex-col shrink-0 min-h-[300px] max-h-[400px] lg:max-h-none">
        <h3 className="text-[14px] uppercase tracking-[1px] text-text-dim mb-4 font-semibold">Live Leaderboard</h3>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col space-y-0">
          {leaderboardData.map((user, index) => (
            <div 
              key={user.id}
              className={cn(
                "flex items-center gap-3 py-3 border-b border-border last:border-0",
                user.isCurrentUser && "bg-accent-glow rounded-[12px] p-3 -mx-2 border-none mb-1 shadow-[0_0_10px_var(--color-accent-glow)]"
              )}
            >
              <div className="w-6 text-[12px] font-bold text-text-dim text-center">
                {index + 1}
              </div>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className={cn(
                  "w-8 h-8 rounded-full bg-surface object-cover border border-border",
                  user.isCurrentUser && "border-accent"
                )}
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-white truncate">
                  {user.isCurrentUser ? "You (Alex)" : user.name}
                </p>
              </div>
              <div className="text-[12px] text-accent font-semibold whitespace-nowrap">
                {user.score} pt
              </div>
              {user.isCurrentUser && (
                <div className="text-[10px] text-accent font-bold ml-1">▲</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
