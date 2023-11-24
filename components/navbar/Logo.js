import Link from "next/link.js";

export default function Logo() {
  return (
    <Link href="/">
      <svg
           className="cursor-pointer fill-green hover:fill-gray-700 dark:fill-mustard dark:hover:fill-white"
           height="2rem"
           viewBox="0 0 146 59"
           fill="none"
           
      >
       <text
            className="cursor-pointer fill-green hover:fill-gray-700 dark:fill-mustard dark:hover:fill-white"
            height="2rem"
            viewBox="0 0 146 59"
            xmlns="http://www.w3.org/2000/svg" x="15" y="45" font-size="42" fill="Red" font-family="sans">Vansh</text>
      </svg>
    </Link>
  );
}
