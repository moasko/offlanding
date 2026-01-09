import PhonePeople from "../../assets/imgs/PhonePeople.png";
import QrCode from "../../assets/imgs/qr-code.png";
import AppStore from "../../assets/icons/appstore.png";
import PlayStore from "../../assets/icons/playstore.png";
import { useTranslation } from "react-i18next";

export default function Telechargement() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen ">

      {/* MOBILE */}
      <div className="md:hidden min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center gap-4 sm:gap-5 md:gap-6">

        {/* TITRE */}
        <p className="text-[28px] xs:text-[32px] sm:text-[36px] leading-[1.1] font-athletics font-medium text-black px-2">
          {t("download.title")}
        </p>

        {/* SOUS-TITRE */}
        <p className="text-xs sm:text-sm text-black/60 px-2">
          {t("download.subtitle")}
        </p>

        {/* BOUTONS */}
        <div className="flex flex-col xs:flex-row gap-3 mt-2 w-full max-w-sm px-2">

          {/* APP STORE */}
          <div className="flex items-center justify-center w-full xs:w-[150px] h-[52px] xs:h-[56px] gap-2.5 xs:gap-3 bg-[#121212] rounded-full text-white">
            <img src={AppStore} alt="App Store" className="w-5 h-5 xs:w-6 xs:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] xs:text-[10px] opacity-80">{t("download.appStore.small")}</span>
              <span className="text-[13px] xs:text-[14px] font-semibold">App Store</span>
            </div>
          </div>

          {/* GOOGLE PLAY */}
          <div className="flex items-center justify-center w-full xs:w-[150px] h-[52px] xs:h-[56px] gap-2.5 xs:gap-3 bg-[#121212] rounded-full text-white">
            <img src={PlayStore} alt="Google Play" className="w-5 h-5 xs:w-6 xs:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] xs:text-[10px] opacity-80">{t("download.playStore.small")}</span>
              <span className="text-[13px] xs:text-[14px] font-semibold">Google Play</span>
            </div>
          </div>

        </div>

        {/* IMAGE */}
        <img
          src={PhonePeople}
          alt="Wespee app"
          className="w-[220px] xs:w-[240px] sm:w-[260px] mt-4 sm:mt-6"
        />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex min-h-screen items-center justify-center px-6 lg:px-10">
        <div className="max-w-7xl w-full flex items-center justify-between gap-8">

          {/* IMAGE */}
          <div className="w-1/2 flex justify-center">
            <img
              src={PhonePeople}
              alt="Wespee app"
              className="w-[280px] lg:w-[320px] xl:w-[360px]"
            />
          </div>

          {/* CONTENU */}
          <div className="w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8">

            {/* TITRE */}
            <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
              <p className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1] font-athletics font-medium text-black">
                {t("download.titleDesktop-line1")} <br />
                {t("download.titleDesktop-line2")}<br />
                {t("download.titleDesktop-line3")}
              </p>

              <p className="text-xs sm:text-sm text-black/60">
                {t("download.subtitle")}
              </p>
            </div>

            {/* STORES */}
            <div className="flex gap-3 md:gap-4">

              {/* APP STORE */}
              <div className="flex items-center w-[180px] md:w-[195px] lg:w-[210.42px] h-[60px] md:h-[65px] lg:h-[69.5px] px-[24px] md:px-[26px] lg:px-[28.5px] py-[12px] md:py-[13px] lg:py-[13.53px] gap-[10px] md:gap-[11px] lg:gap-[11.4px] bg-[#121212] rounded-[70px] md:rounded-[75px] lg:rounded-[80.94px] text-white">
                <img src={AppStore} alt="App Store" className="w-[24px] md:w-[26px] lg:w-[28px] h-[24px] md:h-[26px] lg:h-[28px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] md:text-[10.5px] lg:text-[11px] opacity-80">{t("download.appStore.small")}</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold">App Store</span>
                </div>
              </div>

              {/* GOOGLE PLAY */}
              <div className="flex items-center w-[180px] md:w-[195px] lg:w-[210.42px] h-[60px] md:h-[65px] lg:h-[69.5px] px-[24px] md:px-[26px] lg:px-[28.5px] py-[12px] md:py-[13px] lg:py-[13.53px] gap-[10px] md:gap-[11px] lg:gap-[11.4px] bg-[#121212] rounded-[70px] md:rounded-[75px] lg:rounded-[80.94px] text-white">
                <img src={PlayStore} alt="Google Play" className="w-[24px] md:w-[26px] lg:w-[28px] h-[24px] md:h-[26px] lg:h-[28px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] md:text-[10.5px] lg:text-[11px] opacity-80">{t("download.playStore.small")}</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold">Google Play</span>
                </div>
              </div>

            </div>

            {/* QR */}
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
              <div className="bg-[#06D432] rounded-lg md:rounded-xl p-2.5 md:p-3">
                <img src={QrCode} alt="QR Code" className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]" />
              </div>

              <p className="text-[20px] md:text-[22px] lg:text-[25px] leading-[1] font-athletics text-black">
                {t("download.qrText-line1")}
                <br />
                {t("download.qrText-line2")}
                <br />
                {t("download.qrText-line3")}
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
