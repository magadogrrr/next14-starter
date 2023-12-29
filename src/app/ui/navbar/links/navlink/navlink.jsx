"use client";

import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {

    const pathname = usePathname();

    return (
       <Link className={`${styles.container} ${pathname === item.path && styles.active}`} href={item.path}>
        {item.title}
    </Link>
    );
}

export default Navlink;