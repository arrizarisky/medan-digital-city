import { Link } from "react-router-dom";
import { navConfig } from "@/constants/NavData";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const footerItems = navConfig.items;

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#C5C8B9] px-4 py-12 text-[#50652D]">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex w-full flex-col items-center justify-center text-center">
          <div className="mb-6 flex items-center justify-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold tracking-wide"
            >
              <img src={Logo} alt="" className="w-10 h-10 object-contain"/>
              <span>Medan Digital City</span>
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
            {footerItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="transition-colors hover:text-black"
                >
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="mx-auto mt-8 w-full max-w-6xl h-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C5C8B9, #C5C8B9 50%, transparent 0, transparent)",
              backgroundSize: "10px 1px",
            }}
          />
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="text-[#50652D]/80 order-2 sm:order-1">
            © {new Date().getFullYear()} Medan Digital City. All rights
            reserved.
          </p>

          <div className="flex gap-5 order-1 sm:order-2">
            <a
              href="#"
              className="text-[#50652D] hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
            </a>

            <a
              href="#"
              className="text-[#50652D] hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>

            <a
              href="#"
              className="text-[#50652D] hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>

            <a
              href="#"
              className="text-[#50652D] hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
