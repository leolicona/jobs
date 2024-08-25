import propTypes from 'prop-types';
import { container, image } from './iconTag.module.css'

function IconTag({children, src }) {
    return (
        <div className={container}>
            <img src={src} className={image}/>
            {children}
        </div>
    )
    
}

IconTag.propTypes = {
    children: propTypes.node.isRequired,
    src: propTypes.string.isRequired
}

export default IconTag;