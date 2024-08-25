import Header from "../Header/Header"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import Aside from "../Aside/Aside"
import  styles  from "./mainLayout.module.css"

const MainLayout  = ({children, sideBar }) => {
    return(
        <>
        <Header/>
            <Body>
                { sideBar && 
                    <Aside>
                        {sideBar }
                    </Aside>
                }
                {children}
            </Body>
        <Footer/>
        </>
    ) 
}

export default MainLayout 