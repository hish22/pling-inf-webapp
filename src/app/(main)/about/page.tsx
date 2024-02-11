import Button from "@/components/button/button";
import Image from "next/image";
import "./about.css";
export default function About() {
    return (
        <>
            <section id="about-Page">
                <div id="about-page-div">
                    <Image id="char-img" src={"/Images/Tony_With_Light.png"} alt="Character" width={512} height={512} />
                    <div id="info">
                        <h1>PLING</h1>
                        <p>Hello everyone, I'm <span>hisham</span> (Know as pling), CS student, <br />
                            I don't like to talk to much so let us end with it, <br />
                            I like programming, problem solving , <br />
                            designing, learning and play video games
                            </p>
                    </div>
                </div>
            </section>
        </>
    )
}