import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import NavButtons from "./NavButtons";
import styles from "../styles/Nav.module.css"
import { useRouter } from "next/router";

export default function Nav() {
    const [bar, setBar] = useState('desktop');
    const [width, setWidth] = useState(undefined);
    const {pathname} = useRouter();

    function scrollFunction() {
        if (document.getElementById("navbar") === null) return;
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
      }

    useEffect(() => {
        if (width < 500) {
            setBar('mobile');
        } else if (width >= 500) {
            setBar('desktop');
        }
    }, [width]);

    useEffect(() => {
        window.addEventListener('resize', ()=> {
            setWidth(window.innerWidth);
        })
        window.addEventListener('scroll', scrollFunction);
    }, []);

    return (
        <div className={styles.nav} id='navbar'>
            <NavButtons href='gallery' name='Gallery'/>
            <NavButtons href='about' name='About'/>
        </div>
    )
}