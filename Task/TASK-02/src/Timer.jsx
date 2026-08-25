import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  const handleStart = () => {

    if (!seconds || seconds <= 0) return;

    setTimeLeft(Number(seconds));
    setIsRunning(true);
  };

  useEffect(() => {
    

    const timer = setInterval(() => {
      setTimeLeft((current) => {

        if (current <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    setSeconds("")

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Digital Kitchen Timer
        </h1>

        <input type="number" placeholder="Enter seconds" value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4" />

        <button onClick={handleStart}
          className="w-full bg-blue-500 text-white py-3 rounded-lg active:scale-95  hover:bg-blue-600" >
          Start Timer
        </button>

        <div className="text-center mt-8">
          <h2 className="text-6xl font-bold text-green-600">
            {timeLeft}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Timer;