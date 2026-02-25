const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Outer Diamond Shape - Now in Green */}
      <div className="absolute inset-0 border-[3.5px] border-[#16a34a] rotate-45 rounded-sm"></div>

      {/* Internal Arch Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-10 h-10 -rotate-45">
          {/* Light Green Arch */}
          <path
            d="M 30 70 A 35 35 0 0 1 70 70"
            fill="none"
            stroke="#4ade80"
            strokeWidth="10"
            strokeLinecap="round"
            transform="translate(0, -10)"
          />
          {/* Darker Green Arch */}
          <path
            d="M 40 70 A 25 25 0 0 1 60 70"
            fill="none"
            stroke="#15803d"
            strokeWidth="10"
            strokeLinecap="round"
            transform="translate(10, -5)"
          />
        </svg>
      </div>
    </div>

    <div className="flex flex-col -gap-1">
      <span className="text-xl font-bold font-display text-slate-900 leading-none tracking-tight">flowreach</span>
      <span className="text-[10px] uppercase font-bold font-display text-primary tracking-[0.2em] leading-none mt-1">Marketing Solutions</span>
    </div>
  </div>
);

export default Logo;
