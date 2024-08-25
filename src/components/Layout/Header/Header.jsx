import { container, wrapper }from "./header.module.css"


const Header = () => {
    return(
        <header className={container}>
            <div className={wrapper}>
             <h1>GITHUB Jobs</h1>
            </div>
        </header>
    ) 
}

export default Header