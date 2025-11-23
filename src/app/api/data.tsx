// Dosya: src/app/api/data.tsx

import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "Projeler", href: "/portfolio" },
    { name: "İletişim", href: "/contact" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5+",
        description: "Farklı Sektörde Profesyonel Hizmet",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "7/24",
        description: "Kesintisiz Teknik Destek",
    },
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "%100",
        description: "Müşteri Memnuniyeti",
    },
];

export const Progress = [
    { title: 'Yazılım ve Otomasyon', Progress: 100 },
    { title: 'Saha Operasyonları', Progress: 95 },
    { title: 'Danışmanlık', Progress: 90 }
];

export const Servicebox = [
    {
        slug: 'web-tasarim',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Web Tasarım & Yazılım',
        description: 'Kurumsal kimliğinizi yansıtan, SEO uyumlu ve mobil dostu modern web siteleri.',
        content: 'İşletmeniz için özel olarak tasarlanmış, hızlı, güvenli ve yönetim panelli web siteleri geliştiriyoruz. E-ticaret, kurumsal tanıtım veya özel web uygulamaları ile dijital varlığınızı güçlendirin.'
    },
    {
        slug: 'dans-okulu',
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Dans Okulu Otomasyonu',
        description: 'Öğrenci kayıt, ders programı ve ödeme takibi için kapsamlı yönetim sistemi.',
        content: 'Dans okulları için özel geliştirdiğimiz yazılım ile devamsızlık takibi, eğitmen maaş hesaplaması ve sınıf yönetimini tek panelden yapın.'
    },
    {
        slug: 'rent-a-car',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Rent a Car Otomasyonu',
        description: 'Araç kiralama süreçlerinizi, rezervasyonları ve filo bakımını dijitalleştirin.',
        content: 'Araç müsaitlik durumu, kasko takibi, müşteri kara liste kontrolü ve sözleşme yönetimi ile filonuzu verimli yönetin.'
    },
    {
        slug: 'drone-temizlik',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Drone ile Cephe Temizliği',
        description: 'Yüksek katlı binalar için iş güvenliği riskini sıfıra indiren teknolojik temizlik.',
        content: 'Plazalar ve gökdelenler için iskele gerektirmeyen, hızlı ve güvenli drone destekli dış cephe temizlik hizmeti sunuyoruz.'
    },
    {
        slug: 'yalitim',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Bina Yalıtımı',
        description: 'Enerji tasarrufu sağlayan profesyonel ısı ve ses yalıtımı uygulamaları.',
        content: 'Binalarınızın enerji verimliliğini artıran, uzun ömürlü mantolama ve izolasyon çözümleri.'
    },
];

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Dans Okulu',
        title: 'Sanat Akademi Yönetim',
        slug: 'sanat-akademi-yonetim',
        info: 'Dans Okulu Yazılımı',
        detail: 'Sanat akademileri ve dans okulları için geliştirdiğimiz bu yazılım, öğrenci kayıtlarından ders programlarına kadar tüm idari süreçleri dijitalleştirerek operasyonel yükü hafifletir. Eğitmenler, öğrenciler ve veliler için özel paneller sunarak devamsızlık takibi, ödeme hatırlatmaları ve sınıf doluluk oranlarını anlık olarak izleme imkanı sağlar. Finansal modülü sayesinde gelir-gider dengesini korumanıza yardımcı olurken, otomatik SMS ve e-posta bildirimleri ile kurumsal iletişiminizi güçlendirir. Kullanıcı dostu arayüzü sayesinde teknik bilgi gerektirmeden kolayca kullanılabilir ve kurumunuzun verimliliğini maksimum seviyeye çıkarır.',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'SkyClean',
        title: 'SkyClean Drone Ops.',
        slug: 'skyclean-drone',
        info: 'Drone Temizlik',
        detail: 'Yüksek katlı plazalar ve gökdelenler için sunduğumuz drone destekli dış cephe temizlik hizmeti, geleneksel yöntemlerdeki iş güvenliği risklerini tamamen ortadan kaldırır. Endüstriyel dronelarımız, binanın yapısına zarar vermeyen özel temizlik solüsyonları ve yüksek basınçlı püskürtme sistemleri ile ulaşılması en zor alanlarda bile kusursuz hijyen sağlar. İskele kurulumu veya vinç operasyonlarına göre çok daha hızlı tamamlanan süreçlerimiz, bina sakinlerini ve çevreyi rahatsız etmeden sessizce yürütülür. Çevre dostu teknolojiler kullanarak hem binanızın ömrünü uzatır hem de doğaya zarar vermeden sürdürülebilir ve maliyet etkin bir temizlik çözümü sunarız.',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Filo Kiralama',
        title: 'RentCar Pro',
        slug: 'rentcar-pro',
        info: 'Rent a Car Yazılımı',
        detail: 'Rent a car firmaları için özel olarak tasarladığımız bu kapsamlı otomasyon, araç filonuzun rezervasyon, bakım, sigorta ve kasko süreçlerini tek bir ekrandan hatasız yönetmenizi sağlar. Gelişmiş müşteri risk analizi ve kara liste kontrolü özellikleri ile güvenli kiralama yapmanıza olanak tanırken, sözleşme ve faturalama süreçlerini tamamen dijitalleştirir. Araç müsaitlik takvimi ve dinamik fiyatlandırma modülleri sayesinde sezonluk yoğunlukları verimli bir şekilde yöneterek işletmenizin karlılığını artırır. GPS entegrasyonu desteği ile araçlarınızın konumunu, hızını ve durumunu anlık olarak takip edebilir, operasyonel maliyetlerinizi minimize edebilirsiniz.',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Yalıtım Projesi',
        title: 'Vadi İstanbul Yalıtım',
        slug: 'vadi-istanbul-yalitim',
        info: 'Bina Yalıtımı',
        detail: 'Binaların enerji verimliliğini artırmak ve yaşam konforunu yükseltmek amacıyla gerçekleştirdiğimiz bu proje, ısı ve ses yalıtımında üstün performans sağlayan modern malzemelerle hayata geçirilmiştir. Uzman mühendislerimiz tarafından yapılan detaylı keşif ve analizler sonucunda, binanın yapısına en uygun mantolama teknikleri belirlenerek enerji kayıpları minimuma indirilmiştir. Kışın sıcak, yazın serin iç mekanlar oluşturulurken, binanın dış cephe estetiği de yenilenerek gayrimenkulün piyasa değeri artırılmıştır. Kullandığımız uzun ömürlü, yanmaz ve çevre dostu izolasyon malzemeleri, yapınızı dış etkenlere karşı koruyarak güvenli bir yaşam alanı sunar.',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Web Sitesi',
        title: 'Kurumsal Web',
        slug: 'kurumsal-web',
        info: 'Web Tasarım',
        detail: 'Markanızın dijital dünyadaki yüzü olan bu proje, modern tasarım trendleri ve en son web teknolojileri kullanılarak, tamamen kullanıcı deneyimi (UX) odaklı geliştirilmiştir. SEO uyumlu altyapısı ve %100 mobil uyumluluğu sayesinde, işletmenizin arama motorlarında üst sıralarda yer almasını ve hedef kitlenize her platformdan ulaşmasını sağlar. Güvenli ve yönetilebilir yönetim paneli ile içeriklerinizi kolayca güncelleyebilir, blog yazıları ekleyebilir ve müşteri taleplerini web siteniz üzerinden karşılayabilirsiniz. Hızlı yükleme süreleri ve etkileyici görsel tasarımıyla ziyaretçilerinize profesyonel bir imaj sunarak marka değerinizi güçlendirir.',
        Class: 'md:mt-0'
    },
];

export const BlogData = [
    {
        img: "/images/blog/blog-1.jpg",
        date: "25 Kasım 2023",
        title: "Dijital Dönüşümde Başarı Stratejileri",
        content: "İşletmenizi dijital çağa adapte etmek için izlemeniz gereken temel adımlar ve stratejiler."
    },
    {
        img: "/images/blog/blog-2.jpg",
        date: "20 Kasım 2023",
        title: "Yazılım Çözümleri ile Verimliliği Artırın",
        content: "Özel yazılım çözümlerinin iş süreçlerinizi nasıl hızlandırdığını ve maliyetleri nasıl düşürdüğünü keşfedin."
    },
    {
        img: "/images/blog/blog-3.jpg",
        date: "15 Kasım 2023",
        title: "Saha Operasyonlarında Teknolojinin Gücü",
        content: "Drone teknolojisi ve modern ekipmanlarla saha operasyonlarınızı nasıl daha güvenli ve verimli hale getirebilirsiniz."
    }
];