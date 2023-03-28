import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <a href='https://github.com/echos-echo/dev-portfolio' target={'_blank'} rel={'noreferrer'}>
                <GitHubIcon sx={{fontSize: 40}}/>
            </a>
            <a href='https://github.com/echos-echo/dev-portfolio' target={'_blank'} rel={'noreferrer'}>
                <span>&nbsp;check out the GitHub for this site</span>
            </a>
        </div>
    )
}