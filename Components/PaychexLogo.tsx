type PaychexLogoProps = {
  className?: string;
};

export default function PaychexLogo({
  className = "h-9 w-9",
}: PaychexLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 place-items-center rounded-xl border border-teal-200/30 bg-gradient-to-br from-teal-300 to-cyan-400 shadow-lg shadow-teal-500/20 ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="h-[72%] w-[72%]"
      >
        <path
          d="M12 30V10h9a7 7 0 0 1 0 14h-9"
          stroke="#063238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <circle cx="28" cy="29" r="2.5" fill="#F0FDFA" />
      </svg>
    </span>
  );
}
