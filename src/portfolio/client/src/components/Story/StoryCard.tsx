import { FC } from "react";
import { Link } from "react-router-dom";
import Story from "../../models/story";

type Props = {
    story: Story
}

const StoryCard: FC<Props> = (props): JSX.Element => {
    const imageUrl = (props.story.mainImageUrl && props.story.mainImageUrl?.trim().length > 0) ? props.story.mainImageUrl : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';

    return (
        <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3'>
            <div className='card border border-secondary h-100'>
                <Link to={`/stories/${props.story.id}`} className='text-decoration-none text-black'>
                    <img src={imageUrl} className='card-img-top' alt='foo' />
                    <div className='card-body d-flex align-items-center'>
                        <h5 className='card-title m-0'>{props.story.title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default StoryCard;