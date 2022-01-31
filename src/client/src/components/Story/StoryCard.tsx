import { FC } from "react";
import { Link } from "react-router-dom";
import Story from "../../models/story";

type Props = {
    story: Story
}

const StoryCard: FC<Props> = (props): JSX.Element => {
    return (
        <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3'>
            <div className='card border border-secondary h-100'>
                <Link to={`/stories/${props.story.Id}`} className='text-decoration-none text-black'>
                    <img src='https://www.aspca.org/sites/default/files/styles/full_width_2_col/public/field/image/adoptable_animal/mishi_a46703853_2021mar11_0081.jpg?itok=y5GNr9za' className='card-img-top' alt='foo' />
                    <div className='card-body d-flex align-items-center'>
                        <h5 className='card-title m-0'>{props.story.Title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default StoryCard;