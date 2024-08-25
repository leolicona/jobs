import {container, content} from "./body.module.css"
const Body = ({children}) => {
    return(
        <article className={container}>
            <div className={content}>
                {children}
            </div>
        </article>
    )
}

export default Body