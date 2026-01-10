"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import Lottie from "lottie-react";

import lockAnimation from "../../assets/lottie/lock.json"
import { useTranslation } from "react-i18next";

/* =========================================================
   CARD COMPONENT
========================================================= */
const Card = ({ children, scale, y, shadow, opacity, zIndex }) => {
  return (
    <div className="sticky top-[20vh] flex justify-center">
      <motion.div
        style={{
          scale,
          y,
          boxShadow: shadow,
          opacity,
          zIndex,
        }}
        className="
          md:w-full
          max-w-7xl
          bg-white
           sm:rounded-2xl md:rounded-none
          w-[94%] sm:w-[90%] md:w-full
          overflow-hidden
        "
      >
        {children}
      </motion.div>
    </div>
  );
};

/* =========================================================
   SECURITY SECTION
========================================================= */
export default function Security() {
  const { t } = useTranslation();
  const cardsRef = useRef(null);

  /* ---------------- SCROLL GLOBAL ---------------- */
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  });

  /* ---------------- RANGES (clé de l'effet) ---------------- */
  const range1 = [0.0, 0.4];
  const range2 = [0.25, 0.65];
  const range3 = [0.5, 0.95];

  /* ---------------- SCALE (profondeur) ---------------- */
  const scale1 = useTransform(scrollYProgress, range1, [1, 0.82]);
  const scale2 = useTransform(scrollYProgress, range2, [1, 0.9]);
  const scale3 = useTransform(scrollYProgress, range3, [1, 0.96]);

  /* ---------------- PARALLAX Y ---------------- */
  const y1 = useTransform(scrollYProgress, range1, [0, -60]);
  const y2 = useTransform(scrollYProgress, range2, [20, -30]);
  const y3 = useTransform(scrollYProgress, range3, [40, -10]);

  /* ---------------- OPACITY ---------------- */
  const opacity1 = useTransform(scrollYProgress, range1, [1, 0.6]);
  const opacity2 = useTransform(scrollYProgress, range2, [1, 0.7]);
  const opacity3 = useTransform(scrollYProgress, range3, [1, 1]);

  /* ---------------- SHADOWS ---------------- */
  const shadow1 = useTransform(
    scrollYProgress,
    range1,
    ["0 30px 60px rgba(0,0,0,0.25)", "0 10px 20px rgba(0,0,0,0.15)"]
  );

  const shadow2 = useTransform(
    scrollYProgress,
    range2,
    ["0 35px 70px rgba(0,0,0,0.28)", "0 15px 25px rgba(0,0,0,0.18)"]
  );

  const shadow3 = useTransform(
    scrollYProgress,
    range3,
    ["0 40px 80px rgba(0,0,0,0.30)", "0 20px 30px rgba(0,0,0,0.22)"]
  );

  // 🎨 BACKGROUND COLOR SCROLL
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["#06D432", "#f6f6f6"]
  );


  return (
    <ReactLenis root>
      <motion.section
        style={{ backgroundColor }}
        className="py-16 transition-colors"
      >
        {/* ================= HEADER ================= */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center flex flex-col items-center gap-4 sm:gap-5 md:gap-6 px-4">
          <div className="w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] md:w-[68px] md:h-[68px]">
            <Lottie animationData={lockAnimation} loop autoplay />
          </div>

          <p className="text-xs sm:text-sm text-black/80">
            {t("security.header.tagline")}
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-tight">
            {t("security.header.title1")} <br />
            {t("security.header.title2")}
          </h2>
        </div>

        {/* ================= PARALLAX ZONE ================= */}
        <div
          ref={cardsRef}
          className="relative min-h-[300vh] flex flex-col items-center pt-20"
        >
          {/* ---------- CARD 1 ---------- */}
          <Card
            scale={scale1}
            y={y1}
            shadow={shadow1}
            opacity={opacity1}
            zIndex={1}
          >
            <div className="grid md:grid-cols-2 bg-white min-h-[400px] md:min-h-[500px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-snug">
                  {t("security.cards.1.text")}
                </p>
              </div>

              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/1.png" className="w-[320px] h-[400px]" />
              </div>
            </div>
          </Card>

          {/* ---------- CARD 2 ---------- */}
          <Card
            scale={scale2}
            y={y2}
            shadow={shadow2}
            opacity={opacity2}
            zIndex={2}
          >
            <div className="grid md:grid-cols-2 bg-[#A991F3] min-h-[400px] md:min-h-[500px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-snug">
                  {t("security.cards.2.text")}
                </p>
              </div>

              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/2.png" className="w-[320px] h-[400px]" />
              </div>
            </div>
          </Card>

          {/* ---------- CARD 3 ---------- */}
          <Card
            scale={scale3}
            y={y3}
            shadow={shadow3}
            opacity={opacity3}
            zIndex={3}
          >
            <div className="grid md:grid-cols-2 bg-[#454545] min-h-[400px] md:min-h-[500px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left text-white flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
                  {t("security.cards.3.text")}
                </p>
              </div>
              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/3.png" className="w-[320px] h-[400px]" />
              </div>

            </div>
          </Card>
        </div>
      </motion.section>
    </ReactLenis>
  );
}
