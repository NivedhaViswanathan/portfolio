import Head from "next/head";
import styles from '../styles/Home.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ children, title }) => {
    return (<div >
    <Head>
      <title>Nivedha Viswanathan</title>
    </Head>
      <Header />
    
         <h1>{title}</h1>
      {children}  
  <Footer/>    
  </div>)
}
 
export default Layout;