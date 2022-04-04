import styles from './styles.module.scss'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'


export default function Header(){
    return(
			<main className={styles.container}>

				<div className={styles.midias}>
					<a target="_blank" href='https://www.linkedin.com/in/breno-nascimento-0b3331229/'>
					<FaLinkedin size={25} color='#fff'/>
					</a>
					<a target="_blank" href='https://github.com/brenooliveiranascimento'>
					<FaGithub size={25} color='#fff'/>
					</a>
					<a target="_blank" href='https://instagram.com/allblack_arts/'>
					<FaInstagram size={25} color='#fff'/>
					</a>
				</div>
				
				<div className={styles.content}>
					<a href='#home'>
						<span>Home</span>
					</a>

					<a href='#sobre'>
						<span>sobre</span>
					</a>

					<a href='#portifolio'>
						<span>Portifolio</span>
					</a>
				</div>
			</main>
    )
}
