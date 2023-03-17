import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function ProjectTools(props) {
    const tools = props.tools;  // tools will be an array of the tech stack used for project
    const toolsFormatted = tools.join(' / ');

    return (
        <p>Created with: {toolsFormatted}</p>
    )
}