import { useState } from "react";

const WeightConverter = () => {
  const [kg, setKg] = useState("");
  const [lbs, setLbs] = useState("");

  
  const handleKgChange = (e) => {
    const value = e.target.value;

    setKg(value);

    if (value === "") {
      setLbs("");
      return;
    }

    setLbs((Number(value) * 2.20462));
  };

  const handleLbsChange = (e) => {
    const value = e.target.value;

    setLbs(value);

    if (value === "") {
      setKg("");
      return;
    }

    setKg((Number(value) / 2.20462));
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">
         Weight Converter
      </h1>

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Kilograms (KG)
        </label>

        <input type="number" value={kg} placeholder="Enter KG"
          onChange={handleKgChange}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"  />
      </div>


      <div>
        <label className="block font-semibold mb-2">
          Pounds (LBS)
        </label>

        <input type="number" value={lbs} placeholder="Enter Pounds"
          onChange={handleLbsChange}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"/>
      </div>
    </div>
  );
};

export default WeightConverter;