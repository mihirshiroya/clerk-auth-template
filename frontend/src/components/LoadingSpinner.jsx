import { useTheme } from '../context/ThemeContext';

const LoadingSpinner = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex justify-center items-center min-h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="flex space-x-2">
        <div className={`w-3 h-3 rounded-full animate-bounce ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
        <div className={`w-3 h-3 rounded-full animate-bounce200 ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
        <div className={`w-3 h-3 rounded-full animate-bounce400 ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 