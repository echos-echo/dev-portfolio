import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function ProjectLink(props) {
    const url = props.url;
    const linkMessage = props.linkMessage;

    return (
        <div className={styles.projectLink}>
            <a href={url} rel={'noreferrer'} target={'_blank'}>{linkMessage}</a>
        </div>
    )
}