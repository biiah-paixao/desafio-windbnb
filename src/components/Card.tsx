import { CardContainer, ImageContainer, CardText, ImageCard } from '../styles'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPosts, PostsInterface } from '../services/getPosts'

type CardProps = {
    posts : PostsInterface,
}
export const Card: React.FC<CardProps> = ({
    posts,
  }) => {

    return (
        <>
            <CardContainer>
                <ImageCard src={posts.photo}/> 
                <CardText>
                    {posts.superHost ? (
                        <span>Super Host</span>
                        ) : (
                        null
                    )}
                    <p className='type'>{posts.type}.{posts.beds ? `${posts.beds} beds` : ''}</p>
                    <p className='rating'>
                        <FontAwesomeIcon icon={faStar} size="xs" color='#EB5757'/>
                        {posts.rating}
                    </p>
                    
                    <p className='title'>{posts.title}</p>
                </CardText>
            </CardContainer>
        </>

    )
}