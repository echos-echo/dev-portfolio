import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function ProjectLinks(props) {
    const repo = props.repo;
    const siteURL = props.siteURL || null;
    const projectName = props.name;

    return (
        <div className={''}>
            placeholder but this will be where links relevant to a project will go
            <br/>
            {/* repository link */}
            <a href={repo} rel={'noreferrer'} target={'_blank'}>Check out {projectName}&apos;s repository</a>
            {/* site link ONLY if it exists */}
            {siteURL !== null ? <a href={siteURL} rel={'noreferrer'} target={'_blank'}>Check out {projectName} here</a> : null}
        </div>
    )
}