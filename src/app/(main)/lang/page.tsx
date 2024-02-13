import Image from "next/image"

export default function Lang() {

    const progLang : {id: number, langName: string, uri: string}[] = [
        {id: 1, langName: "PHP", uri: "https://www.php.net/"},
        {id: 2, langName: "JAVA", uri: "https://docs.oracle.com/en/java/"},
        {id: 3, langName: "JAVASCRIPT", uri: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
        {id: 4, langName: "C++", uri: "https://devdocs.io/cpp/"},
        {id: 5, langName: "HTML", uri: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
        {id: 6, langName: "CSS", uri: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
        {id: 7, langName: "PYTHON", uri: "https://docs.python.org/3/"},
        {id: 8, langName: "SQL", uri: "https://developer.mozilla.org/en-US/docs/Glossary/SQL"}
    ]

    const elements = () => {
        return progLang.map(value => (
            <a href={value.uri} className="lang_style" key={value.id}>{value.langName}</a>
        ));
    }

    return (<>
        <h1 id="skills-text"> SKILLS </h1>
        <div>
            {elements()}
        </div>
    </>)
}