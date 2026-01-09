import QrCode from "../../assets/imgs/qr-code.png";
import LogoIcon from "../../assets/icons/icon.png";
import Icon from "../../assets/icons/icon.png";
import GroupImg from "../../assets/imgs/Group.png";
import GroupVm from "../../assets/imgs/GroupVm.png";
import { useTranslation } from "react-i18next";

export default function Community() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      {/* CONTENU DU HAUT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6">
          {/* LOGO */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#00C853]">
            <img src={LogoIcon} alt="Wespee" className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          {/* BRAND */}
          <div>
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-athletics font-medium text-black"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              Wespee
            </h2>
            <p
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl italic font-athletics font-bold text-black"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              it’s your world.
            </p>
          </div>

          {/* QR DESKTOP */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-[#06D432] px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-lg">
              <img src={QrCode} alt="QR code" className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <p
              className="text-xs text-black/60 font-athletics"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="900"
              data-aos-offset="0"
            >
              {t("community.download")}
            </p>
          </div>

        </div>
      </div>

      {/* IMAGES JUSTE EN BAS  */}
      <div className="mt-12 sm:mt-16 md:mt-20 w-full">
        {/* DESKTOP */}
        <div className="hidden md:block">
          <img
            src={GroupImg}
            alt="Wespee users"
            className="w-full object-cover"
          />
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <img
            src={GroupVm}
            alt="Wespee users"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
