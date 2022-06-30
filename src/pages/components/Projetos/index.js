import styles from './styles.module.scss'
import Carousel from 'react-bootstrap/Carousel'

export default function Projetos(){
	return(
		<div className={styles.back}>
			<main className={styles.container}>
			<h1>projetos mobile</h1>

		<h1 className={styles.projectName}>DrawingStation</h1>
			<Carousel>
  <Carousel.Item>
				<img
				id="portifolio"
					src="https://user-images.githubusercontent.com/94801880/176781072-f9e9ac86-1c56-40a8-b1c2-6e68f7e919fa.png"
					alt="primeiro slide"
				/>
			<Carousel.Caption>
				<p><h4>DrawingStation</h4>Minha plataforma de ensino <a href='https://play.google.com/store/apps/details?id=com.drawingstation'><span>Baixar Projeto</span></a> </p>
			</Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/176781449-fbafd577-6cc7-4c34-a952-7710a96ebb63.png"
					alt="segundo slide"
				/>
							<Carousel.Caption>
				<p><h4>DrawingStation</h4>Minha plataforma de ensino <a href='https://play.google.com/store/apps/details?id=com.drawingstation'><span>Baixar Projeto</span></a> </p>
			</Carousel.Caption>
  </Carousel.Item>

	<Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/176781656-650f2c4b-ed2b-408c-90fe-6ce4594894b5.png"
					alt="segundo slide"
				/>
			<Carousel.Caption>
				<p><h4>DrawingStation</h4>Minha plataforma de ensino <a href='https://play.google.com/store/apps/details?id=com.drawingstation'><span>Baixar Projeto</span></a> </p>
			</Carousel.Caption>
  </Carousel.Item> 
</Carousel>

		<span>neste projeto utilizei React native com firebase de backEnd</span>
		<span>E context api para gerenciar o estado global</span>
		<span>Atualmente sendo refatorado utilizando redux</span>


			

			</main>

			<main className={styles.container}>
			<h1 >projetos Web</h1>

			<Carousel>
			<Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/176783634-4326fa08-0451-44f1-a1fc-a41d3a5db2c5.png"
					alt="primeiro slide"
				/>
				<Carousel.Caption>
				<p><h4>Lista de Tarefas</h4>Listad de tarefas online com premium e integração paypal <a href='https://board-anotacoes.herokuapp.com'><span>acessar projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/176783807-7387ce2a-4647-45ba-8771-c355937ff375.png"
					alt="segundo slide"
				/>
				<Carousel.Caption>
					<p><h4>Lista de Tarefas</h4>Listad de tarefas online com premium e integração paypal <a href='https://board-anotacoes.herokuapp.com'><span>acessar projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					src="https://user-images.githubusercontent.com/94801880/176783811-c72eb1bd-ba90-4aef-9ee4-d9848fd53385.png"
					alt="segundo slide"
				/>
				<Carousel.Caption>
					<p><h4>Lista de Tarefas</h4>Listad de tarefas online com premium e integração paypal <a href='https://board-anotacoes.herokuapp.com'><span>acessar projeto</span></a> </p>
				</Carousel.Caption>
			</Carousel.Item>			
			</Carousel>

			<span>Projeto feito usando React, NextJs, firebase com integração a api de pagamentos da paypall</span>
			<span>Sistema de LogIn feito com NextAuth com integração do github</span>
			<span>E de backEnd firebase para armazenar os dados do usuário</span>

					
			</main>
		</div>
		
	);
}