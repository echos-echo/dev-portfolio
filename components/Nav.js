import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const [bar, setBar] = useState('desktop');
    const [width, setWidth] = useState(undefined);

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
    }, []);

    return (
        bar === 'desktop' ? 
        (<div>
            <div><Link href="/"><Image src="/echo.png" width={60} height={60} alt='green and yellow logo of `echo`'/></Link></div>
            <div>
                <Link href="/gallery">Gallery</Link>
            </div>
            <div>
                <Link href="/about">About</Link>
            </div>
        </div>)
        :
        (<div>
            <Link href="/"><Image src="/echo.png" width={50} height={50} alt='green and yellow logo of `echo`'/></Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
        </div>)
    )
}