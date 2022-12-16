import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
	const [data, setData] = useState([]);
	const [err, setError] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setData(result.slice(0, 20));
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			});
	}, []);

	if (err) {
		return <div>An unknown error occured.</div>;
	}

	return (
		<div>
			<ul style={{ textAlign: "left" }}>
				<h3>Posts</h3>
				{data.map((post) => (
					<div key={post.id}>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
						<hr />
					</div>
				))}
			</ul>
		</div>
	);
};

export default Posts;
