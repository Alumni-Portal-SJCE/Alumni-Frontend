import React from 'react';
import { Carousel } from 'react-bootstrap';
import Admin from '../campus/admin.jpg';
import Golden from '../campus/goldenjublee.JPG';
import Library from '../campus/library.jpeg';
import Open from '../campus/openair.JPG';
import '../../scss/_home.css'
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';

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

					<Carousel.Caption>
					<h3><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('Welcome to The Official Alumni Network of SJCE')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h3>
					
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Golden}
						alt='Second'
					/>

					<Carousel.Caption><h3><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('Welcome to The Official Alumni Network of SJCE')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h3></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Library}
						alt='Third '
					/>

					<Carousel.Caption><h3><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('Welcome to The Official Alumni Network of SJCE')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h3></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Open}
						alt='Third'
					/>

					<Carousel.Caption><h3><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('Welcome to The Official Alumni Network of SJCE')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h3></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Home;
