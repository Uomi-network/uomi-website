import React, { useMemo } from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import { getPostsData } from "../../lib/blog";

export const getStaticProps = async () => {
	const posts = await getPostsData();
	return {
		props: {
			posts,
		},
	};
}

export default function Blog({ posts }) {
	const postsList = useMemo(() => {
		return posts.map((post) => {
			post.dateObj = new Date(post.date);
			post.dateString = post.dateObj.toLocaleDateString();
			return post;
		}).sort((a, b) => {
			return b.dateObj - a.dateObj;
		});
	}, [posts]);

	console.log(postsList);

  return (
    <>
      <Head>
        <title>UOMI Network - Blog</title>
      </Head>

      <PageContainer>
        <h1 className="text-center text-xl mb-24">
					LATEST
				</h1>

				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-4xl mx-auto">
					{postsList.map((post) => {
						return (
							<li key={post.id} className="">
								<a href={`/blog/${post.id}`}>
									<h2 className="text-center font-bold mb-2 uppercase">{post.title}</h2>
									<p className="">{post.description}</p>
									<p className="text-center text-sm mt-4 font-mono font-bold">
										{post.dateString}
									</p>
								</a>
							</li>
						);
					})}
				</ul>
      </PageContainer>
    </>
  );
};
