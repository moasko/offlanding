import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import iPhone from "../../assets/imgs/iPhone.png";
import QRCode from "../common/Web/QRCode";
import DownloadButton from "../common/Mobile/DownloadButton";
import { useTranslation } from "react-i18next";
import Vision from "./Vision";
import useWindowDimensions from "../../utils/screens";

export default function Hero() {
  const { t } = useTranslation();
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  // Animation au scroll
  const { scrollY } = useScroll();

  // Opacité du conteneur principal (Fade out content as we zoom)
  const containerY = useTransform(scrollY, [0, 400], [0, 50]);
  const [isRetracted, setIsRetracted] = useState(false);
  const scrollValue = useTransform(scrollY, [0, 800], [0, 1]);

  useEffect(() => {
    return scrollValue.onChange((v) => {
      if (v > 0.8) setIsRetracted(true);
      else setIsRetracted(false);
    });
  }, [scrollValue]);

  const dimensions = useWindowDimensions();
  const screenWidth = dimensions.width;
  const screenHeight = dimensions.height;

  // --- Animation Image "People" (Zoom -> Vision) ---
  const peopleWidth = useTransform(
    scrollY,
    [0, 800],
    [screenWidth < 640 ? screenWidth * 0.85 : 400, screenWidth]
  );
  const peopleHeight = useTransform(
    scrollY,
    [0, 800],
    [screenWidth < 640 ? 350 : 400, screenHeight]
  );

  const visionOverlayOpacity = useTransform(
    scrollY,
    [300, 800],
    [0, 0.5],
    { clamp: true }
  );
  const visionTextOpacity = useTransform(
    scrollY,
    [500, 800],
    [0, 1],
    { clamp: true }
  );

  // Variantes pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  const simultaneousGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const imagesVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const iPhoneVariants = {
    hidden: { y: 20, opacity: 0, rotate: -2, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
    },
  };

  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  return (
    <>
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-white">

          {/* Layer 1: Content (Text) */}
          <div className="relative z-10 h-full flex flex-col items-center pt-12 sm:pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onAnimationComplete={handleTitleAnimationComplete}
              >
                <motion.p
                  className="text-[15px] xs:text-2xs sm:text-xs font-athletics tracking-wide mb-3 sm:mb-4"
                  variants={taglineVariants}
                >
                  {t("hero.tagline")}
                </motion.p>

                <motion.h1
                  className="text-[clamp(2.5rem,5vw,3rem)] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-athletics font-medium leading-[1.1] tracking-tight text-black"
                >
                  <motion.span className="block" variants={titleItemVariants}>
                    {t("hero.title.line1")}
                  </motion.span>
                  <motion.span className="block" variants={titleItemVariants}>
                    {t("hero.title.line2")}
                  </motion.span>
                  <motion.span className="block italic font-bold" variants={titleItemVariants}>
                    {t("hero.title.highlight")}
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mt-6 sm:mt-8 mb-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-black/60 font-athletics font-normal px-4 sm:px-0"
                  variants={taglineVariants}
                >
                  {t("hero.description.line1")}
                  <br className="hidden sm:block" />
                  {t("hero.description.line2")}
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Layer 2: Animation (iPhone & Vision) - Positioned relative to the viewport */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden h-full w-full">
            <motion.div
              className="relative w-full h-full flex justify-center items-end"
              variants={imagesVariants}
              initial="hidden"
              animate={titleAnimationComplete ? "visible" : "hidden"}
            >
              <div className="relative w-full flex justify-center items-end h-full">

                {/* iPhone - Stays fixed in size, maybe slight scale */}
                <img
                  src={iPhone}
                  alt="iPhone background"
                  className="absolute md:bottom-[11%] bottom-[15%] w-[220px] sm:w-[260px] md:w-[300px] h-auto z-10 opacity-90 shadow-2xl pointer-events-auto"
                />

                {/* Vision - Expands to Full Screen */}
                <motion.div
                  style={{
                    width: peopleWidth,
                    height: peopleHeight,
                  }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden z-30 pointer-events-auto"
                >
                  <Vision
                    overlayOpacity={visionOverlayOpacity}
                    textOpacity={visionTextOpacity}
                  />
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Desktop QRCode */}
          <motion.div
            variants={imagesVariants}
            initial="hidden"
            animate={titleAnimationComplete ? "visible" : "hidden"}
            className="z-40"
          >
            <QRCode retracted={isRetracted} />
          </motion.div>

        </div>
      </section>

      {/* Fixed Mobile Download Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm pointer-events-auto"
      >
        <DownloadButton />
      </motion.div>
    </>
  );
}