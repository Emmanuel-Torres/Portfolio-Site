import { FC, useEffect, useState } from 'react';
import StoryCard from '../../components/StoryCard/StoryCard';
import styles from './Stories.module.css'
import Blog from '../../models/blog';
import axios from 'axios';

const Stories: FC = (): JSX.Element => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get<Blog[]>('/portfolio/blogs/blogs.json').then(r => setBlogs(r.data));
    })


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blogs</h1>
            <ul className={styles.stories}>
                {blogs.map((s,i) =>
                    <li key={i} className={styles.story}>
                        <StoryCard story={s} />
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Stories;