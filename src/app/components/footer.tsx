import Image from "next/image";
import visa from "@/app/assests/visa.png";
import Badge from "@/app/assests/Badge.png";
import paypal from "@/app/assests/paypal.png";
import applepay from "@/app/assests/applepay.png" ;
import Gpay from "@/app/assests/Gpay.png" ;
import Social from "@/app/assests/Social.png";
import SHOP from "@/app/assests/SHOP.CO.png";

const Footer = () => {
  return (
    <footer className="bg-[#F2F0F1] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-black">
          {/* About Section */}
          <div>
            <div className="gap-2 mb-4">
            <Image src={SHOP} alt='' />
          </div>
            <p className="  text-gray-600 mb-4 s">
              We have clothes that suit your style and make you proud to wear them.
            </p>
            <div className="flex space-x-4">
              <Image src={Social} alt="Social Media Icons" className="h-8" />
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold mb-4 hover:text-gray-800">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 hover:text-gray-800">HELP</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 hover:text-gray-800">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 SHOP.CO All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Image src={visa} alt="Visa Payment" className="h-8" />
              <Image src={Badge} alt="Mastercard Payment" className="h-8" />
              <Image src={paypal} alt="PayPal Payment" className="h-8" />
              <Image src={applepay} alt="Apple Pay" className="h-8" />
              <Image src={Gpay} alt="Google Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



