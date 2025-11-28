export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#01020A] animate-[auroraShift_12s_ease-in-out_infinite]" />
      <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[160px] animate-[floatPulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-10 left-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[180px] animate-[floatPulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-200px] right-[-100px] h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-[200px] animate-[floatPulse_14s_ease-in-out_infinite]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#01020A] to-transparent" />
    </div>
  );
}


