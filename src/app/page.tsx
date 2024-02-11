'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./layout.css";
import "./main.css";
import { useEffect, useState } from "react";
export default function Main() {

    const router = useRouter();
    const [trigger,setTrigger] = useState(false);
    
        useEffect(() => {

            let timeOut : NodeJS.Timeout | null;

            if(trigger) {
                timeOut = setTimeout(() => {router.push("/about")},2000);
            }

            return () => {if(timeOut) {
                clearTimeout(timeOut);
                }
            }

         });


    const handleRoute = ()  => {
        setTrigger(true);
    }

    return <>
    <div className="code" id="HelloCodeDiv">
        <div>
            <p id="line1" > <span className="reservedWords">{`public class`}</span> <span className="classRealName">{`Pling`}</span> {`{`}</p>
            <p id="line2"><span className="reservedWords">{`public static void`}</span> <span className="MethodRealName">{`main`}</span>{`(String[] args)`} {`{`}</p>
            <p id="line3">{`System.out.println(`}<span className="textTyped">{`"Press the button to play!"`}</span>{`);`}</p>
            <p id="line4">{`}`}</p>
            <p id="line5">{`}`}</p>
        </div>
    </div>
    <div id="buttonNevg">
        <p style={{display: trigger ? "block" : "none", fontSize: 30 }}>Hell yeah let's beginn!</p>
        
        <button style={{display: trigger ? "none" : "block"}} onClick={handleRoute}>
            Begin
            <Image src={"/Images/Q.png"} alt="Q" width={23} height={23}/>
            </button>
    </div>
    </>
}