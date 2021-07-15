import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import Router from 'next/router'
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import profilePic from "../public/Images/profile.jpg"
import Link from "next/Link";
import Form from "../components/Form"
function RedirectPage () {
  const academy = {
    backgroundImage: "url('./images/academy.jpg')",
    backgroundSize:"cover"
  }
  const courses = {backgroundImage: "url('./images/certification.jpg')",
    backgroundSize:"cover"}
  const activities = {
    backgroundImage: "url('./images/activities.png')",
    backgroundSize:"cover"
  }
  const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/' ){
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('#index')
           //location.replace("/hello-nextjs")
        }else{
            setLoaded(true)
        }
      },[]);

   return (
      <Layout>
      <section id="index" className={styles.layoutcontainer} style={{ fontSize: "30px", color: "#2A6032",fontFamily: "'Tangerine', serif",textShadow: "4px 4px 4px #e1eedd" }}>
        <div className={styles.main} style={{marginTop:"auto",marginRight:"60%",marginLeft:"30px" }}>
          <b>Hey there,</b><p style={{textIndent:"50px"}}>I am Nivedha. An aspiring full stack developer.
          In a nutshell, that means I sit at my computer all day long creating classy web, mobile applications for cool folks around the world.<br></br>
          <br></br>
         <Link href="/#about"><a> <b><i>Dive in to know more about me!</i></b></a></Link></p>
        </div>
      </section>
      <section id="about" className={styles.container}>
           <Image  src={profilePic} alt="Picture of the author" className={styles.image} layout="intrinsic" />
        
            <div className={styles.grid}>
             
                <a href="academy" className={styles.card} style={academy}><p><b>Academic</b><br></br>
                All about my schooling and how it went.</p></a>
              <a href="courses" className={styles.card} style={courses}> <p ><b>Certifications</b><br></br>
                Certifications pursued to improve skill.</p></a>
              <a href="out_of_school_activities" className={styles.card} style={activities}>  <p ><b>Fun Stuff</b><br></br>
              Out of school activities I enjoyed growing up.</p></a>
          </div>
      </section>
      <section id="projects" className={styles.container}>
            <p>Helloooooooo</p>
        </section>
      <section id="contact" className={styles.container}><h3 ><b>Leave Feedback here</b></h3>
          <Form></Form>
      </section>
      </Layout>
   )
  
}

export default RedirectPage

{/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
