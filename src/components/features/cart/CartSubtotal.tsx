const CartSubtotal = () => {
  return (
    <div className="flex flex-col border-t border-t-gray-300 py-4 bg-stone-200 p-6 mb-4">
      <div className="flex flex-row justify-between pb-3 border-b-stone-300 border-b-2">
        <span className="text-lg font-medium">Subtotal</span>
        <span className="text-lg font-medium">$99.99</span>
      </div>
      <div className="flex flex-row justify-between pt-2">
        <div>Delivery to 1234</div>
        <span className="text-lg font-medium">$99.99</span>
      </div>
      <div className="pb-3 border-b-stone-300 border-b-2">on XXXX</div>
      <div className="flex flex-row justify-between pt-2">
        <span className="font-bold text-xl">Total</span>
        <span className="font-bold">$99.99</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="font-bold text-xl">GST</span>
        <span className="font-bold">$99.99</span>
      </div>
    </div>
  );
};

export default CartSubtotal;
