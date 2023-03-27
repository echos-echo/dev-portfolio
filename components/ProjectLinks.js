import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import ProjectLink from "./ProjectLink";

export default function ProjectLinks(props) {
    const repo = props.repo;
    const siteURL = props.siteURL || null;
    const projectName = props.name;

    return (
        <div className={''}>
            {/* repository link */}
            <ProjectLink url={repo} linkMessage={`${projectName}'s repository`}/>
            {/* site link ONLY if it exists */}
            {siteURL !== null ?
            <ProjectLink url={siteURL} linkMessage={`${projectName} is live here`}/>
            : null}
        </div>
    )
}