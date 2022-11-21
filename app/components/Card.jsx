export default function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "w-full p-4 bg-white rounded-lg",
        "font-bold leading-none",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
