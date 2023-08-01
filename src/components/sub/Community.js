import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function Community() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

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

	const enableUpdate = (editIndex) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = true;
				return post;
			})
		);
		setAllowed(true);
	};

	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (editIndex) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
		setAllowed(true);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	useEffect(() => {
		console.log(Allowed);
	}, [Allowed]);

	return (
		<Layout
			name={'Community'}
			txt={
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
			}
		>
			<div className='input_wrap'>
				<div className='inputBox'>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<br />
					<textarea cols='30' rows='7' placeholder='본문을 입력하세요' ref={textarea}></textarea>
					<br />
					<nav className='btnSet'>
						<button onClick={resetForm}>cancel</button>
						<button onClick={createPost}>write</button>
					</nav>
				</div>
				<div className='txt_right'>
					<h2>dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam repellendus
						iste sapiente fugiat maxime natus sed velit architecto in porro harum expedita voluptas
						error impedit, provident accusantium soluta cupiditate consequatur esse quos? Odio
						facere quibusdam sapiente, beatae iure nisi eligendi autem voluptatem voluptatibus
						expedita molestias totam id nulla quisquam laborum impedit fugit corporis molestiae
						laudantium itaque deserunt iusto libero animi!
					</p>
				</div>
			</div>
			<div className='show_wrap'>
				<div className='txt_box'>
					<div className='txt_left'>
						<h2>consectetur elit dolor sit amet</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quaerat.</p>
					</div>
					<div className='big_txt'>
						<FontAwesomeIcon icon={faNewspaper} />
					</div>
				</div>
				<div className='showBox'>
					{Posts.map((post, idx) => {
						let num = Posts.length - idx;

						return (
							<article key={idx}>
								{post.enableUpdate ? (
									//수정모드
									<>
										<div className='txt'>
											<div className='number'>0{num}</div>
											<input type='text' defaultValue={post.title} ref={editInput} />
											<br />
											<textarea
												cols='30'
												rows='3'
												defaultValue={post.content}
												ref={editTextarea}
											></textarea>
										</div>
										<nav className='btnSet'>
											<button onClick={() => disableUpdate(idx)}>CANCEL</button>
											<button onClick={() => updatePost(idx)}>UPDATE</button>
										</nav>
									</>
								) : (
									//출력모드
									<>
										<div className='txt'>
											<div className='number'>0{num}</div>
											<h2>{post.title}</h2>
											<p>{post.content}</p>
										</div>
										<nav className='btnSet'>
											<button onClick={() => enableUpdate(idx)}>EDIT</button>
											<button onClick={() => deletePost(idx)}>DELETE</button>
										</nav>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Community;
