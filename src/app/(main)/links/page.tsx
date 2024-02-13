import Image from "next/image"
import Button from "@/components/button/button"

export default function Links() {
    return (<>
        <div id="x-Account">
            <Image src={"/Images/x(25px).png"} alt="x" width={80} height={80} />
            <a href="https://twitter.com/HishamJog">https://twitter.com/HishamJog</a>
        </div>
        <div id="github-Account">
            <Image src={"/Images/github.png"} alt="x" width={60} height={60} />
            <a href="https://github.com/hish22">https://github.com/hish22</a>
        </div>
    </>)
}