import { container } from "./aside.module.css"

const Aside = ({children}) => {
    return(
        <aside className={ container }>
            {children}
        </aside>
    )
}

export default Aside