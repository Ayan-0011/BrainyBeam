const AddressCard = () => {
  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl shadow-soft p-6">
      <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" placeholder="First name" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
        <input type="text" placeholder="Last name" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
        <input type="email" placeholder="Email" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none md:col-span-2" />
        <input type="text" placeholder="Phone" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
        <textarea rows={3} placeholder="Full address" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none md:col-span-2" />
        <input type="text" placeholder="City" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
        <input type="text" placeholder="State" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
        <input type="text" placeholder="Postal code" className="p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none" />
      </div>
    </div>
  );
};

export default AddressCard;
