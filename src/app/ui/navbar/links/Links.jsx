import styles from "./links.module.css";
import Navlink from "./navlink/navlink";

const Links = () => {
    const links = [
        {
            title:"About",
            path:"/about"
            
        },
        {
            title:"Contact",
            path:"/contact"
            
        },
        {
            title:"Blog",
            path:"/posts"
            
        }
    ];

    const session = false;
    const isAdmin = true;

    return (
        <div className={styles.links}>{links.map((link => (
           <Navlink item={link} key={link.title}/> 
            )))}
            { session ? (
                <>
                    {isAdmin && <Navlink item={{title:"Admin",path:"/admin"}} />}
                    <button>Logout</button>
                </>
            ) : (
                <Navlink item={{title:"Login", path:"/login"}} />
            )}
        </div>
    );
}

export default Links;