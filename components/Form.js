import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useRouter } from 'next/router'
export default function Form () {
    const router = useRouter()
  const registerUser = async event => {
      event.preventDefault()
      
    // alert("Your submission:\n"+"name:"+event.target.name.value+"\nemail:"+event.target.email.value+"\nfeedback:"+event.target.comment.value)
      
       fetch('/#contact', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:event.target.name.value
      }),
       }).then((res) => {
        console.log(res)
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router. push({ pathname: '/landing', query: { name: event.target.name.value, email: event.target.email.value,feedback: event.target.comment.value} });
    })
      
  }

    return (
      
    <form onSubmit={registerUser} style={{display: "flex",
    flexDirection:" column",width:"50%" }} className={styles.form}>
      <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text"  required />
           <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email"  required />
           <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment" type="text" required />
          <br></br>
      <button type="submit">Submit!</button>
      </form>
     
  )
}