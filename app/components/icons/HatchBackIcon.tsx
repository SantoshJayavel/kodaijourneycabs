type IconProps = {
  className?: string;
};

export default function HatchbackIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 13H2V16C2 16.55 2.45 17 3 17H4C4 18.1 4.9 19 6 19C7.1 19 8 18.1 8 17H16C16 18.1 16.9 19 18 19C19.1 19 20 18.1 20 17H21C21.55 17 22 16.55 22 16V12L19.5 8H17H8L5.5 8L3 11.5V13ZM6 17C5.45 17 5 16.55 5 16C5 15.45 5.45 15 6 15C6.55 15 7 15.45 7 16C7 16.55 6.55 17 6 17ZM18 17C17.45 17 17 16.55 17 16C17 15.45 17.45 15 18 15C18.55 15 19 15.45 19 16C19 16.55 18.55 17 18 17ZM7 12L8.5 9H16L17.5 12H7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
