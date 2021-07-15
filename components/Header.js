import Link from "next/link"
import styles from "../styles/Home.module.css"
const Header = () => {
    return (
        <div className={styles.header} style={{color:"#f0a04b ",fontSize:"25px",fontFamily: "'Tangerine', serif",textShadow: "4px 4px 4px #f6c453",zIndex: "99"}}>
            <Link href="/#index" passHref><a>Home</a></Link>
            <Link href="/#about"><a>About</a></Link>
            <Link href="/#projects"><a>Projects</a></Link>
            <Link href="/#contact"><a>Contact Me</a></Link>
        </div>
)}
export default Header;