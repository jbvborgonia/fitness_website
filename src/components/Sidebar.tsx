import React from 'react';
import { Home, Compass, Activity, Calendar, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Compass, label: 'Discover' },
  { icon: Activity, label: 'Activity' },
  { icon: Calendar, label: 'Schedule' },
];

export function Sidebar() {
  return (
    <aside className="w-[80px] bg-surface border-r border-border flex flex-col items-center py-6 z-20 shrink-0">
      <div className="font-extrabold text-[20px] tracking-[1px] text-accent mb-8">P.</div>

      <nav className="flex-1 flex flex-col gap-4 w-full items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-[44px] h-[44px] flex items-center justify-center rounded-[12px] transition-colors border",
              item.active 
                ? "bg-accent-glow text-accent border-accent" 
                : "bg-glass text-text-dim border-border hover:bg-glass hover:text-text-main"
            )}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-4 mt-auto">
        <button 
          className="w-[44px] h-[44px] rounded-[12px] bg-glass border border-border text-text-dim hover:text-text-main flex items-center justify-center transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
