import { ReactNode } from "react";
import "./card.css";

export default function Card(props : {
    'name': String,
    'logo': ReactNode
}) {
    return (
        <div style={{backgroundColor: 'beige'}}>
            {props.logo}
            <p>{props.name}</p>
        </div>
    )
}