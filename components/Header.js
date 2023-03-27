import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import NavButtons from "./NavButtons";

export default function Header() {

    return (
        <div className={styles.header}>
            <Link href="/"><h1>E.Cho</h1></Link>
            <NavButtons href='gallery' name='Gallery'/>
            <NavButtons href='about' name='About'/>
        </div>
    )
}