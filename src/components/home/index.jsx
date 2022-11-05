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
			<Carousel interval={9000}>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Admin}
						alt='First '
					/>

					<Carousel.Caption>
					<h2><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('<span class="years" >In Commemoration of 60th Anniversary of SJCE</span>')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h2>
					<span class="yearss">Diamond Jubilee Year Celebration 1963-2022</span>
					
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Golden}
						alt='First '
					/>

					<Carousel.Caption>
					<h2><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('<span class="years" >In Commemoration of 60th Anniversary of SJCE</span>')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h2>
					<span class="yearss">Diamond Jubilee Year Celebration 1963-2022</span>
					
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Library}
						alt='First '
					/>

					<Carousel.Caption>
					<h2><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('<span class="years" >In Commemoration of 60th Anniversary of SJCE</span>')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h2>
					<span class="yearss">Diamond Jubilee Year Celebration 1963-2022</span>
					
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Open}
						alt='First '
					/>

					<Carousel.Caption>
					<h2><Typewriter
					onInit={(typewriter) => {
						typewriter.typeString('<span class="years" >In Commemoration of 60th Anniversary of SJCE</span>')
						.callFunction(() => {
							// console.log('String typed out!');
						})
						.pauseFor(2500)
						.start();
					}}
					/></h2>
					<span class="yearss">Diamond Jubilee Year Celebration 1963-2022</span>
					
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Home;
