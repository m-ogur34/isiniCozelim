// Dosya: src/app/api/data.tsx

import { getImgPath } from "@/utils/image";

// Menü Linkleri
export const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "Projeler", href: "/portfolio" },
    { name: "İletişim", href: "/contact" },
];

// Sayaç Verileri (Counter)
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

// İlerleme Çubukları (Work Progress - Neden Biz?)
export const Progress = [
    { title: 'Yazılım ve Otomasyon', Progress: 100 },
    { title: 'Saha Operasyonları (Drone & Yalıtım)', Progress: 95 },
    { title: 'Kurumsal Danışmanlık', Progress: 90 }
];

// HİZMETLER (Belirttiğiniz 5 Sektör)
export const Servicebox = [
    {
        slug: 'web-tasarim',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Web Tasarım & Yazılım',
        description: 'Kurumsal kimliğinizi yansıtan, SEO uyumlu, hızlı ve mobil dostu modern web siteleri ve özel yazılım çözümleri.',
        content: 'İşletmeniz için özel olarak tasarlanmış, yönetim panelli, güvenli web siteleri geliştiriyoruz. E-ticaret sitelerinden kurumsal tanıtım sitelerine kadar dijital varlığınızı güçlendiriyoruz.'
    },
    {
        slug: 'dans-okulu',
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Dans Okulu Otomasyonu',
        description: 'Öğrenci kayıt, ders programı takibi, eğitmen yönetimi ve ödeme sistemlerini tek panelden yönetin.',
        content: 'Dans okulları, sanat merkezleri ve kurslar için geliştirdiğimiz bu yazılım ile devamsızlık takibi, aidat ödemeleri ve sınıf yoklamalarını kolayca yönetebilirsiniz.'
    },
    {
        slug: 'rent-a-car',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Rent a Car Yazılımı',
        description: 'Araç filonuzu, rezervasyonları, sözleşmeleri ve bakım süreçlerini yönetebileceğiniz kapsamlı otomasyon.',
        content: 'Kiralama süreçlerini dijitalleştirin. Müşteri kara liste kontrolü, araç müsaitlik takvimi, kasko/sigorta hatırlatmaları ve gelir-gider takibi tek ekranda.'
    },
    {
        slug: 'drone-temizlik',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Drone ile Plaza Temizliği',
        description: 'Yüksek katlı binalar ve plazalar için iskele gerektirmeyen, güvenli ve hızlı dış cephe temizliği.',
        content: 'İnsan hayatını riske atmadan, endüstriyel dronelarımız ile gökdelenlerin ve plazaların cam/cephe temizliğini yapıyoruz. Geleneksel yöntemlere göre 10 kat daha hızlı ve güvenli.'
    },
    {
        slug: 'bina-yalitim',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Bina Yalıtımı',
        description: 'Enerji tasarrufu sağlayan, binanızın ömrünü uzatan profesyonel ısı ve ses yalıtımı uygulamaları.',
        content: 'Konut ve iş yerlerinizde profesyonel mantolama, ısı ve ses izolasyonu hizmetleri sunuyoruz. Enerji maliyetlerinizi düşürürken konforunuzu artırın.'
    },
];

// REFERANSLAR / PROJELER
export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Dans Okulu',
        title: 'Sanat Akademi Yönetim',
        slug: 'sanat-akademi-yonetim',
        info: 'Dans Okulu Yazılımı',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'SkyClean',
        title: 'SkyClean Drone Ops.',
        slug: 'skyclean-drone',
        info: 'Drone Temizlik',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Filo Kiralama',
        title: 'RentCar Pro',
        slug: 'rentcar-pro',
        info: 'Rent a Car Yazılımı',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Yalıtım Projesi',
        title: 'Vadi İstanbul Yalıtım',
        slug: 'vadi-istanbul-yalitim',
        info: 'Bina Yalıtımı',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Web Sitesi',
        title: 'Kurumsal Web',
        slug: 'kurumsal-web',
        info: 'Web Tasarım',
        Class: 'md:mt-0'
    },
];