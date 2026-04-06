import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ProcessItem, ProcessColumn, ProcessData, ProcessDiagramProps } from '@/types/app/components/vehicle-tracking/ProcessDiagram';









export const ProcessDiagram = ({ 
  data, 
  accentColor = "blue", 
  badgeBgColor = "bg-blue-600" 
}: ProcessDiagramProps) => {
  const borderColorClass = `border-${accentColor}-400`;
  const iconBorderColorClass = `border-${accentColor}-300`;
  const iconBgColorClass = `bg-${accentColor}-500`;
  const connectorColorClass = `text-${accentColor}-400`;
  const finalIconBorderColorClass = `border-${accentColor}-400`;
  const finalIconBgColorClass = `bg-${accentColor}-600`;
  const finalConnectorColorClass = `border-${accentColor}-500`;

  // Fallback for custom colors that tailwind might not pick up if dynamic
  // Using explicit hex or classes for common colors like blue/orange
  const getBadgeClass = () => {
    if (badgeBgColor.startsWith('#')) return '';
    return badgeBgColor;
  };

  const badgeStyle = badgeBgColor.startsWith('#') ? { backgroundColor: badgeBgColor } : {};

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 overflow-x-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-8 min-w-[900px] lg:min-w-0 pb-12">
        
        {/* Render first 3 columns */}
        {data.columns.map((col, index) => (
          <React.Fragment key={index}>
            <div className="relative w-56 flex-shrink-0">
              <div className={`h-full border ${borderColorClass} rounded-[2rem] pt-12 pb-6 px-4 bg-white/50 backdrop-blur-sm flex flex-col justify-between items-center relative z-10`}>
                {/* Header Badge */}
                <div 
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white rounded-lg px-6 py-2 text-sm font-bold shadow-md whitespace-nowrap ${getBadgeClass()}`}
                  style={badgeStyle}
                >
                  {col.title}
                </div>
                
                <div className="flex flex-col gap-6 items-center w-full my-auto h-full justify-evenly">
                  {col.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div key={itemIdx} className="flex flex-col items-center text-center w-full">
                        <div className={`w-[84px] h-[84px] rounded-full border ${iconBorderColorClass} flex items-center justify-center mb-3 bg-white shadow-sm relative`}>
                          <div className={`w-12 h-12 rounded-full ${iconBgColorClass} flex items-center justify-center text-white`}>
                            <Icon size={24} strokeWidth={2} />
                          </div>
                        </div>
                        <p className="text-[11px] font-bold text-slate-800 leading-tight whitespace-pre-line px-1">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Render connector arrow if not the last of the 3 columns */}
            {index < data.columns.length - 1 && (
              <div className="hidden lg:flex items-center justify-center w-6 z-0">
                <div className={`h-[1px] w-full bg-${accentColor}-400 relative`}>
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-${accentColor}-400 rotate-45`}></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Special connector to final steps */}
        <div className="hidden lg:flex flex-col items-center justify-center w-12 z-0 relative">
          <svg className={`absolute left-0 w-full h-[50%] top-[40%] ${connectorColorClass}`} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0,100 L 50,100 L 50,0 L 100,0" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
            <polygon points="100,0 90,-5 90,5" fill="currentColor" />
          </svg>
        </div>

        {/* Final Steps Column (No wrapper box) */}
        <div className="flex flex-col items-center justify-between py-6 w-48 flex-shrink-0 z-10 h-full">
          {data.finalSteps.map((item, itemIdx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={itemIdx}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-[100px] h-[100px] rounded-full border ${finalIconBorderColorClass} flex items-center justify-center mb-4 bg-white/80 shadow-md`}>
                    <div className={`w-14 h-14 rounded-full ${finalIconBgColorClass} flex items-center justify-center text-white`}>
                      <Icon size={28} strokeWidth={2} />
                    </div>
                  </div>
                  <p className="text-sm font-black text-slate-800 leading-snug whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
                {/* Down Arrow separator */}
                {itemIdx < data.finalSteps.length - 1 && (
                  <div className={`h-10 border-l-[1.5px] ${finalConnectorColorClass} relative border-dashed my-2`}>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-[1.5px] border-r-[1.5px] ${finalConnectorColorClass} rotate-45`}></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
};
