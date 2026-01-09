import Logo from "../../assets/imgs/LogoFooter.png";

import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

        {/* LIGNE 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* LOGO */}
          <div className="flex justify-start">
            <img
              src={Logo}
              alt="Wespee"
              className="w-[118px] h-[24px]"
            />
          </div>

          {/* LIENS */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-sm text-black/70">
            <a href="#" className="hover:text-black transition font-athletics">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-black transition font-athletics">
              {t("footer.terms")}
            </a>
          </div>

        </div>

        {/* LIGNE 2 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-xs text-black/60 text-left font-athletics font-normal">
            {t("footer.rights")} ©2025{" "}
            <span className="font-athletics font-bold text-black">Bicents</span>
          </p>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex items-center justify-start md:justify-end gap-4 text-black">
            <FaYoutube className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaXTwitter className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaFacebookF className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaLinkedinIn className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaInstagram className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaTiktok className="w-4 h-4 cursor-pointer hover:opacity-70" />
          </div>

        </div>

      </div>
    </footer>
  );
}
