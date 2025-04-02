import { Header } from "./Header"
import { LeftRightSection } from "./LeftRightSection"

export const LandingSection=()=>{

    return <>
    
    <Header/>
    
    <div className="pt-[60px] sm:pt-[100px] md:pt-[20px] lg:pt-[40px]" id="home">
    <LeftRightSection/>
    </div>
    </>

}

