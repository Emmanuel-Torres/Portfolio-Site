import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import styles from "./StoryDetails.module.css"
import CodeBlock from "../CodeBlock/CodeBlock";
import axios from "axios";

const StoryDetails: FC = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const [content, setContent] = useState<string>();
    
    const filename = searchParams.get('filename');
    const blogDirectory = '/portfolio/blogs/';

    useEffect(() => {
        axios.get<string>(blogDirectory + filename).then(r => setContent(r.data));
    }, [filename]);

    return (
        <>
            <main className={styles.main}>
                <ReactMarkdown components={CodeBlock} children={content ?? ''} />
            </main>
        </>
    )
};

export default StoryDetails;