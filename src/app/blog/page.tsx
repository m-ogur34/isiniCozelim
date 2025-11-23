import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | İşini Çözelim",
    description: "Sektörel haberler, teknolojik gelişmeler ve ipuçları.",
};

const BlogPage = () => {
    return (
        <>
            <HeroSub
                title="Blog & Haberler"
                description="Teknoloji ve hizmet dünyasındaki son gelişmeleri takip edin."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/blog", text: "Blog" },
                ]}
            />
            <BlogList />
        </>
    );
};

export default BlogPage;