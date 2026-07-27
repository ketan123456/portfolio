import type { CSSProperties, ReactNode } from "react";
import {
  BootstrapIcon,
  CssIcon,
  HtmlIcon,
  JSIcon,
  MaterialIcon,
  NextIcon,
  ReactIcon,
  ReduxIcon,
  RestApiIcon,
  TSIcon,
  TailwindIcon,
} from "./icons";

type IconStyle = CSSProperties & {
  "--icon-accent": string;
  "--icon-accent-rgb": string;
};

function MonogramIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="5" y="5" width="54" height="54" rx="14" fill="currentColor" />
      <text
        x="32"
        y="38"
        fill="#08090B"
        fontFamily="Arial, sans-serif"
        fontSize={label.length > 2 ? 16 : 23}
        fontWeight="800"
        textAnchor="middle"
      >
        {label}
      </text>
    </svg>
  );
}

const customIcons: Record<string, ReactNode> = {
  "Vue.js": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M5 9h13l14 24L46 9h13L32 56 5 9Z" fill="#41B883" />
      <path d="M18 9h9l5 9 5-9h9L32 33 18 9Z" fill="#35495E" />
    </svg>
  ),
  "Nuxt.js": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M5 48 24 15c2-4 7-4 9 0l5 9 5-8c2-4 7-4 9 0l9 16c2 4-1 9-5 9H42l4 7H5Z"
        fill="#00DC82"
      />
      <path d="m18 48 15-26 15 26H18Z" fill="#0B1115" fillOpacity=".75" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="m32 4 24 14v28L32 60 8 46V18L32 4Z" fill="#5FA04E" />
      <path
        d="M24 42V23h6l9 11V23h6v19h-6L30 31v11h-6Z"
        fill="white"
      />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <ellipse cx="32" cy="32" rx="29" ry="18" fill="#777BB4" />
      <path
        d="M14 39 18 23h9c6 0 8 3 7 8-1 5-5 7-10 7h-3l-1 5h-7l1-4Zm9-11-1 5h3c2 0 3-1 3-3 0-1-1-2-3-2h-2Zm13 11 4-16h6l-1 5h4c5 0 7 3 6 8l-2 7h-6l2-7c0-2 0-3-2-3h-3l-2 10h-7l1-4Z"
        fill="white"
      />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <ellipse cx="32" cy="14" rx="22" ry="9" fill="currentColor" />
      <path d="M10 14v15c0 5 10 9 22 9s22-4 22-9V14" fill="currentColor" fillOpacity=".72" />
      <path d="M10 29v15c0 5 10 9 22 9s22-4 22-9V29" fill="currentColor" fillOpacity=".46" />
      <path d="M10 29c0 5 10 9 22 9s22-4 22-9M10 44c0 5 10 9 22 9s22-4 22-9" stroke="white" strokeOpacity=".7" strokeWidth="2" />
    </svg>
  ),
  jQuery: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M15 10c-7 14 1 30 15 36 10 5 21 3 29-4-7 14-24 20-38 13C5 48-2 28 7 13c2-3 5-6 8-8v5Z" fill="#0769AD" />
      <path d="M23 12c-4 9 1 19 10 23 7 3 15 2 20-3-4 9-15 13-24 9-11-5-16-18-10-28 1-2 3-4 5-5l-1 4Z" fill="#7ACEF4" />
    </svg>
  ),
  SCSS: <MonogramIcon label="S" />,
  GitHub: <MonogramIcon label="GH" />,
  "VS Code": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M46 5 22 27 11 19l-6 5 12 8L5 40l6 5 11-8 24 22 13-6V11L46 5Z"
        fill="#23A8F2"
      />
      <path d="m46 18-15 14 15 14V18Z" fill="#EAF8FF" fillOpacity=".86" />
    </svg>
  ),
  "Chrome DevTools": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M32 32 8 32A25 25 0 0 1 51 15L32 32Z" fill="#EA4335" />
      <path d="m32 32 12 21A25 25 0 0 1 8 32h24Z" fill="#34A853" />
      <path d="m32 32 19-17a25 25 0 0 1-7 38L32 32Z" fill="#FBBC05" />
      <circle cx="32" cy="32" r="11" fill="#4285F4" stroke="white" strokeWidth="3" />
    </svg>
  ),
  npm: <MonogramIcon label="npm" />,
  "Cross-Browser Testing": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="5" y="10" width="39" height="32" rx="5" stroke="currentColor" strokeWidth="4" />
      <path d="M6 19h37" stroke="currentColor" strokeWidth="4" />
      <rect x="24" y="26" width="35" height="28" rx="5" fill="#0B1115" stroke="currentColor" strokeWidth="4" />
      <path d="M25 35h33M12 15h2m5 0h2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  "Dashboard UI": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="6" y="7" width="52" height="50" rx="7" stroke="currentColor" strokeWidth="4" />
      <path d="M20 8v48M20 23h37M28 48V35m9 13V29m9 19v-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  "E-commerce UI": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M8 12h8l5 29h28l7-21H19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="51" r="5" fill="currentColor" />
      <circle cx="47" cy="51" r="5" fill="currentColor" />
      <path d="M29 29h16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  POS: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="8" y="6" width="48" height="52" rx="7" stroke="currentColor" strokeWidth="4" />
      <rect x="15" y="13" width="34" height="16" rx="3" fill="currentColor" fillOpacity=".35" stroke="currentColor" strokeWidth="3" />
      <path d="M18 39h4m8 0h4m8 0h4M18 48h4m8 0h4m8 0h4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  "Responsive Design": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="7" y="12" width="39" height="29" rx="4" stroke="currentColor" strokeWidth="4" />
      <path d="M18 51h17M26.5 41v10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <rect x="40" y="25" width="17" height="29" rx="4" fill="#0B1115" stroke="currentColor" strokeWidth="4" />
      <path d="M47 48h3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  Performance: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M10 45a23 23 0 1 1 44 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="m32 36 13-14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="36" r="5" fill="currentColor" />
      <path d="M15 45h34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),
  Accessibility: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="32" cy="10" r="6" fill="currentColor" />
      <path d="M13 22c12 5 26 5 38 0M32 23v15m0 0L20 55m12-17 12 17" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M18 14v30c0 6 5 10 11 10h7M18 24h17c6 0 11 5 11 11v6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="18" cy="11" r="6" fill="currentColor" />
      <circle cx="46" cy="47" r="6" fill="currentColor" />
      <circle cx="42" cy="24" r="6" fill="currentColor" />
    </svg>
  ),
};

const icons: Record<string, ReactNode> = {
  "React.js": <ReactIcon />,
  "Context API": <ReactIcon />,
  "Next.js": <NextIcon />,
  TypeScript: <TSIcon />,
  JavaScript: <JSIcon />,
  "JavaScript ES6+": <JSIcon />,
  "Tailwind CSS": <TailwindIcon />,
  Redux: <ReduxIcon />,
  "REST APIs": <RestApiIcon />,
  HTML: <HtmlIcon />,
  HTML5: <HtmlIcon />,
  "CSS / SCSS": <CssIcon />,
  CSS3: <CssIcon />,
  "Material UI": <MaterialIcon />,
  Bootstrap: <BootstrapIcon />,
  ...customIcons,
  "Responsive Web Design": customIcons["Responsive Design"],
};

const colors: Record<string, [string, string]> = {
  "React.js": ["#61dafb", "97, 218, 251"],
  "Context API": ["#61dafb", "97, 218, 251"],
  "Next.js": ["#ffffff", "255, 255, 255"],
  TypeScript: ["#3178c6", "49, 120, 198"],
  JavaScript: ["#f7df1e", "247, 223, 30"],
  "JavaScript ES6+": ["#f7df1e", "247, 223, 30"],
  "Vue.js": ["#41b883", "65, 184, 131"],
  "Nuxt.js": ["#00dc82", "0, 220, 130"],
  "Node.js": ["#5fa04e", "95, 160, 78"],
  PHP: ["#8993be", "137, 147, 190"],
  MySQL: ["#4479a1", "68, 121, 161"],
  jQuery: ["#7acef4", "122, 206, 244"],
  SCSS: ["#cf649a", "207, 100, 154"],
  "Tailwind CSS": ["#22d3ee", "34, 211, 238"],
  Redux: ["#9b70ff", "155, 112, 255"],
  "REST APIs": ["#62e8f2", "98, 232, 242"],
  HTML: ["#f16529", "241, 101, 41"],
  HTML5: ["#f16529", "241, 101, 41"],
  "CSS / SCSS": ["#4f75ff", "79, 117, 255"],
  CSS3: ["#4f75ff", "79, 117, 255"],
  "Material UI": ["#29b6f6", "41, 182, 246"],
  Bootstrap: ["#9a65ff", "154, 101, 255"],
  "Responsive Design": ["#62e8f2", "98, 232, 242"],
  "Responsive Web Design": ["#62e8f2", "98, 232, 242"],
  Performance: ["#ffb84d", "255, 184, 77"],
  Accessibility: ["#66e394", "102, 227, 148"],
  Git: ["#f05032", "240, 80, 50"],
  GitHub: ["#ffffff", "255, 255, 255"],
  "VS Code": ["#23a8f2", "35, 168, 242"],
  "Chrome DevTools": ["#4285f4", "66, 133, 244"],
  npm: ["#cb3837", "203, 56, 55"],
  "Cross-Browser Testing": ["#b38cff", "179, 140, 255"],
  "Dashboard UI": ["#62e8f2", "98, 232, 242"],
  "E-commerce UI": ["#ffb84d", "255, 184, 77"],
  POS: ["#66e394", "102, 227, 148"],
};

export default function TechIcon3D({ name }: { name: string }) {
  const [accent, accentRgb] = colors[name] ?? ["#62e8f2", "98, 232, 242"];
  const style: IconStyle = {
    "--icon-accent": accent,
    "--icon-accent-rgb": accentRgb,
  };

  return (
    <div className="tech-icon-3d" style={style} aria-hidden>
      <div className="tech-icon-depth" />
      <div className="tech-icon-face">{icons[name]}</div>
    </div>
  );
}
