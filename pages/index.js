import HomeScreen from "../screens/HomeScreen";

export default HomeScreen;

// import React from 'react'; // Importe o React
// import Link from '../components/Link';
// import Footer from '../components/patterns/Footer';

// //as para definir qual tag usaremos
// function Title({ children, as }){
//     const Tag = as;
//     return (
//             <React.Fragment>
//                 <Tag>
//                     { children }
//                 </Tag>
//                 <style jsx>{`
//                     ${Tag}{
//                         color:red;                        
//                     }
//                 `}
//                 </style>
//             </React.Fragment>
//         );
// }

// export default function HomePage(){
//     return (
//         <div>            
//             <Title as="h2">Cases - Home</Title>    
//             <Link href="/faq">                
//                 Ir para a pagina do FAQ                               
//             </Link>
//             <Footer/>
//         </div>
//     )
// }