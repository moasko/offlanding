import Qr from "../../../assets/imgs/qr-code.png";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function QRCode({ retracted = false }) {
  const { t } = useTranslation();

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`hidden md:flex items-center gap-2 md:gap-2.5 lg:gap-3 bg-[#06D432] fixed right-6 md:right-8 lg:right-10 bottom-6 md:bottom-8 lg:bottom-10 shadow-lg z-50 overflow-hidden
        ${retracted ? "p-3 rounded-md" : "px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl"}
      `}
    >
      <AnimatePresence mode="wait">
        {!retracted && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs md:text-sm font-semibold whitespace-nowrap"
          >
            {t("qr.download-line1")} <br />
            {t("qr.download-line2")}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.img
        layout
        src={Qr}
        alt=""
        className="w-[35px] h-[35px] md:w-[38px] md:h-[38px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
      />
    </motion.div>
  );
}