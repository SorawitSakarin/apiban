import { useLanguageStore } from "@/app/utils/store";
import { siteConfig, translations } from "@/config/site";
import MagicContainer from "./MagicContainer";
import { Button, Image } from "@heroui/react";
import { FacebookIcon, InstagramIcon, LineIcon, TiktokIcon } from "../icons";
import { AnimatedSection } from "../animate/AnimatedComponent";

export default function Legacy() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <div className="font-sans flex flex-col md:flex-row items-start py-8 px-4 sm:px-6 lg:px-8">
      {/* <div className="font-sans flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#000000] to-[#0a0d37]"> */}
      <AnimatedSection dir="left" delay={500}>
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
          <MagicContainer className="w-full">
            <div className="w-full rounded-[23px] bg-white dark:bg-black shadow-lg overflow-hidden p-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-left max-w-4xl leading-tight mb-4 text-gray-900 dark:text-[#CDBE9E]">
                {t.legacy.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left max-w-3xl">
                {t.legacy.content1}
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left max-w-3xl">
                {t.legacy.content2}
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left max-w-3xl">
                {t.legacy.content3}
              </p>
              <div className="flex justify-start mt-4 gap-2">
                <Button
                  isIconOnly
                  aria-label="Facebook"
                  className="bg-[#443A36]"
                  onPress={() =>
                    window.open(siteConfig.links.facebook, "_blank")
                  }
                >
                  <FacebookIcon fill="#CDBE9E" />
                </Button>
                <Button
                  isIconOnly
                  aria-label="Instagram"
                  className="bg-[#443A36]"
                  onPress={() =>
                    window.open(siteConfig.links.instagram, "_blank")
                  }
                >
                  <InstagramIcon fill="#CDBE9E" />
                </Button>
                <Button
                  isIconOnly
                  aria-label="Line"
                  className="bg-[#443A36]"
                  onPress={() => window.open(siteConfig.links.line, "_blank")}
                >
                  <LineIcon fill="#CDBE9E" />
                </Button>
                <Button
                  isIconOnly
                  aria-label="Tiktok"
                  className="bg-[#443A36]"
                  onPress={() => window.open(siteConfig.links.tiktok, "_blank")}
                >
                  <TiktokIcon fill="#CDBE9E" />
                </Button>
              </div>
            </div>
          </MagicContainer>
        </div>
      </AnimatedSection>
      <AnimatedSection dir="right" delay={500}>
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
          <MagicContainer className="w-full">
            <div className="w-full rounded-[23px] bg-white dark:bg-black shadow-lg overflow-hidden">
              {/* Your card content here */}
              {/* <div className="p-6"> */}
              <Image src="/imgs/shop-7.jpg" alt="Legacy" />
              {/* </div> */}
            </div>
          </MagicContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}
