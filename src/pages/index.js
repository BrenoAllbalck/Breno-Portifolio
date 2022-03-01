import Head from 'next/head';
import styles from './styles/home.module.scss'
import Typical from 'react-typical'
import Header from './components/Header';
import Divisoria from './components/Divisoria';
import About from './components/About';
import DivisoriaRock from './components/DivisoriaRockLee';
import Projetos from './components/Projetos';

export default function App(){



  return(
    <>
    <div className={styles.correBug}>

      
      <Head>
        <title>Breno Nascimento - portifolio </title>
      </Head>
      <div style={{backgroundColor:"#000"}}>
      <Header/>

      <main className={styles.container}>
        <div id='home' className={styles.topContent}>
          <div className={styles.textContent}>
          <h2 data-aos="fade-left">
              Olá, eu sou Breno.
            <Typical steps={[`Sou desenvolvedor FrontEnd e Mobile`, 3000]}
            wrapper="h1"
            />
            </h2>
          </div>
        </div>

      </main>

        <Divisoria/>

      <About/>

        <DivisoriaRock/>
      
      <Projetos/>
      </div>
    </div>

    </>
  );
}