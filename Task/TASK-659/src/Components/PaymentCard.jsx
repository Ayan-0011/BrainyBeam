const PaymentCard = ({ icon, title, defaultChecked }) => {
  return (
    <label className="group block">
      <div className={`p-4 rounded-2xl border ${defaultChecked ? 'border-indigo-300' : 'border-transparent'} bg-gradient-to-b from-white/60 to-white/40 shadow-md flex flex-col items-center gap-3 cursor-pointer transform transition duration-300 hover:scale-105`}> 
        <div className="p-2 rounded-lg bg-white/80">{icon}</div>
        <div className="font-medium">{title}</div>
        <input type="radio" name="payment" defaultChecked={defaultChecked} className="mt-2 accent-indigo-600" />
      </div>
    </label>
  );
};

export default PaymentCard;
