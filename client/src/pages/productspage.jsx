import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import SidebarProduct from "../components/sidebar_product"
import { useEffect, useState } from "react"
import { axiosInstance } from "../config/config"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import Products from "../components/products"
export default function PageProducts(){
    const [data,setData] = useState();
    const [datamen,setdatamen] = useState();
    const [datawomen,setdatawomen] = useState();
    
    const [isLoading,setIsLoading] = useState(true)
    const [posts,setPosts] = useState([])
    
    const fetchPosts = async (garmin)=> {
     const datas =  await axiosInstance.get("posts")
    console.log(datas.result.data)
     
    //  .then((res)=> {
    //       setPosts(res.data)
    //   })

      console.log(garmin)
      if(garmin) 
      {
       const filtered =  datas.result.data.filter((val)=> {
          return  val?.category === garmin 
        })

        return setPosts(filtered)
      }
     
      setPosts(datas.result.data)
    }
    
    useEffect(()=>{
      fetchPosts();
        fetchData();
      setTimeout(() => {
        
          setIsLoading(!isLoading)
         
        }, 500);  
     
    },[])
    
    async function fetchData(garmin) {
     await axiosInstance.get("/product-men").then((res)=>{
        setData(res.data.result)
        
        const productmen = res.data.result.filter((val) => {
          return val.men === 1 
        })

        console.log(productmen)

        if(garmin) { 
        console.log("masuk")
        
          
        const filter =   productmen.filter((val)=> {
            return val.category === garmin
          })

        console.log(filter)


          return setdatamen(filter)
        }
    
        setdatamen(productmen);
    })

    await axiosInstance.get("/product-women").then((res)=>{
      setData(res.data.result)
      
      const productwomen = res.data.result.filter((val) => {
        return val.women === 1 
      })
      
    
      setdatawomen(productwomen);
    })
}

    return(
        <>
            {
        isLoading? 
        // <Loading/>

        <Center w={"100vw"} h="100vh" alignContent={"center"}>
      <Spinner/>

        </Center>
        :
        (
            <>
            <Navbar/>

            <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <Sidebar/>
            <SidebarProduct filter={fetchData}/>
            </Flex>

          
            <Center marginLeft={"450px"}>
              
            <Products data={datamen} id="men"/>
              
               </Center>

               </>
    )
}
</>
)
}