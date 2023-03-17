import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function AboutMeLinks() {

    const copyEmail = async() => {
        try {
            await navigator.clipboard.writeText(`e.young.echo@gmail.com`);
            alert('Email copied to clipboard! I look forward to hearing from you.');
        } catch(err) {
            console.error('Failed to copy email!!!', err);
        }
    }

    const preventRefresh = e => {
        e.preventDefault();
    }

    return (
        <div className={styles.aboutMeLinks}>
            <a href='https://github.com/echos-echo' target={'_blank'} rel={'noreferrer'}>
                <GitHubIcon sx={{fontSize: 60}}/>
            </a>
            <a href='https://www.linkedin.com/in/echos-echo/' target={'_blank'} rel={'noreferrer'}>
                <LinkedInIcon sx={{fontSize: 60}}/>
            </a>
            <a href='' onClick={preventRefresh}>
                <EmailIcon sx={{fontSize: 60}} onClick={copyEmail}/>
            </a>
            
        </div>
    )
}