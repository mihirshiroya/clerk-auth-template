import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const AuthPageLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default AuthPageLayout; 