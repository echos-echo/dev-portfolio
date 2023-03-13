import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NavButtons from "./NavButtons";
import styles from '../styles/Home.module.css'

export default function SplashDescription() {
    return (
        <div className={styles.splashDescription}>
            <div>
                <p>creator</p>
                <p>◇</p>
                <p>software engineer</p>
                <p>◇</p>
                <p>artist</p>
            </div>
            <NavButtons href='gallery' name='Gallery'/>
            <NavButtons href='about' name='About'/>
        </div>
    )
}