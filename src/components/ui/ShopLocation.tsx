"use client";
import { Raleway } from "next/font/google";
import Button from "@/components/ui/Button";

const raleway = Raleway({
  subsets: ["latin"],
});
const ShopLocation = () => {
  return (
    <div className="my-20 flex flex-row justify-center items-center gap-20">
      <div className="flex flex-col justify-between gap-12">
        <h1 className={`text-5xl ${raleway.className}`}>Visit our shop</h1>
        <div className="flex flex-col text-lg mt-5 gap-4 text-gray-500">
          <p>100 Murranji St, Hawker ACT 2614</p>
          <div>
            <p>Mon-Fri: 9am - 5pm</p>
            <p>Sat-Sun: 10am - 4pm</p>
          </div>

          <p>Phone: (02) 1234 5678</p>
        </div>
        <Button
          variant="findUs"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/100+Murranji+St,+Hawker+ACT+2614",
              "_blank"
            )
          }
        >
          Find Us on Google
        </Button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.332612315278!2d149.0353495757586!3d-35.24798017273019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17b27379bfa5d7%3A0x56f0f8c7f26d6ac0!2s100%20Murranji%20St%2C%20Hawker%20ACT%202614!5e0!3m2!1sen!2sau!4v1756966085912!5m2!1sen!2sau"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default ShopLocation;
