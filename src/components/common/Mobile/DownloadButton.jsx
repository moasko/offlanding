import Icon from "../../../assets/icons/icon.png";
import { useTranslation } from "react-i18next";

export default function DownloadButton() {
  const { t } = useTranslation();
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto">
      <button className="flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 bg-[#00C853] text-[11px] xs:text-[12px] font-semibold px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full w-[230px] xs:w-[245px] sm:w-[259px] h-[56px] xs:h-[60px] sm:h-[63px] shadow-2xl hover:bg-[#00B849] transition-colors">
        <img src={Icon} alt="" className="w-[30px] h-[30px] xs:w-[32px] xs:h-[32px] sm:w-[35px] sm:h-[35px]" />
        {t("cta.download")}
      </button>
    </div>
  );

}