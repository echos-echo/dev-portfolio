import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function NavButtons(props) {
    const link = '/' + props.href;
    const buttonLabel = props.name;
    const {pathname} = useRouter();

    return (
        <Link href={link} className={styles.navButton}>
            <div >
                {buttonLabel}{pathname.includes(link) ? ' ⟽' : null}
            </div>
        </Link>
    )
}