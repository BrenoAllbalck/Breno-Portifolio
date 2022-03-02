import Image from 'next/image';
import styles from './styles.module.scss';

export default function Divisoria(){


	const arrayImagens = [
		{id:5, fade:'zoom-in-down', url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'},
		{id:2,fade:'zoom-in-up', url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'},
		{id:1,fade:'zoom-in-down', url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'},
		{id:3,fade:'zoom-in-up', url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'},
		{id:4,fade:'zoom-in-down', url:'https://user-images.githubusercontent.com/94801880/155901199-87253c57-c690-4bf2-b419-1eb0d52718f9.png'},
		{id:6,fade:'zoom-in-up', url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'},
	]

	return(
		<div style={{display:'flex', backgroundColor:"#fff"}}>

		<main className={styles.container}>
			
			<div className={styles.infArea}>
				
			<h1 data-aos="fade-down" >Tecnologias que utilizo</h1>

				<div  className={styles.imgArea}>

					{
						arrayImagens.map( i =>(
						<div key={i.id}>
							<img className={styles.imgRes} data-aos={i.fade}  src={i.url} alt="techs"/>
						</div>
						) )
					}
				</div>
				<div>
				</div>
				</div>

		</main>
		</div>
	);
}