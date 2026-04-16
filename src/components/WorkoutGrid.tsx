import React from 'react';
import { Play, Activity, Dumbbell, Flower2, Bike } from 'lucide-react';

const categories = [
  { id: 'hiit', title: 'HIIT', count: '124 Classes', icon: Activity },
  { id: 'strength', title: 'Strength', count: '86 Classes', icon: Dumbbell },
  { id: 'yoga', title: 'Yoga', count: '95 Classes', icon: Flower2 },
  { id: 'cycle', title: 'Cycle', count: '42 Classes', icon: Bike },
];

export function WorkoutGrid() {
  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 grid-rows-2 gap-[12px] h-full">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group glass-panel rounded-[16px] flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-accent-glow hover:border-accent transition-all duration-300"
          >
            <cat.icon className="w-6 h-6 text-text-dim mb-2 group-hover:text-accent transition-colors" />
            <span className="text-[11px] font-bold text-text-main tracking-[0.5px] uppercase">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
