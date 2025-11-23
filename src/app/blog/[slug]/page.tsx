import React from "react";
import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import BlogHeader from "@/components/Blog/BlogHeader";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getImgPath } from "@/utils/image";

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"]);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// DEĞİŞİKLİK BURADA: params tipi Promise olarak güncellendi
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    // Params'ı await ile çözümlüyoruz
    const resolvedParams = await params;

    const post = getPostBySlug(resolvedParams.slug, [
        "title",
        "date",
        "slug",
        "author",
        "authorImage",
        "content",
        "coverImage",
    ]);

    if (!post.slug) {
        notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <>
            {/* BlogHeader params beklediği için resolvedParams'ı gönderiyoruz */}
            <BlogHeader params={resolvedParams} />
            <section className="pb-20 dark:bg-darkmode">
                <div className="container mx-auto max-w-4xl px-4">
                    {post.coverImage && (
                        <div className="mb-10 w-full overflow-hidden rounded-lg">
                            <Image
                                src={getImgPath(post.coverImage)}
                                alt={post.title || "Blog Görseli"}
                                width={1000}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                    )}
                    <div
                        className="blog-details prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </section>
        </>
    );
}