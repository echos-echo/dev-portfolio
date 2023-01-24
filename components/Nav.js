import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";

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
            <div><Link href="/">E.cho</Link></div>
            <div>
                <Link href="/gallery">Gallery</Link>
            </div>
            <div>
                <Link href="/about">about</Link>
            </div>
        </div>)
        :
        (<div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
        </div>)
    )
}