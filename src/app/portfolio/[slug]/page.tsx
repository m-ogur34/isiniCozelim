// Dosya: src/app/portfolio/[slug]/page.tsx

import React from "react";
import { portfolioinfo } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/SharedComponent/HeroSub";

// Statik export için slug'ları oluştur
export async function generateStaticParams() {
    return portfolioinfo.map((item) => ({
        slug: item.slug,
    }));
}

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
    const item = portfolioinfo.find((p) => p.slug === params.slug);

    if (!item) {
        notFound();
    }

    return (
        <>
            <HeroSub
                title={item.title}
                description={item.info}
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/portfolio", text: "Projeler" },
                    { href: `/portfolio/${item.slug}`, text: item.title }
                ]}
            />
            <section className="py-20 dark:bg-darkmode">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={1200}
                            height={600}
                            quality={100}
                            className="w-full object-cover h-[400px] md:h-[500px]"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-midnight_text dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
                            Proje Hakkında
                        </h2>
                        <p className="text-lg text-grey dark:text-white/70 leading-loose text-justify">
                            {item.detail}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}