import { useLanguageStore } from "@/app/utils/store";

export default function Revival() {
  const language = useLanguageStore((state) => state.language);

  if (language === "en") {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 text-gray-900 dark:text-[#CDBE9E]">
          Apiban Bo Plub: A Legacy Revived
        </h1>
        <p>
          The wisdom of Khun Apiban Bo Plub did not remain in the past. His{" "}
          <strong>descendants</strong> established{" "}
          <strong>Khun Apiban Co., Ltd.</strong> to carry his 150-year-old
          heritage into the modern era. With a deep respect for traditional Thai
          medicine, they carefully adapted the original recipes from the{" "}
          <strong>“Red Book”</strong> into products suited for today’s
          lifestyle. From herbal inhalers to <strong>essential oils</strong>,
          each creation carries the soul of Thai heritage while meeting the
          needs of contemporary wellness seekers. Their mission goes beyond
          product development — it is about{" "}
          <strong>preserving cultural identity</strong>,{" "}
          <strong>supporting local communities</strong>, and
          <strong>sharing Thai wisdom with the world</strong>. Through
          innovative marketing and authentic storytelling, the brand has earned
          recognition from the media and organizations such as the Tourism
          Authority of Thailand (TAT).
        </p>
        <h2 className="text-2xl font-bold ">Key Values:</h2>
        <ul className="list-disc">
          <li>Preserving the authenticity of traditional Thai medicine</li>
          <li>Adapting ancient wisdom for modern use</li>
          <li>Driving local economic growth and self-sufficiency</li>
          <li>Sharing Thai wellness on a global stage</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 text-gray-900 dark:text-[#CDBE9E]">
        อภิบาล บ่อพลับ: การฟื้นคืนตำนาน
      </h1>
      <p>
        ภูมิปัญญาของ คุณอภิบาล บ่อพลับ ไม่ได้เลือนหายไปในกาลเวลา
        แต่ได้รับการสืบทอดและฟื้นคืนโดย <strong>ทายาท</strong> ผู้ก่อตั้ง บริษัท{" "}
        <strong>คุณอภิบาล จำกัด</strong>
        เพื่อสืบสานมรดกภูมิปัญญาอันมีค่ากว่า 150 ปี
        ให้กลับมาโลดแล่นในยุคปัจจุบัน ด้วยความศรัทธาในแพทย์แผนไทย
        ทายาทได้พัฒนาตำรับยาจาก <strong>“หนังสือเล่มแดง”</strong>
        ให้กลายเป็นผลิตภัณฑ์ที่เหมาะกับวิถีชีวิตยุคใหม่ ทั้ง{" "}
        <strong>ยาดมสมุนไพร</strong> และ
        <strong>น้ำมันหอมระเหย</strong>{" "}
        ทุกผลิตภัณฑ์ยังคงรักษาความเป็นเอกลักษณ์ของภูมิปัญญาไทย
        พร้อมตอบโจทย์การดูแลสุขภาพของคนยุคปัจจุบัน
        ภารกิจของแบรนด์นี้ไม่ใช่เพียงการสร้างสินค้า แต่คือ
        <strong>
          การสืบสานอัตลักษณ์ทางวัฒนธรรม การสนับสนุนเศรษฐกิจท้องถิ่
        </strong>{" "}
        และ<strong>การเผยแพร่ภูมิปัญญาไทยสู่เวทีโลก</strong>
        ผ่านกลยุทธ์การตลาดที่ทันสมัยและเรื่องราวที่จริงใจ
        แบรนด์ได้รับความสนใจจากสื่อและองค์กรต่าง ๆ รวมถึง
        การท่องเที่ยวแห่งประเทศไทย (ททท.)
      </p>
      <h2 className="text-2xl font-bold">คุณค่าหลักของแบรนด์:</h2>
      <ul className="list-disc">
        <li>สืบสานความแท้จริงของ แพทย์แผนไทยดั้งเดิม</li>
        <li>ปรับภูมิปัญญาโบราณให้เหมาะกับ การใช้ในปัจจุบัน</li>
        <li>ส่งเสริม การพึ่งพาตนเองและเศรษฐกิจท้องถิ่น</li>
        <li>ยกระดับสมุนไพรไทยสู่ สากล</li>
      </ul>
    </div>
  );
}
