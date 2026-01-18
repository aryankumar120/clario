export function ClarioLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain/Intelligence icon */}
      <g>
        {/* Top arc */}
        <path
          d="M8 14C8 10.134 11.134 7 15 7C18.866 7 22 10.134 22 14"
          stroke="url(#gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left hemisphere */}
        <circle cx="11" cy="14" r="2.5" fill="url(#gradient)" />
        {/* Right hemisphere */}
        <circle cx="19" cy="14" r="2.5" fill="url(#gradient)" />
        {/* Center dot */}
        <circle cx="15" cy="16" r="1.5" fill="url(#gradient)" />
        {/* Bottom connections */}
        <path
          d="M11 16.5L11 22C11 23.657 12.343 25 14 25H16C17.657 25 19 23.657 19 22V16.5"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Signal lines */}
        <path
          d="M6 20L9 20"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M21 20L24 20"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7df57d" />
          <stop offset="100%" stopColor="#4ee1ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
