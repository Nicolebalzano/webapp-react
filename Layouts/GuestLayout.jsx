import { Outlet } from "react-router-dom"
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
const GuestLayout = () => {
return(
    <>
    <AppHeader/>
    <Outlet/>
    <AppFooter/>
    </>
)
}
export default GuestLayout;