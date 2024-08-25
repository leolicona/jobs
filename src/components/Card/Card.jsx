import propTypes from 'prop-types'
import { container, image, information } from './card.module.css'

function Card({ children, title, legend, classStyle, ...props }) {
    return (
       <article className={`${container} ${classStyle}`}  {...props}>
            <img src="https://via.placeholder.com/150" alt="placeholder" className={image}/>
            <div className={information}>
                <h2>{title}</h2>
                <p>{legend}</p>
                { children && children }
            </div>
       </article>
    )
    
}

Card.propTypes = {
    children: propTypes.node,
    title: propTypes.string.isRequired,
    legend: propTypes.string.isRequired,
    classStyle: propTypes.string

}

export default Card