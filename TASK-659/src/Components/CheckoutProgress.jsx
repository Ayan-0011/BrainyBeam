const CheckoutProgress = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="bg-white/40 backdrop-blur rounded-3xl p-3 shadow-sm">
      <div className="flex items-center gap-4">
        {steps.map((s, i) => {
          const active = i + 1 === currentStep;
          const done = i + 1 < currentStep;
          return (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-transform duration-200 ${done ? 'scale-105 bg-indigo-600 text-white' : active ? 'bg-white text-indigo-600 border border-indigo-200' : 'bg-white/60 text-gray-500'}`}>
                {done ? '✓' : i + 1}
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">{s}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProgress;
