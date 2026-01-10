import { useTranslation } from "react-i18next";

export default function Conditions() {
  const { t } = useTranslation();

  return (
    <section className="bg-white mb-12 sm:mb-16 md:mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITRE */}
        <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-athletics font-medium text-center mb-8 sm:mb-10 md:mb-12">
          {t("conditions.title")}
        </h2>

        {/* CONTENU */}
        <div className="text-xs sm:text-sm text-black/70 leading-relaxed space-y-3 sm:space-y-4 font-athletics">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <p key={i}>
              {i}. <strong>{t(`conditions.items.${i}.title`)} :</strong>{" "}
              {t(`conditions.items.${i}.text`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
