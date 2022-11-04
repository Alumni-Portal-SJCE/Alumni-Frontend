import React from 'react';
import { Carousel } from 'react-bootstrap';
import Admin from '../campus/admin.jpg';
import Golden from '../campus/goldenjublee.JPG';
import Library from '../campus/library.jpeg';
import Open from '../campus/openair.JPG';
import '../../scss/_home.css'
const Home = () => {
	return (
		<div className='home'>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Admin}
						alt='First '
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Golden}
						alt='Second'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Library}
						alt='Third '
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Open}
						alt='Third'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Home;
