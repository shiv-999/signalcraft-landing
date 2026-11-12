type Name = "radar" | "pen" | "calendar" | "check" | "arrow" | "menu" | "close";

const paths: Record<Name, React.ReactNode> = {
  radar: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 12l6-6" /></>),
  pen: (<><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" /><path d="M14 6l3 3" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  check: (<><path d="M20 6L9 17l-5-5" /></>),
  arrow: (<><path d="M5 12h14M13 6l6 6-6 6" /></>),
  menu: (<><path d="M4 7h16M4 12h16M4 17h16" /></>),
  close: (<><path d="M6 6l12 12M18 6L6 18" /></>),
};

export default function Icon({ name, className = "h-5 w-5" }: { name: Name; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
