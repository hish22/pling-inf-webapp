import InfoSvg from "@/imgs/infoSvg"
import Link from "next/link"
import "./button.css";

export default function Button(props: {
    uri: string,
    icon: any
}) {
    return ( 
    <div id="button">
        <Link href={props.uri}>{props.icon}</Link>
    </div>
    )
}