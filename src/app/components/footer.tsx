import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-primary dark:border-secondary">
      <span className="text-sm text-accent sm:text-center dark:accent">
        © 2024 PNnails™. Developed By William Bang.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-accent dark:accent sm:mt-0">
        <li>
          <Link href="/about" className="hover:underline me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link >
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
