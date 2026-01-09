import People from "../../assets/imgs/FullPeople.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Vision({ overlayOpacity, textOpacity }) {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 w-full h-full overflow-hidden">

      {/* Background image */}
      <img
        src={People}
        alt="Wespee users"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay controlled by scroll */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className=" text-white text-center md:text-left">
          <motion.p
            style={{ opacity: textOpacity }}
            className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 font-athletics">
            {t("vision.tagline")}
          </motion.p>

          <motion.h2
            style={{ opacity: textOpacity }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-athletics font-medium leading-tight">
            {t("vision.title-line1")} <br />
            {t("vision.title-line2")} <br />
            {t("vision.title-line3")} <br />
            {t("vision.title-line4")}
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
