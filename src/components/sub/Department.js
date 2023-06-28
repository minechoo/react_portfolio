import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]);
	console.log(Members);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data) => {
			setMembers(data.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<div className='wrap'>
				{Members.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`img/${member.pic}`} alt={member.name} />
								<div className='ex'>
									<h2>{member.name}</h2>
									<p>{member.position}</p>
									<span className='sns'>
										<i className='fa-brands fa-twitter'></i>
										<i className='fa-brands fa-facebook-f'></i>
									</span>
								</div>
							</div>
						</article>
					);
				})}
			</div>

			<section id='things'>
				<div className='content'>
					<div className='sub_txt'>A</div>
					<div className='content_txt'>
						<h1 className='mb_35'>
							About<span> Mobilex</span>
						</h1>

						<p className='ex'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente sunt et ex
							dolorum accusamus atque iusto harum esse ipsum, voluptatem quibusdam accusantium
							laborum tenetur qui ad dignissimos vel at. Ducimus cum ab doloremque fugiat libero
							corrupti! Ea repudiandae laudantium quo, optio pariatur fuga maiores nobis est
							molestiae magnam reiciendis aliquam, blanditiis odit inventore at? Modi esse quo
							consequuntur incidunt necessitatibus maxime exercitationem ipsam, nulla aperiam iusto
							magnam magni earum.
						</p>
						<p className='ex it'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae corrupti
							mollitia dolor repellendus quia reiciendis, quisquam tempora asperiores ducimus.
						</p>

						<span className='line_deco_02'></span>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Department;
