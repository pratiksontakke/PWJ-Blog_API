const fs = require("fs");
const PATH = "./data.json";

class Post {
	get() {
		// Get Posts
		return this.readData();
	}

	getIndividualBlogs(postId) {
		// get one blog post
		const post = this.readData();
		const foundPost = post.find((post) => post.id == postId);
		return foundPost;
	}

	add(newPost) {
		// add new posts
		const currentPosts = this.readData();
		currentPosts.unshift(newPost);
		this.storeData(currentPosts);
	}

	readData() {
		let rawdata = fs.readFileSync(PATH);
		let posts = JSON.parse(rawdata);
		return posts;
	}

	storeData(rawdata) {
		let data = JSON.stringify(rawdata);
		fs.writeFileSync(PATH, data);
	}
}
module.exports = Post;
