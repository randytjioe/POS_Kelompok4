import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  List,
  ListItem,
  Button,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  CloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Cashier(props) {
  const data = props.data;

  const [orderList, setOrderList] = useState([]);

  const handleAddToCart = (product, qty) => {
    // const tempt = [...orderList, product];
    // console.log(tempt);

    const tempOrder = [...orderList];
    console.log(product);
    const orderItem = {
      qty,
      total_harga_transaction: qty * product.price_promo,
      price: product.price_promo,

      product,
    };

    const idx = orderList.findIndex((val) => {
      return val.product.name === product.name;
    });

    console.log(idx);

    if (idx >= 0) {
      tempOrder[idx] = orderItem;
      return setOrderList([...tempOrder]);
    }
    console.log("hello");
    setOrderList([...orderList, orderItem]);
  };

  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  const handleDeleteFromCart = (product) => {
    const temp = [...orderList];

    const index = temp.findIndex((p) => p.name === product.name);
    temp.splice(index, 1);
    setOrderList(temp);
  };

  return (
    <>
      <Flex p={5} h="100vh" marginLeft="210px" overflow={"auto"}>
        <Flex
          w="100%"
          overflowY={"scroll"}
          bg="gray.200"
          flexDir={"column"}
          px={4}
        >
          <Flex fontWeight="bold" mb={5} fontSize={"24px"}>
            Products
          </Flex>
          <Stack spacing={5}>
            {data?.map((product) => (
              // <Flex p={5} bg="white" shadow="md">
              //   <Image w=" 90px" h="90px" src={product?.imageURL} />
              //   <Box ml={5}>
              //     <Text fontWeight="bold">{product?.name}</Text>
              //     <Text fontSize="sm">
              //       Rp. {product?.price_promo.toLocaleString()}
              //     </Text>
              //     <Flex gap={3}>
              //       <Accordion>
              //         <AccordionItem>
              //           <AccordionPanel>
              //             <NumberInput
              //               onChange={() => {}}
              //               defaultValue={1}
              //               min={0}
              //             >
              //               <NumberInputField />
              //               <NumberInputStepper>
              //                 <NumberIncrementStepper />
              //                 <NumberDecrementStepper />
              //               </NumberInputStepper>
              //             </NumberInput>

              //             <Button
              //               mt={2}
              //               onClick={() => handleAddToCart(product)}
              //               colorScheme="green"
              //               w="50%"
              //             >
              //               Add to Cart
              //             </Button>
              //           </AccordionPanel>
              //         </AccordionItem>
              //       </Accordion>
              //     </Flex>
              //   </Box>
              // </Flex>

              <Product product={product} handleAddToCart={handleAddToCart} />
            ))}
          </Stack>
        </Flex>

        <Flex w="800px" px={5} bg="gray.200" flexDir={"column"}>
          <Text fontWeight="bold" fontSize={"24px"} mb={5}>
            Order List
          </Text>
          <Flex
            spacing={3}
            gap="2"
            flexDir="row"
            overflowX="auto"
            wrap={"wrap"}
          >
            {orderList.map((product) => (
              <OrderList
                data={product}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            ))}
          </Flex>
          <Box mt={5}>
            <Text fontWeight="bold">
              Total: Rp.
              {orderList
                .reduce(
                  (total, data) => total + data.total_harga_transaction,
                  0
                )
                .toLocaleString()}
            </Text>
          </Box>
          <Box mt={5}>
            <Box display="flex" justifyContent="space-around">
              <Button colorScheme={"cyan"}>Confirm</Button>
              <Button
                mt={"1px"}
                onClick={() => setOrderList([])}
                colorScheme="red"
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

function OrderList(props) {
  return (
    <>
      <Flex>
        <Flex>
          <Image w=" 50px" h="50px" src={props.data.product?.imageURL} />
          <Box ml={5}>
            <Text fontWeight="bold">{props.data.product?.name}</Text>
            <Text fontSize="sm">
              Rp. {props.data.product?.price_promo.toLocaleString()} x{" "}
              {props?.data.qty} = Rp. {props.data.total_harga_transaction}
            </Text>
          </Box>
        </Flex>
        <Flex flexDir={"row-reverse"}>
          <Flex>
            <CloseButton
              size="sm"
              color={"black"}
              onClick={() => props?.handleDeleteFromCart(props?.data.product)}
              colorScheme="red"
              position="fix"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Product(props) {
  const [qty, setQty] = useState(1);

  return (
    <Flex p={5} bg="white" shadow="md">
      <Image w=" 90px" h="90px" src={props.product?.imageURL} />
      <Box ml={5}>
        <Text fontWeight="bold">{props.product?.name}</Text>
        <Text fontSize="sm">
          Rp. {props.product?.price_promo.toLocaleString()}
        </Text>
        <Flex marginTop={2} gap={2} flexDir="column">
          {/* <Accordion>
            <AccordionItem> */}

          {/* <Flex flexDir={"column"} > */}
          <NumberInput
            maxW={"100px"}
            onChange={(valueString) => {
              setQty(valueString);
            }}
            defaultValue={qty}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button
            maxW={"100px"}
            mt={2}
            onClick={() => props.handleAddToCart(props.product, qty)}
            colorScheme="green"
            w={"full"}
          >
            Add to Cart
          </Button>
          {/* </Flex> */}
          {/* </AccordionItem>
          </Accordion> */}
        </Flex>
      </Box>
    </Flex>
  );
}
