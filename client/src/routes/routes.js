import LoginPage from "../pages/loginpage"
import AdminPage from "../pages/adminpage"
import CashierPage from "../pages/cashierpage"
import PageProducts from "../pages/productspage"
import ProtectedPage from "./protected"


const routes = [

    {
        path:"/login",
        element :(
                  <ProtectedPage >
                    <LoginPage/>
                    </ProtectedPage>
        )
    },
    {
        path:"/adminpage",
        element :(
                    <ProtectedPage needLogin={true} >
                    <AdminPage/>
                    </ProtectedPage>
            )
    },
    {
        path:"/cashierpage",
        element :( 
                    <ProtectedPage needLogin={true} >    
                    <CashierPage/>
                    </ProtectedPage>
        )
    },
    {
        path:"/products",
        element : (
                <ProtectedPage needLogin={true} >
                <PageProducts/>
                </ProtectedPage>
        )
    },
]

export default routes;