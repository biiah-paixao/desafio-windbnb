import { CardContainer, ImageContainer, CardText, ImageCard } from '../styles'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPosts, PostsInterface } from '../services/getPosts'

type CardProps = {
    posts : PostsInterface,
}

export function Card(props : CardProps) {

    return (
        <>
            <CardContainer>
                <ImageCard src={props.posts.photo}/> 
                <CardText>
                    {props.posts.superHost ? (
                        <span>Super Host</span>
                        ) : (
                        null
                    )}
                    <p className='type'>{props.posts.type}.{props.posts.beds} beds </p>
                    <p className='rating'>
                        <FontAwesomeIcon icon={faStar} size="xs" color='#EB5757'/>
                        {props.posts.rating}
                    </p>
                    
                    <p className='title'>{props.posts.title}</p>
                </CardText>
            </CardContainer>
        </>

    )
}