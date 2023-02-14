import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
// import AddProduct from "../components/add_product";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import Transaction from "../components/transaction";
import { axiosInstance } from "../config/config";
import "../css/style.css";
import moment from "moment";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function PageTransaction() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  async function fetchData(dateFrom,dateTo) {
    dateFrom = [moment().format("YYYY-MM-DD")]
    dateTo =[moment().format("YYYY-MM-DD")]
    await axiosInstance.post("/transaction/filterbydate",[...dateFrom,...dateTo]).then((res) => {
      setData(res.data.result);
      console.log(res.data.result)
      console.log([...dateFrom,...dateTo])
    });

  }
  return (
    <>
      <NavBar />
      <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
        <SideBar />
      </Flex>
      <Center marginLeft={"209px"}>
        <Transaction fetchData={fetchData} data={data} />
      </Center>
    </>
  );
}
