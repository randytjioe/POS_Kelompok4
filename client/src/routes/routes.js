import LoginPage from "../pages/loginpage"
import AdminPage from "../pages/adminpage"
import CashierPage from "../pages/cashierpage"
import PageProducts from "../pages/productspage"
import PageTransaction from "../pages/pagetransaction"
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
        path:"/",
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
    {
        path:"/transaction",
        element : (
                <ProtectedPage needLogin={true} >
                <PageTransaction/>
                </ProtectedPage>
        )
    },
    
]

export default routes;