type ButtonProps = {
  title: string;
  type: "gradient" | "normal";
  color?: string;
  onClick?: () => void;
};

function Button({ title, type, color, onClick }: ButtonProps) {
  const baseClasses =
    "font-franklin text-base font-bold px-4 py-1.5 rounded-lg font-medium ";

  const gradientClasses =
    "bg-gradient-to-r  from-nxtprocessbg via-white to-nxtprocessbg text-black";

  const normalClasses = color ? `${color} text-white` : "bg-black text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        type === "gradient" ? gradientClasses : normalClasses
      }`}
    >
      {title}
    </button>
  );
}
export default Button;
