import Qr from "../../../assets/imgs/qr-code.png";
import { useTranslation } from "react-i18next";
export default function QRCode() {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex items-center gap-2 md:gap-2.5 lg:gap-3 bg-[#06D432] px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl fixed right-6 md:right-8 lg:right-10 bottom-6 md:bottom-8 lg:bottom-10 shadow-lg z-50">
      <span className="text-xs md:text-sm font-semibold">
        {t("qr.download-line1")} <br />
        {t("qr.download-line2")}
      </span>
      <img src={Qr} alt="" className="w-[35px] h-[35px] md:w-[38px] md:h-[38px] lg:w-[40px] lg:h-[40px]" />
    </div>
  );
}