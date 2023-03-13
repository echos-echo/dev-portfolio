import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function PageTitle(props) {

    return (
        <div className={styles.pageTitle}>
            {props.title}
        </div>
    )
}