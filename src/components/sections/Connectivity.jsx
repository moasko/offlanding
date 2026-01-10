import CommunityImage from "../../assets/imgs/CommunityImage.png";
import { useTranslation, Trans } from "react-i18next";

export default function Connectivity() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FFF] -mt-12 sm:-mt-16 lg:mt-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TEXTE  */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 lg:gap-16 items-start mb-6 sm:mb-8 md:mb-12 max-w-4xl w-full">
            {/* TITRE */}
            <div>
              <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-black/60 font-athletics font-normal">
                {t("connectivity.tagline")}
              </p>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-athletics font-medium leading-tight">
                <Trans i18nKey="connectivity.title" />
              </h2>
            </div>

            {/* DESCRIPTION (desktop) */}
            <div className="hidden md:block text-xs sm:text-sm md:text-base text-black/70 max-w-md font-athletics">
              <p>
                <Trans i18nKey="connectivity.description" />
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex justify-center mb-4 sm:mb-6 md:mb-0"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img
            src={CommunityImage}
            alt="Communauté Wespee"
            className="
              w-full
              h-[180px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto
              object-cover
              max-w-4xl
              md:rounded-xl
              rounded-none
            "
          />
        </div>

        {/* Desc MOBILE */}
        <div className="md:hidden text-xs sm:text-sm mb-6 sm:mb-8 font-athletics font-normal px-2">
          <p>
            <Trans i18nKey="connectivity.description" />
          </p>
        </div>
      </div>
    </section>
  );
}
