import styles from './styles.module.scss';
import Image from 'next/image';
import profilePic from '../../../../public/images/me.jpg'

export default function About(){

	return(
	<div className={styles.back}>
		<div id="sobre" className={styles.about}>

		<h1 className={styles.respan}>
		Este sou eu
		</h1>

		<Image width={400} height={500}  src={profilePic} alt="Breno"/>

		<div className={styles.abouText}>
		<h1>
		Este sou eu
		</h1>

		<div data-aos="fade-left">
			<span>
			- Desde pequeno apaixonado por tecnologia, tive meu primeiro contato com programação
			desenvolvendo mods para o game minecraft usando Java.
			ao terminar o ensino medio comecei estudar programação com o intuito de empreender e desenvovi minha primeira aplicação
			para auxiliar meus alunos nas aulas de desenho

			</span>

			<br/>

			<span>
			- Sou completamente apaixonado por astronomia e tudo que envolve o cosmo no geral.

			</span>

			<br/>

			<span>
				-Faço desenhos realistas nas horas vagas,e uma coisa que pude abstrair desse meu hob é acreditar no trabalho de 
				formiguinha, conistencia e diciplina nas tarefas, acredito que esse seja o caminho do sucesso!
			</span>

			<br/>

			<h2>Meu mantra é: A diciplina vai te levar a lugares onde a inspiração pura jamais levaria</h2>
			<p>
				(um pouco grande para um mantra mas o que vale é a intenção hahaha)
			</p>
		</div>
		</div>

		</div>
	</div>
		
		);
}