import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function AboutMeSkills() {

    return (
        <div className={''}>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'}
            width={100} height={100} alt={'javascript logo'}/>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'}
            width={100} height={100} alt={'node.js logo'}/>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'}
            width={100} height={100} alt={'react.js logo'}/>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'}
            width={100} height={100} alt={'next.js logo'}/>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'}
            width={100} height={100} alt={'html5 logo'}/>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'}
            width={100} height={100} alt={'css3 logo'}/>

        </div>
    )
}