const express = require("express");
const app = express();
const Post = require("./api/models/post.js");
const postData = new Post();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
	res.status(200).send("Hello World");
});

app.get("/api/posts", (req, res) => {
	res.status(200).send(postData.get());
});

app.get("/api/posts/:post_id", function (req, res) {
	const postId = req.params.post_id;
	const foundPost = postData.getIndividualBlogs(postId);
	if (foundPost) {
		res.status(200).send(foundPost);
	} else {
		res.status(404).send("Not Found");
	}
	console.log(postId);
});

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
