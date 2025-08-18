export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Apiban Bo Plub",
  description: "150 years of traditional Thai medicine, reimagined for today",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    facebook: "https://www.facebook.com/ApibanAPB",
    instagram: "https://www.instagram.com/apibanapb/",
    line: "https://line.me/R/ti/p/@447xirpe?ts=12070004&oat_content=url",
    lazada: "https://www.lazada.co.th/shop/apibanapb/",
    shopee: "https://shopee.co.th/apibanapb",
    tiktok: "https://www.tiktok.com/@apiban.apb",
  },
};

export const translations = {
  en: {
    legacy: {
      title: "The Legacy of Khun Apiban Bo Plub",
      content1:
        "Over 150 years ago in Songkhla, Thailand, Khun Apiban Bo Plub served as a Traditional Thai Physician (แพทย์แผนไทย). As a public health doctor (แพทย์ศุขาภิบาล), he dedicated his life to the well-being of his community, offering care through the wisdom of Thai herbal medicine.",
      content2:
        "His most precious contribution is the “Red Book”, a handwritten medical recipe collection passed down through generations. Within its pages are remedies crafted from herbs and natural ingredients, reflecting deep knowledge of the balance between body, mind, and nature.",
      content3:
        "Today, this timeless heritage inspires the Apiban Bo Plub Brand, carrying forward the values of care, community, and natural healing.",
    },
    testimonial: {
      title: "Loved by community",
      subtitle: "",
    },
    nav: {
      home: "Home",
      story: "Our Story",
      products: "Products",
      heritage: "Heritage",
      contact: "Contact",
      brand: "ApibanAPB",
    },
    hero: {
      title: "Apiban Bo Plub",
      subtitle: "Ancient Wisdom, Modern Wellness",
      description:
        "150 years of traditional Thai medicine, reimagined for today",
      cta: "Discover Our Story",
    },
    heritage: {
      title: "The Legacy of Khun Apiban Bo Plub",
      subtitle: "Traditional Thai Physician from Songkhla",
      description:
        "Khun Apiban Bo Plub was a traditional Thai physician who served as a public health doctor in ancient Songkhla. His dedication to healing and valuable herbal medicine recipes have been passed down through generations.",
      redBook: "The Red Book",
      redBookDesc:
        "150-year-old traditional medicine recipe book containing precious herbal remedies",
    },
    revival: {
      title: "Modern Revival by Descendants",
      subtitle: "Preserving Heritage, Embracing Innovation",
      founders: "Founded by Mr. Pirach Anantapan and Ms. Panchart Mitrakul",
      mission:
        "Our mission is to revive and modernize traditional medicine recipes, making ancient wisdom accessible to contemporary audiences while preserving Thai medical heritage.",
      recognition: "Recognized by Tourism Authority of Thailand",
    },
    // products:{
    //   title:"Explore Products",
    //   subtitle:"150 years of traditional Thai medicine, reimagined for today",
    // },
    products: {
      intgrid: "150 years of traditional Thai medicine",
      title: "Natural Health Solutions",
      subtitle: "Traditional Recipes, Modern Application",
      inhaler: "Herbal Inhalers",
      inhalerDesc: "Natural respiratory wellness based on 150-year-old recipes",
      oils: "Essential Oils",
      oilsDesc: "Pure herbal extracts for aromatherapy and wellness",
      natural: "All Natural",
      traditional: "Traditional Recipes",
    },
    values: {
      title: "Our Values",
      heritage: {
        title: "Heritage",
        desc: "Preserving 150-year-old wisdom and traditional Thai medicine knowledge",
      },
      quality: {
        title: "Quality",
        desc: "Natural, traditional ingredients sourced with care and expertise",
      },
      innovation: {
        title: "Innovation",
        desc: "Modern application of ancient knowledge for contemporary wellness",
      },
    },
    footer: {
      title: "ApibanAPB",
      company: "Khun Apiban Co., Ltd.",
      heritage: "Preserving Thai Traditional Medicine Heritage",
      contact: "Contact Us",
    },
  },
  th: {
    testimonial: {
      title: "ชื่นชมจากชุมชน",
      subtitle: "",
    },
    nav: {
      home: "หน้าแรก",
      story: "เรื่องราวของเรา",
      products: "ผลิตภัณฑ์",
      heritage: "มรดก",
      contact: "ติดต่อ",
      brand: "อภิบาลบ่อพลับ",
    },
    hero: {
      title: "อภิบาลบ่อพลับ",
      subtitle: "ภูมิปัญญาโบราณ สุขภาพสมัยใหม่",
      description: "การแพทย์แผนไทย 150 ปี ปรับใหม่สำหรับยุคปัจจุบัน",
      cta: "ค้นพบเรื่องราวของเรา",
    },
    heritage: {
      title: "มรดกของขุนอภิบาลบ่อพลับ",
      subtitle: "แพทย์แผนไทยจากสงขลา",
      description:
        "ขุนอภิบาลบ่อพลับเป็นแพทย์แผนไทยที่รับราชการเป็นแพทย์ศุขาภิบาลประจำเมืองสงขลาในสมัยโบราณ ความทุ่มเทในการรักษาและตำรับยาสมุนไพรที่มีคุณค่าได้ถูกสืบทอดมาหลายชั่วอายุคน",
      redBook: "หนังสือเล่มแดง",
      redBookDesc: "ตำรายาแผนโบราณอายุ 150 ปี บรรจุตำรับยาสมุนไพรอันมีค่า",
    },
    revival: {
      title: "การฟื้นฟูโดยทายาท",
      subtitle: "รักษามรดก ยอมรับนวัตกรรม",
      founders: "ก่อตั้งโดย คุณปีรัชด์ อนันตพันธ์ และคุณปานชาติ มิตรกูล",
      mission:
        "พันธกิจของเราคือการฟื้นฟูและปรับปรุงตำรับยาแผนโบราณ ทำให้ภูมิปัญญาโบราณเข้าถึงได้ในยุคปัจจุบัน พร้อมรักษามรดกการแพทย์ไทย",
      recognition: "ได้รับการยอมรับจากการท่องเที่ยวแห่งประเทศไทย",
    },
    products: {
      intgrid: "150 ปีแห่งภูมิปัญญาไทย",
      title: "ผลิตภัณฑ์เพื่อสุขภาพจากธรรมชาติ",
      subtitle: "ตำรับโบราณ สู่ปัจจุบัน",
      inhaler: "ยาดมสมุนไพร",
      inhalerDesc: "สุขภาพทางเดินหายใจจากธรรมชาติ อิงตามตำรับ 150 ปี",
      oils: "น้ำมันหอมระเหย",
      oilsDesc: "สารสกัดสมุนไพรบริสุทธิ์ สำหรับอโรมาเธอราปีและสุขภาพ",
      natural: "ธรรมชาติ 100%",
      traditional: "ตำรับโบราณ",
    },
    values: {
      title: "คุณค่าของเรา",
      heritage: {
        title: "มรดก",
        desc: "รักษาภูมิปัญญา 150 ปี และความรู้การแพทย์แผนไทย",
      },
      quality: {
        title: "คุณภาพ",
        desc: "วัตถุดิบธรรมชาติ ตำรับโบราณ คัดสรรด้วยความเชี่ยวชาญ",
      },
      innovation: {
        title: "นวัตกรรม",
        desc: "การประยุกต์ความรู้โบราณสู่สุขภาพยุคใหม่",
      },
    },
    footer: {
      title: "อภิบาลบ่อพลับ",
      company: "บริษัท ขุนอภิบาล จำกัด",
      heritage: "รักษามรดกการแพทย์แผนไทย",
      contact: "ติดต่อเรา",
    },
    legacy: {
      title: "ตำนานคุณอภิบาล บ่อพลับ",
      content1:
        "กว่า 150 ปีก่อน ที่จังหวัดสงขลา คุณอภิบาล บ่อพลับ ได้ทำหน้าที่เป็น แพทย์แผนไทย และ แพทย์ศุขาภิบาล ผู้ทุ่มเทชีวิตเพื่อดูแลสุขภาพของคนในชุมชน ด้วยภูมิปัญญาสมุนไพรไทยที่ทรงคุณค่า",
      content2:
        "ผลงานที่ทรงคุณค่าที่สุด คือ “หนังสือเล่มแดง” คัมภีร์ตำรับยาที่จดบันทึกด้วยลายมือ ถ่ายทอดสืบต่อกันมาหลายชั่วอายุคน ภายในบันทึกตำรับสมุนไพรที่ละเอียดอ่อน อาศัยการผสมผสานสมุนไพรธรรมชาติ เพื่อสร้างสมดุลระหว่างกาย ใจ และธรรมชาติ",
      content3:
        "มรดกภูมิปัญญานี้ยังคงเป็นแรงบันดาลใจให้กับ แบรนด์อภิบาล บ่อพลับ ในการสืบสานคุณค่าแห่งการดูแล สุขภาพ และการเยียวยาจากธรรมชาติ",
    },
  },
};
