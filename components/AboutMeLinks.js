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

    

    return (
        <div className={''}>
            <GitHubIcon sx={{fontSize: 60}}/>
            <LinkedInIcon sx={{fontSize: 60}}/>
            <EmailIcon sx={{fontSize: 60}}/>
        </div>
    )
}