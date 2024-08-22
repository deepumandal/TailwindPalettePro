import { useTheme } from "./Hooks/useTheme";
import { cn } from "./utils/cn";
import { useState } from "react";

const App: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const ColorCards = [
    {
      id: 1,
      variable: "primary",
      className: "bg-primary",
      light: "bg-primary-light",
      dark: "bg-primary-dark",
    },
    {
      id: 2,
      variable: "secondary",
      className: "bg-secondary",
      light: "bg-secondary-light",
      dark: "bg-secondary-dark",
    },
    {
      id: 3,
      variable: "thitiary",
      className: "bg-thitiary",
      light: "bg-thitiary-light",
      dark: "bg-thitiary-dark",
    },
    {
      id: 9,
      variable: "background",
      className: "bg-background",
      light: "bg-background-light",
      dark: "bg-background-dark",
    },
    {
      id: 4,
      variable: "confirm",
      className: "bg-confirm",
      light: "bg-confirm-light",
      dark: "bg-confirm-dark",
    },
    {
      id: 5,
      variable: "alert",
      className: "bg-alert",
      light: "bg-alert-light",
      dark: "bg-alert-dark",
    },
    {
      id: 6,
      variable: "warning",
      className: "bg-warning",
      light: "bg-warning-light",
      dark: "bg-warning-dark",
    },
    {
      id: 7,
      variable: "error",
      className: "bg-error",
      light: "bg-error-light",
      dark: "bg-error-dark",
    },
    {
      id: 8,
      variable: "destructive",
      className: "bg-destructive",
      light: "bg-destructive-light",
      dark: "bg-destructive-dark",
    },
  ];

  return (
    <main className="bg-background min-w-screen min-h-screen w-full h-fit scrollbar flex flex-col items-center px-8 pb-16 pt-12 text-center overflow-auto">
      <header>
        <h1 className="text-5xl font-bold m-8 text-heading">
          Tailwind Palette Pro
        </h1>
        <h4 className="text-xl font-medium m-4 text-heading">
          Current theme: {theme}
        </h4>
        <article className="space-x-3 mt-4">
          <button
            className="px-5 py-2.5 m-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 shadow-lg"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            className="px-5 py-2.5 m-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300 shadow-lg"
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            className="px-5 py-2.5 m-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition duration-300 shadow-lg"
            onClick={() => setTheme("system")}
          >
            System
          </button>
        </article>
        <blockquote className="text-gray-600 text-lg mt-8 max-w-xl mx-auto">
          This project guides you on the best way to organize your Tailwind
          color palette, CSS color variables, and includes a small game with
          light and dark themes 😄
        </blockquote>
      </header>
      <section className="flex flex-wrap justify-center gap-8 my-16 mx-auto max-w-5xl">
        {ColorCards.map(({ id, variable, className, light, dark }) => (
          <article
            key={id}
            className={cn(
              "min-w-80 max-w-sm flex justify-center items-center aspect-video border rounded-lg shadow-md transform transition-transform duration-300",
              hoveredCardId === id
                ? theme === "dark"
                  ? light
                  : dark
                : className
            )}
            onMouseEnter={() => setHoveredCardId(id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <h3 className="text-2xl font-semibold transition-colors duration-300">
              {hoveredCardId === id
                ? theme === "dark"
                  ? light
                    ? light.charAt(0).toUpperCase() +
                      light.substring(1).toLowerCase().replace(/-/g, " ")
                    : ""
                  : dark
                  ? dark.charAt(0).toUpperCase() +
                    dark.substring(1).toLowerCase().replace(/-/g, " ")
                  : ""
                : variable}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
};

export default App;
