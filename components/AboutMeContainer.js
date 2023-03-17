import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import AboutMeLinks from "./AboutMeLinks";

export default function AboutMeContainer() {

    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeLeft}>
            <Image src='/me.JPG' height={500} width={500} alt='will be an image of me'
            quality={100}/>

            </div>
            <div className={styles.aboutMeRight}>
            <div>
            I&apos;m Eve Cho, a software engineer based just out of NYC.
            I develop for the joy of solving problems and watching applications come to life.
            <br/><br/>
            When I&apos;m not committing code, I&apos;m committed to drawing, gaming,
            and daydreaming of places to travel. 
            </div>
            <br/>
            <AboutMeLinks/>
            </div>
            
            
        </div>
    )
}