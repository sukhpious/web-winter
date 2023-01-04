import React, { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
	const [data, setData] = useState([]);
	const [err, setError] = useState(false);

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then((response) => {
	// 			//string data came and convert to json
	// 			return response.json();
	// 		})
	// 		.then((result) => {
	// 			setData(result.slice(0, 20));
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			setError(true);
	// 		});
	// }, []);

	useEffect(() => {
		async function fetchPosts() {
			const url = `https://jsonplaceholder.typicode.com/posts`;
			try {
				const { data } = await axios.get(url);
				setData(data.slice(0, 10));
			} catch (err) {
				console.log(err);
			}
		}
		fetchPosts();
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
