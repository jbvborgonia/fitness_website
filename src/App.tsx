import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { VideoPlayer } from './components/VideoPlayer';
import { DashboardStats } from './components/DashboardStats';
import { WorkoutGrid } from './components/WorkoutGrid';

export default function App() {
  return (
    <div className="flex h-screen bg-bg overflow-hidden text-text-main font-sans selection:bg-accent selection:text-bg">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden px-5 pb-5 pt-0">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col h-full gap-5">
          <TopBar />
          
          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-5 pb-5">
            {/* Row 1: Player & Leaderboard */}
            <VideoPlayer />
            
            {/* Row 2: Stats & Details Grid */}
            <div className="flex flex-col lg:flex-row gap-5 h-full lg:min-h-[220px]">
              <div className="flex-1 min-w-0">
                <DashboardStats />
              </div>
              <div className="w-full lg:w-[300px] xl:w-[280px] shrink-0">
                <WorkoutGrid />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

