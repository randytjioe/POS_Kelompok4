import { useEffect, useState } from "react"
import productDetail from "../components/productDetail"

import axios from "axios"
import { Flex, Image, InputGroup, InputRightElement, Input, InputRightAddon, Link,List,ListItem, Button, Grid, GridItem, Icon } from '@chakra-ui/react';

export default function ProductPage() {

    const [products, setproducts] = useState([])

    const [product,setproduct] = useState({
    })

    const [newData, setData] = useState(
        {
            id:0,
            name: "", 
            brand_id : "", 
            gender_id: "" ,
            stock : 5,
            harga : 10000,
            Image_url : "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png"
        })
    function changeproduct(newproduct) {
        setproduct(newproduct)
    }
    
     function showForm(edit) {

        if(edit) {
            setData({...product})
            document.getElementsByName("name")[0].value = product.name;
            document.getElementsByName("brand_id")[0].value = product.brand_id;
            document.getElementsByName("gender_id")[0].value = product.gender_id;
            document.getElementsByName("stock")[0].value = product.stock;
            document.getElementsByName("harga")[0].value = product.harga;
            document.getElementsByName("Image_url")[0].value = product.Image_url;

        }
        else {
            setData({
                id:0,
                name: "", 
                brand_id : "", 
                gender_id: "" ,
                stock : "",
                harga : "",
                Image_url : "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png"
            })

            document.getElementsByName("name")[0].value = "";
            document.getElementsByName("brand_id")[0].value = "";
            document.getElementsByName("gender_id")[0].value = "";
            document.getElementsByName("stock")[0].value = "";
            document.getElementsByName("harga")[0].value ="";
            document.getElementsByName("Image_url")[0].value = "";

        }
        var x =  document.getElementById("background-add");
        var y = document.getElementsByClassName("product-slider")
        if (x.style.display === "none" || x.style.display === "") {
            setTimeout(()=> {
                x.style.display = "flex";
          x.style.flexDirection = "row"
            y[0].style.display = "none"
        },500)
        } else {
          x.style.display = "none";
          y[0].style.display = "grid"    
        }
  
      }

      function addproductItem() {
        console.log(newData);
        if(products.find((val)=> val.id === newData.id)) {
            return axios.patch("http://localhost:2000/jamtangan/" + newData.id, newData).then(()=>{
                fetchproducts()
                alert("product has been product has been updated ")
               })
        }

       return axios.post("http://localhost:2000/jamtangan", newData).then(()=>{
        fetchproducts()
        alert("new product has been added ")
       })


      }

      function InputHandler(event) {
        const { value, name } = event.target;
        setData({
          ...newData,
          [name]: value,
        })
      }

      useEffect(() => {
        if(newData.Image_url === "")
        setData({
            ...newData,
            ["Image_url"]: "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png",
          })
      },[newData.Image_url])

    
    const fetchproducts = async () => {
      await axios.get("http://localhost:2000/jamtangan").then((res)=>{
        setproducts([...res.data])
        setproduct({...res.data[0]})
      })
    }

    const deleteproduct = async () => {
        let answer =  window.confirm("are you sure you want to delete this product?")
       if(answer) {
        await axios.delete("http://localhost:2000/jamtangan/"+ product.id ).then(()=>{
            fetchproducts()
            alert("product has been deleted ")
        })
     
         }
       } 


    useEffect(  () => {
        fetchproducts();

    },[])

    return (
        <>
      
      
        <Flex height="100vh" >    

        <Flex>
        <Flex >
      <Flex > jamtangan</Flex>
        <Flex className="navbar-text">
            <Flex className="navbar-box1">UNLIMITED TV SHOWS & products</Flex>
            <Flex className="navbar-box2" onClick={()=> showForm()}>NEW</Flex>
            <Flex  className="navbar-box3" onClick={()=> showForm("edit")}>EDIT</Flex>
            <Flex  className="navbar-box3" onClick={()=> deleteproduct()}>DELETE</Flex>

        </Flex>
        </Flex>
         <Flex id="background-add" >
        <Flex className="product-add">
        <Image src={newData.Image_url} alt="product_Image" style={{ width:"100%", height: "200px" }} />
        <Input name="name" className="Input-product" type={"text"} placeholder="product name"  onChange={InputHandler}></Input>       
        <Input name="Image_url" className="Input-product" type={"text"} placeholder="Image URL"  onChange={InputHandler}></Input>
        <Input name="brand_id" min={1} max={100} className="Input-product" type={"number"} placeholder="brand_id"  onChange={InputHandler}></Input>
        <Input name="gender_id" className="Input-product" type={"number"} placeholder="gender_id"  onChange={InputHandler}></Input>
        <textarea name="stock" className="Input-product" type={"text"} placeholder="product stock"  onChange={InputHandler}></textarea>
        <Input name="harga" className="Input-product" type={"text"} placeholder="harga"  onChange={InputHandler}></Input>
        <Button className="Button-add-product"   onClick={addproductItem}>Save </Button>
         </Flex>

        </Flex>

        </Flex>

            <Flex className="product-template" 
            style={{ backgroundImage: `url("${product.Image_url}")` }}>
          <productDetail product={product} />
          <Flex className="product-Image"></Flex>
          </Flex>
            <Flex className="product-slider" >
                <Flex className="product-slider-popular">POPULAR ON jamtangan</Flex>
                <Flex className="product-list">
              
              { products.map((val,idx) => {
                return (
                    <Flex id={"product_"+idx} key={idx} className="product" onClick={()=> changeproduct(val)}>
                    <Image  src={val.Image_url} alt=""/>
                </Flex>
                )
              })
              
              }
             
                </Flex>
            </Flex>
        </Flex>

        </>

    )
}