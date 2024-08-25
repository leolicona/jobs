import { container, wrapper } from "./footer.module.css"

const Footer = () => {
    return(
        <footer className={container}>
            <div className={wrapper}>
                <h5>created by username - devChallenges.io</h5>
            </div>
        </footer>
    ) 
}

export default Footer 