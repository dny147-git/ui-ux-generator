export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-125 w-125 bg-purple-400/20 blur-[120px] rounded-full" />
      <div className="absolute top-20 right-50 h-125 w-125 bg-pink-400/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-50 left-1/3 h-125 w-125 bg-blue-400/20 blur-[120px] rounded-full" />
      <div className="absolute top-50 left-1/2 h-125 w-125 bg-sky-400/20 blur-[120px] rounded-full" />
    </div>
  );
}
