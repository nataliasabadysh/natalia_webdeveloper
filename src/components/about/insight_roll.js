const insights = ['20+ Projects Completed', '6+ Years of Experience '];

export default function InsightRoll() {
  return (
    <div className="w-full bg-accent whitespace-nowrap overflow-hidden p-[3rem] lg:text-7xl text-4xl">
      <div className="animate-roll  w-full flex items-center justify-center capitalize tracking-wider roll">
        {insights.map((text, index) => (
          <div key={index}>
            * {text} <span className="px-4">|</span> *
          </div>
        ))}
      </div>
    </div>
  );
}
