export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2024{" "}
        <a href="https://itransition.com/" className="hover:underline">
          Itransition™ Course Project
        </a>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
