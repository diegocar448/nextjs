//import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head'
import Link from '../components/Link';

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation


//roda somente em build time
//getStaticProps esse roda apenas no build diferente do getServerSideProps
//Em modo DEV "yarn dev" sempre rodará a cada acesso e cada acesso que vc recebe
//export async function getServerSideProps() {


export async function getStaticProps() {

    //const [ faq, setFaq ] = useState([]);
   
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;            
        });
  

    return { 
        props: { 
            qualquercoisa: 'que eu passar aqui',
            faq
        } 
    }
  }


export default function FAQPage({faq}){
    console.log(faq)
    // const [ faq, setFaq ] = useState([]);

    // useEffect(() => {
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

    //     fetch(FAQ_API_URL)
    //         .then((respostaDoServidor) => {
    //             return respostaDoServidor.json();
    //         })
    //         .then((resposta) => {
    //             console.log(resposta);
    //             setFaq(resposta)
    //         });
    // }, [])

    return (
        <div>
            <PageTitle>FAQ - Cases Campanha</PageTitle>
            <h1>Cases - Pagina de Perguntas FAQ</h1>
            <Link href="/">Ir para Home</Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}