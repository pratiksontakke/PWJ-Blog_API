const PATH = "./data.json";
const fs = require("fs");

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
		// let student = {
		// 			name: "Mike",
		// 			age: 23,
		// 			gender: "Male",
		// 			department: "English",
		// 			car: "Honda",
		// 		};

		let data = JSON.stringify(rawdata);
		fs.writeFileSync(PATH, data);
	}
}
module.exports = Post;
