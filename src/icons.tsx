import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const make = (path: React.ReactNode) =>
  ({ size = 20, className = "", ...rest }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );

export const Home = make(<><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/></>);
export const Path = make(<><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.5 6h4a3 3 0 0 1 3 3v.5"/><path d="M15.5 12h-4a3 3 0 0 0-3 3v.5"/></>);
export const Play = make(<><path d="M6 4.5v15l13-7.5z" fill="currentColor"/></>);
export const Book = make(<><path d="M4 4h7a3 3 0 0 1 3 3v13"/><path d="M20 4h-3a3 3 0 0 0-3 3"/><path d="M4 4v16h7"/><path d="M20 4v16h-6"/></>);
export const Brain = make(<><path d="M9 4.5A2.5 2.5 0 0 0 6.5 7c-1.4.4-2.5 1.7-2.5 3.3 0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.2C4 16.3 5.3 17.7 7 18c.3 1.1 1.4 2 2.7 2H10V4.5Z"/><path d="M15 4.5A2.5 2.5 0 0 1 17.5 7c1.4.4 2.5 1.7 2.5 3.3 0 .8-.3 1.6-.8 2.2.5.6.8 1.4.8 2.2 0 1.6-1.3 3-3 3.3-.3 1.1-1.4 2-2.7 2H14V4.5Z"/></>);
export const Cards = make(<><rect x="3" y="6" width="14" height="14" rx="2.5"/><path d="M7 6V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1"/></>);
export const Calendar = make(<><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></>);
export const Chart = make(<><path d="M4 4v16h16"/><path d="M8 16V11M12 16V8M16 16v-3"/></>);
export const Users = make(<><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2A5 5 0 0 1 21 19"/></>);
export const Trophy = make(<><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a2 2 0 0 0 0 4h3M16 6h3a2 2 0 0 1 0 4h-3"/><path d="M10 13v2h4v-2M8 19h8M9 16h6l-1 3h-4z"/></>);
export const Flame = make(<><path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-1.5.7-2.6 1.5-3.5C10 9 12 7 12 3z"/><path d="M12 21a6 6 0 0 0 6-6c0-2.5-2-4-2-4s-1 3-4 3-3-2-3-2-3 1.5-3 3a6 6 0 0 0 6 6z"/></>);
export const Heart = make(<><path d="M12 20s-7-4.5-9.3-9.3C1.2 7.4 3.4 4 6.7 4c1.9 0 3.5 1 5.3 3 1.8-2 3.4-3 5.3-3 3.3 0 5.5 3.4 4 6.7C19 15.5 12 20 12 20z"/></>);
export const Star = make(<><path d="M12 3l2.6 5.6 6 .7-4.5 4.2 1.2 6L12 16.8 6.7 19.5l1.2-6L3.4 9.3l6-.7z"/></>);
export const Lock = make(<><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>);
export const Check = make(<><path d="M5 12.5l4.5 4.5L19 7"/></>);
export const ChevronRight = make(<><path d="M9 6l6 6-6 6"/></>);
export const ChevronDown = make(<><path d="M6 9l6 6 6-6"/></>);
export const Search = make(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>);
export const Bell = make(<><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16z"/><path d="M10 20a2 2 0 0 0 4 0"/></>);
export const Sparkles = make(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>);
export const Stethoscope = make(<><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M5 3h2M13 3h2"/><path d="M10 13v3a4 4 0 0 0 8 0v-1"/><circle cx="18" cy="14" r="2"/></>);
export const Pill = make(<><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/><path d="M8.5 7.5l8 8"/></>);
export const Syringe = make(<><path d="M14 4l6 6"/><path d="M17 7l-9 9-3 1 1-3 9-9"/><path d="M11 11l3 3"/></>);
export const Heartbeat = make(<><path d="M3 12h3l2-4 4 8 2-4h7"/></>);
export const Baby = make(<><circle cx="12" cy="8" r="4"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/><path d="M10 8h.01M14 8h.01"/></>);
export const Shield = make(<><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/></>);
export const Hospital = make(<><path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-5h6v5"/><path d="M12 7v4M10 9h4"/></>);
export const Download = make(<><path d="M12 4v12M7 11l5 5 5-5"/><path d="M5 20h14"/></>);
export const Edit = make(<><path d="M4 20h4l10-10-4-4L4 16v4z"/><path d="M14 6l4 4"/></>);
export const Send = make(<><path d="M21 3 3 10l7 3 3 7 8-17z"/><path d="M10 13l4-4"/></>);
export const Filter = make(<><path d="M4 5h16M7 12h10M10 19h4"/></>);
export const Clock = make(<><circle cx="12" cy="12" r="8.5"/><path d="M12 8v4l3 2"/></>);
export const Bookmark = make(<><path d="M6 3h12v18l-6-4-6 4z"/></>);
export const Menu = make(<><path d="M4 7h16M4 12h16M4 17h16"/></>);
export const Plus = make(<><path d="M12 5v14M5 12h14"/></>);
export const X = make(<><path d="M6 6l12 12M18 6 6 18"/></>);
export const Phone = make(<><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></>);
export const Settings = make(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.7a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1c0 .7.4 1.3 1 1.6.6.3 1.3.2 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1c-.5.5-.6 1.2-.3 1.8.3.6.9 1 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>);
export const Logout = make(<><path d="M14 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><path d="M16 8l4 4-4 4M9 12h11"/></>);
export const Lightning = make(<><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></>);
export const Note = make(<><path d="M5 4h11l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M16 4v4h4M8 13h8M8 17h6"/></>);
export const Eye = make(<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>);
export const Award = make(<><circle cx="12" cy="9" r="6"/><path d="M8 14l-2 7 6-3 6 3-2-7"/></>);
export const Volume = make(<><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></>);
export const Pause = make(<><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></>);
export const Forward = make(<><path d="M4 5l8 7-8 7zM14 5l8 7-8 7z"/></>);
export const Maximize = make(<><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></>);
export const Mic = make(<><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></>);
