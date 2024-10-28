import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

import PageContainer from "../../../components/PageContainer";

import { getPostData, getPostsData } from "../../../lib/blog";

export const getStaticPaths = async () => {
  const posts = await getPostsData();

  return {
    paths: posts.map((post) => ({
      params: { post: post.id },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
	const post = await getPostData(params.post);
	return {
		props: {
			post,
		},
	};
}

export default function BlogPost({ post }) {
  const router = useRouter();
  const BlogPostData = dynamic(() => import("@/posts/" + router.query.post + ".mdx"));

  const dateString = new Date(post.date).toLocaleDateString();

  return (
    <>
      <Head>
        <title>UOMI Network - Blog Post</title>
      </Head>

      <PageContainer className='py-0 md:py-0'>
        {post.image ? (
          <Image
            src={post.image}
            alt="Uomi"
            className="w-full h-auto mb-6"
            width={36}
            height={36}
          />
        ) : (<div
          className="flex flex-col justify-center items-center py-16 md:py-32"
          style={{
            background: "radial-gradient(circle, #000a64 0%, transparent 50%)",
          }}
        >
          <Image
            src="/assets/logo-pictogram.svg"
            alt="Uomi logo"
            className="h-32 w-auto mb-6"
            width={36}
            height={36}
          />

          <Image
            src="/assets/logo.svg"
            alt="Uomi logo"
            className="w-40 object-cover"
            width={36}
            height={36}
          />
        </div>)} 
        <h1 className="text-center text-4xl mb-12">
          {post.title}
        </h1>
        <p className="text-center text-sm font-mono font-bold">
          {dateString}
        </p>
        <article className="PageContent w-full mt-24 max-w-5xl mx-auto">
          <BlogPostData />
        </article>
      </PageContainer>
    </>
  );
};
