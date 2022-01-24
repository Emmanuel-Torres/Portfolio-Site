import { FC } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

type Props = {
}

const SocialMedia: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <a href='https://www.linkedin.com/in/emmanuel-torres-580516220/'
               className='display-3 text-black'
               target='_blank'
               rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/Emmanuel-Torres'
               className='display-3 text-black'
               target='_blank'
               rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a href="/" className='display-3 text-black'>
                <AiOutlineMail />
            </a>
        </>
    )
}

export default SocialMedia;