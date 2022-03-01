import styles from './styles.module.scss'
import Carousel from 'react-bootstrap/Carousel'

export default function Projetos(){
	return(
		<div className={styles.back}>
			<main className={styles.container}>
			<h1>projetos mobile</h1>

			<Carousel fade>
			<Carousel.Item>
				<img
				id="portifolio"
					src="https://user-images.githubusercontent.com/94801880/155900387-f122e2e4-d18d-45fe-a6e8-c2a19d53db6a.gif"
					alt="primeiro slide"
				/>
				<Carousel.Caption>
				<p><h4>Drawing station</h4>App com varais aulas de desenho realista. <a href='https://github.com/BrenoAllbalck/Drawing-Station'><span>ir ao projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/152468557-aa84da97-5444-494e-827d-f3416d35c726.gif"
					alt="segundo slide"
				/>

				<Carousel.Caption>
					<p><h4>Talk Dream</h4>rede scial onde os usuarios pstam seus sonhos e pesadelos <a href='https://github.com/BrenoAllbalck/TalkDream'><span>ir ao projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>
			</Carousel>

					
			</main>

			<main className={styles.container}>
			<h1 >projetos Web</h1>

			<Carousel fade>
			<Carousel.Item>
				<img
					className={styles.webImages}
					src="https://user-images.githubusercontent.com/94801880/156219595-0fa39391-7a1c-4f33-95e7-82794a8387bf.png"
					alt="primeiro slide"
				/>
				<Carousel.Caption>
				<p><h4>Lista de Tarefas</h4>Listad de tarefas online com premium e integração paypal <a href='https://board-anotacoes.herokuapp.com'><span>ir ao projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className={styles.webImages}
					src="https://user-images.githubusercontent.com/94801880/156220183-b63061fd-833f-48fb-8c2b-a0c715678731.png"
					alt="segundo slide"
				/>
				<Carousel.Caption>
				<p><h4>Repositrios favoritos</h4>Favoritar os repositorios do github consumindo a api diretamente deles<a href='https://github.com/BrenoAllbalck/Repo-favoritos'><span>ir ao projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>

			
			
			</Carousel>

					
			</main>
		</div>
		
	);
}