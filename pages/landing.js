import Layout from "../components/Layout"
import styles from "../styles/Home.module.css"
import { useRouter, withRouter } from "next/router";
const feedback = () => {
      const {
    query: {name,email,feedback}  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useRouter();
    return (
  
        <Layout >
            <div className={styles.aboutcontainer}>Feedback:<br></br>
                Name:{name}<br></br>
                Email:{email}<br></br>
               Feedback: {feedback}<br></br>
            </div >
            </Layout>
    )
}
export default feedback;