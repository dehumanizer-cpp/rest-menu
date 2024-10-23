// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4">
              <h5 className="text-lg font-bold">Contact Us</h5>
              <p>123 Foodie Lane</p>
              <p>Flavor Town, FT 12345</p>
              <p>Email: contact@restaurant.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-bold">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-bold">Quick Links</h5>
              <div className="flex flex-col">
                <a href="/about" className="hover:text-gray-400">About Us</a>
                <a href="/menu" className="hover:text-gray-400">Menu</a>
                <a href="/reservations" className="hover:text-gray-400">Reservations</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  