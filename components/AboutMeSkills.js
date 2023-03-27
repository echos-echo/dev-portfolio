import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function AboutMeSkills() {

    return (
        <div className={styles.skills}>
            <Image src={'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'}
            width={100} height={100} alt={'javascript logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/typescript.svg'}
            width={100} height={100} alt={'typescript logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'}
            width={100} height={100} alt={'node.js logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/next-js.svg'}
            width={100} height={100} alt={'next.js logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/react-2.svg'}
            width={100} height={100} alt={'react.js logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/redux.svg'}
            width={100} height={100} alt={'redux logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/html-1.svg'}
            width={100} height={100} alt={'html5 logo'}/>
            <Image src={'https://cdn.worldvectorlogo.com/logos/css-3.svg'}
            width={100} height={100} alt={'css3 logo'}/>

        </div>
    )
}