import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Trash2, RefreshCw } from 'lucide-react';

interface DebugPanelProps {
  isDarkMode?: boolean;
}

const DebugPanel: React.FC<DebugPanelProps> = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [localStorageData, setLocalStorageData] = useState<Record<string, any>>({});

  const refreshLocalStorage = () => {
    const data: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          const value = localStorage.getItem(key);
          data[key] = value ? JSON.parse(value) : value;
        } catch {
          data[key] = localStorage.getItem(key);
        }
      }
    }
    setLocalStorageData(data);
  };

  useEffect(() => {
    refreshLocalStorage();
    
    // Auto-refresh every 2 seconds when visible
    const interval = isVisible ? setInterval(refreshLocalStorage, 2000) : null;
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  const clearAllLocalStorage = () => {
    localStorage.clear();
    refreshLocalStorage();
    console.log('🧹 All localStorage data cleared');
  };

  const clearSpecificItem = (key: string) => {
    localStorage.removeItem(key);
    refreshLocalStorage();
    console.log(`🧹 Removed localStorage item: ${key}`);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-800 text-cyan-400 hover:bg-slate-700 border border-slate-600'
              : 'bg-white text-cyan-600 hover:bg-gray-50 border border-gray-200'
          }`}
          title="Show Debug Panel"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96">
      <div className={`rounded-lg shadow-xl border ${
        isDarkMode 
          ? 'bg-slate-800 border-slate-600 text-white' 
          : 'bg-white border-gray-200 text-gray-900'
      }`}>
        <div className={`flex items-center justify-between p-3 border-b ${
          isDarkMode ? 'border-slate-600' : 'border-gray-200'
        }`}>
          <h3 className="text-sm font-medium">🛠️ Debug Panel</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={refreshLocalStorage}
              className={`p-1.5 rounded transition-colors ${
                isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`}
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={clearAllLocalStorage}
              className={`p-1.5 rounded transition-colors ${
                isDarkMode ? 'hover:bg-red-600' : 'hover:bg-red-100'
              } text-red-500`}
              title="Clear All"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className={`p-1.5 rounded transition-colors ${
                isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`}
              title="Hide"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-3 max-h-96 overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wide opacity-60 mb-2">
                localStorage ({Object.keys(localStorageData).length} items)
              </h4>
              
              {Object.keys(localStorageData).length === 0 ? (
                <p className="text-sm opacity-60">No data in localStorage</p>
              ) : (
                <div className="space-y-2">
                  {Object.entries(localStorageData).map(([key, value]) => (
                    <div
                      key={key}
                      className={`p-2 rounded text-xs border ${
                        isDarkMode ? 'border-slate-600 bg-slate-700/50' : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-cyan-500">{key}</span>
                        <button
                          onClick={() => clearSpecificItem(key)}
                          className="text-red-500 hover:text-red-400 ml-2"
                          title={`Remove ${key}`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                      <pre className={`text-xs overflow-x-auto ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugPanel;
