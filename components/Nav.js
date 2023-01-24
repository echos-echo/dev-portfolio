import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

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
        (<div>navigation for desktop</div>)
        :
        (<div>navigation for mobile</div>)
    )
}