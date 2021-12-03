import { FC } from "react";
import { Link } from "react-router-dom";
import Story from "../../models/story";

type Props = {
    story: Story
}

const StoryCard: FC<Props> = (props): JSX.Element => {
    return (
        <div className='col-4 w-100'>
            <div className='card border border-secondary w-25'>
                <Link to={`/stories/${props.story.story_id}`} className='text-decoration-none text-black'>
                    <img src='https://www.aspca.org/sites/default/files/styles/full_width_2_col/public/field/image/adoptable_animal/mishi_a46703853_2021mar11_0081.jpg?itok=y5GNr9za' className='card-img-top' alt='foo' />
                    <div className='card-body'>
                        <h5 className='card-title'>{props.story.story_title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default StoryCard;