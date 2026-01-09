import PersonImage from "../../assets/imgs/PersonImage.png";
import UiImage from "../../assets/imgs/PUB.jpeg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Features() {
  const { t } = useTranslation();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#FAFAF5] py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOC TEXTE */}
        <div className="flex mb-8 sm:mb-10 md:mb-12 md:ml-10">
          <motion.div
            className="w-full max-w-[550px] mx-auto md:mx-0 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 text-black/60 ml-0 md:ml-0"
            >
              {t("features.tagline")}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-athletics mb-4 sm:mb-5 md:mb-6 ml-0 md:ml-0 leading-tight"
            >
              {t("features.title-line1")}{" "}
              <span className="hidden md:inline">
                <br />
              </span>{" "}
              {t("features.title-line2")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                hidden
                md:block
                w-full
                md:max-w-xl
                text-sm md:text-base lg:text-lg
                text-black/80
                font-athletics
                leading-relaxed
              "
            >
              {t("features.description")}
            </motion.p>
          </motion.div>
        </div>

        {/* IMAGES SECTION */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-start justify-center">
          {/* UI CARD avec disclaimer */}
          <div data-aos="fade-right" className="w-full md:w-auto flex justify-center md:block">
            <div
              className="
              p-2 sm:p-4 md:p-8
              flex flex-col
              items-center md:items-start
              -mt-6 md:mt-0
            "
            >
              {/* TEXTE */}
              <p
                className="
                w-full
                max-w-[474px]
                text-xs sm:text-sm
                font-circular
                font-medium
                text-black/80
                mb-3 sm:mb-4
                text-center md:text-left
              "
              >
                {t("features.disclaimer")}
              </p>

              {/* IMAGE */}
              <img
                src={UiImage}
                alt="Wespee UI"
                className="
                  w-full
                  max-w-[474px]
                  h-auto
                  max-h-[300px] sm:max-h-[350px] md:max-h-[415px]
                  rounded-lg
                  shadow-sm
                "
              />
            </div>
          </div>

          {/* Person Image */}
          <div data-aos="fade-left" className="w-full md:w-auto">
            <div className="md:hidden mb-6 sm:mb-8 px-4">
              <p className="text-sm sm:text-base text-black/70 font-athletics leading-relaxed">
                {t("features.description")}
              </p>
            </div>

            <img
              src={PersonImage}
              alt="Wespee user"
              className="w-full max-w-[523px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
