import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600"
    >
      {dark ? <Sun size={20} className="text-white" /> : <Moon size={20}  />}
    </button>
  );
};

export default ThemeToggle;
