import React from 'react';

export interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

interface QuickActionPanelProps {
  actions: Action[];
}

const QuickActionPanel: React.FC<QuickActionPanelProps> = ({ actions }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 cursor-pointer active:scale-95 transition-all group shadow-xs hover:shadow-sm"
          >
            <div className={`p-3 rounded-lg mb-3 ${action.color} group-hover:scale-110 transition-transform shadow-xs`}>
              {action.icon}
            </div>
            <span className="text-xs font-semibold text-gray-700 group-hover:text-indigo-600 text-center leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionPanel;
