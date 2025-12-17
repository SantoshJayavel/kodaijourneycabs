export default function TempoTravellerIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 9L19 5H6L3 9V16C3 16.55 3.45 17 4 17H5C5 18.1 5.9 19 7 19C8.1 19 9 18.1 9 17H15C15 18.1 15.9 19 17 19C18.1 19 19 18.1 19 17H20C20.55 17 21 16.55 21 16V9ZM7 17C6.45 17 6 16.55 6 16C6 15.45 6.45 15 7 15C7.55 15 8 15.45 8 16C8 16.55 7.55 17 7 17ZM17 17C16.45 17 16 16.55 16 16C16 15.45 16.45 15 17 15C17.55 15 18 15.45 18 16C18 16.55 17.55 17 17 17ZM6 9L8 6H11V9H6ZM13 9V6H17L18 9H13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
