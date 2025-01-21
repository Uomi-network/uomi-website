import React, { useMemo, useState } from "react";
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
	const [activeMonthIndex, setActiveMonthIndex] = useState(0);

	const postsList = useMemo(() => {
		return posts.map((post) => {
			post.dateObj = new Date(post.date);
			post.dateString = post.dateObj.toLocaleDateString();
			return post;
		}).sort((a, b) => {
			return b.dateObj - a.dateObj;
		});
	}, [posts]);

	const data = useMemo(() => {
		// const months = {};
		// postsList.forEach((post) => {
		// 	const month = post.dateObj.toLocaleString('en', { month: 'short' });
		// 	const year = post.dateObj.getFullYear();
		// 	const yearShort = year.toString().slice(2);
		// 	const key = `${month} ${yearShort}`;
		// 	if (!months[key]) {
		// 		months[key] = {
		// 			key: key,
		// 			posts: [],
		// 		};
		// 	}

		// 	months[key].posts.push(post);
		// });

		// const monthsList = Object.values(months).map((month) => {
		// 	month.posts.sort((a, b) => b.dateObj - a.dateObj);
		// 	month.date = month.posts[0].dateObj;
		// 	return month;
		// });

		// return monthsList.sort((a, b) => b.date - a.date);

		const months = { 0: { posts: [] } };
		postsList.forEach((post) => {
			months[0].posts.push(post);
		});
		return months;
	}, [postsList]);

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
					{data[activeMonthIndex].posts.map((post) => {
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

			{/* <ul className="fixed top-[50%] right-0 transform -translate-y-1/2 border-t border-gray-300 hidden md:block">
				{data.map((month) => (
					<li key={month.key} className="border-b border-gray-300">
						<button
							className={`px-4 py-2 font-mono ${data.indexOf(month) === activeMonthIndex ? 'bg-gray-300 bg-opacity-40' : ''}`}
							onClick={() => setActiveMonthIndex(data.indexOf(month))}
						>
							{month.key}
						</button>
					</li>
				))}
			</ul> */}
    </>
  );
};
