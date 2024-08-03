'use client';
import Address from './Address';
import DeliveryDetails from './DeliveryDetails';
import ShipmentDetails from './ShipmentDetails';

const PaymentDetails = () => {
  return (
    <main className="">
      <Address />
      <div className="mt-4 bg-white shadow-sm rounded-sm p-4 space-y-4">
        <DeliveryDetails />
        <ShipmentDetails />
      </div>

      <div className="mt-4 bg-white rounded-sm px-4 py-4 mb-14">
        <h1 className="uppercase font-[600]">Payment</h1>

        <div className="mt-4">
          <p className="font-[600]">Select a payment Gateway</p>
          <p>You will be redirected to our secure checkout page</p>

          <select
            className=" mt-8 border border-neutral-700 rounded-sm outline-none md:w-[300px] py-2 px-2"
            name=""
            id=""
          >
            <option value="paystack">Paystack</option>
            <option value="flutterwave">Flutterwave</option>
          </select>
        </div>
      </div>
    </main>
  );
};

export default PaymentDetails;
