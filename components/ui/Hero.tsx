import { useLanguageStore } from "@/app/utils/store";
import { translations } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  return (
    <div className="inline-block max-w-xl text-left justify-center animate-fade-in-left">
      <span className={title({ size: "lg" })}>- {t.hero.title} -</span>
      <br />
      <br />
      <span className={title({ color: "yellow" })}>
        {t.hero.description}&nbsp;
      </span>
      <br />
      <br />
      <span className={title()}>{t.hero.subtitle}</span>
      <div className={subtitle({ class: "mt-4" })}>{t.hero.cta}</div>
    </div>
  );
};
