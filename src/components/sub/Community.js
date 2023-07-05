import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('내용을 입력하세요');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하시겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== delIndex));
	};

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요' ref={textarea}></textarea>
				<br />
				<nav className='btnSet'>
					<button onClick={resetForm}>cancel</button>
					<button onClick={createPost}>write</button>
				</nav>
			</div>
			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							<div className='txt'>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</div>

							<nav className='btnSet'>
								<button>EDIT</button>
								<button onClick={() => deletePost(idx)}>DELETE</button>
							</nav>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
