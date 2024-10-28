function readdirSync(dir) {
  return require("fs").readdirSync(dir);
}

export async function getPostData(post) {
	try {
		const file = await import("@/posts/" + post + ".mdx");
		
		if (file?.metadata) return file.metadata;
		else {
			throw new Error(`Unable to find metadata in file ${blogId}.mdx`);
		}
	} catch (error) {
		console.log(error?.message);
		return {
      id: "",
			title: "",
      description: "",
			image: null,
			date: Date.now(),
		};
	}
}

export async function getPostsData() {
	try {
		const fileList = readdirSync("./src/posts/");
 
		if (fileList.length > 0) {
			const result = fileList.map(async (file) => {
				const filename = file.substring(0, file.lastIndexOf(".")) || file;
				return { ...(await getPostData(filename)), id: filename };
			});
 
			return Promise.all(result);
		}
	} catch (error) {
    console.error(error);
  }
	return [];
}

export async function generateMetadata({
	params,
}) {
	const metadata = await getPostData(params.post);
	if (metadata) {
		return {
			title: metadata.title,
			description: metadata.description,
			image: metadata.image,
		};
	}
	return {};
}