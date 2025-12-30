export default function Skew3DButton() {
  return (
    <div className="relative inline-block">
      {/* Dark base */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#5a0035] skew-x-[-8deg] rounded-sm" />

      {/* Cyan side */}
      <div className="absolute right-[-12px] top-2 h-full w-4 bg-[#00a8cc] skew-y-[-10deg]" />

      {/* Main button */}
      <button className="relative px-14 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold skew-x-[-8deg] rounded-sm shadow-lg">
        CLICK ME
      </button>
    </div>
  );
}
