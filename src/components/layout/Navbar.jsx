import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const isDownloadPage = location.pathname === "/telechargement";

  const { t } = useTranslation();
  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="font-athletics min-h-[40px] h-auto font-medium bg-[#A991F3] text-[#121212] text-[10px] sm:text-xs md:text-sm text-center py-2 px-3 sm:px-4 md:px-8 lg:px-16 flex items-center justify-center">
        {t("navbar.banner")}
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="">
            <img
              src={Logo}
              alt="Wespee"
              className="
                w-[120px] h-[30px]
                sm:w-[139px] sm:h-[35px]
                md:w-[155px] md:h-[40px]
                lg:w-[172.09px] lg:h-[45.33px]
              "
            />
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">


          {/* CTA */}
          {!isDownloadPage && (
            <a href="">
              <button
                className="
            hidden sm:inline-flex
            bg-[#06D432] text-[#121212]
            text-xs sm:text-sm
            px-4 sm:px-5 py-1.5 sm:py-2
            rounded-full
            hover:opacity-90 hover:scale-105 transition-all duration-200
            font-athletics font-medium
          "
              >
                {t("navbar.cta")}
              </button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
