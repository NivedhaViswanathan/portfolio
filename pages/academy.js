import Layout from "../components/Layout"
import styles from "../styles/Home.module.css"
import React, {useEffect, useRef} from "react"
const Academy = () => {
     const videoRef = useRef()
    useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },500)
  }, []);
    return (
        <Layout>
            <div className={styles.aboutcontainer}>
                My first few years of schooling gave me a strong base for communication and my enthusiasm for learning new languages.<br></br>
                I now know 5 languages and in a path to learn more.
                The next few years went By quickly, and I learnt to be more desciplined and humble.<br></br>
                I was someone who adapted quicky to new changes or any subject to the matter.
                I wasn&apos;t sure if Computer Science was my piece of cake. <br></br>
                I went with the path life chose for me and suddenly BOOM!! I was here learning Python, Html,CSS, Javascript.<br></br>
                and the most surprising thing is that I loved it!
                So, here&apos;s a sneek peak into my life.
                dapted quicky to new changes or any subject to the matter.
                I wasn&apos;t sure if Computer Science was my piece of cake. <br></br>
                I went with the path life chose for me and suddenly BOOM!! I was here learning Python, Html,CSS, Javascript.<br></br>
                and the most surprising thing is that I loved it!
                So, here&apos;s a sneek peak into my life.
 <video
        ref={videoRef}
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          height: "30rem",
          left: "2px",
            top: "auto"
        }}>
      <source src="/Images/academy_bg.mp4" type="video/mp4"/>
    </video>
            </div>
            </Layout>
    )
}
export default Academy;