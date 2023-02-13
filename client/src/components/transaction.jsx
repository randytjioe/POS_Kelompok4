import { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  InputRightAddon,
  List,
  ListItem,
  Divider,
  Button,
  Grid,
  GridItem,
  Icon,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import { RangeDatepicker } from "chakra-dayzed-datepicker";

export default function Transaction(props) {
  const data = props.data;
  // const [startDate, endDate] = dateRange;
  const [total, setTotal] = useState(0);
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setTotal(
        data?.reduce(
          (partialSum, product) => partialSum + product.harga,
          0
        )
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(total);
  }, [total]);
  console.log(selectedDates);

  function filter() {
    const data =  [selectedDates[0],selectedDates[1]]
    props?.fetchData()
    console.log(data)
  }
  return (
    <>

    
      <Center flexDir={"column"} className="table-trans">
        <Center flexDir={"row"} px={"20px"} py={"20px"} gap={5}>
          Date:
          <RangeDatepicker
            selectedDates={selectedDates}
            onDateChange={setSelectedDates}
          />
          <Button onClick={filter}>Filter</Button>
        </Center>
        <Flex>
          <Flex flexDir={"column"} className="table-trans">
            <Accordion defaultIndex={[0]} allowToggle w="1000px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Flex className="table-trans">Transaction</Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} w="1000px">
                  <TableContainer >
                    <Table variant="striped" colorScheme="teal">
                      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                      <Thead>
                        <Tr>
                          <Th textAlign="centre">No Transaction</Th>
                          <Th w="10px" textAlign="centre">Tanggal</Th>
                          {/* <Th w="20px">Kasir</Th> */}
                          <Th textAlign="centre">Produk</Th>
                          <Th textAlign="centre">Brand</Th>
                          <Th w="50px" textAlign="centre">Gender</Th>
                          <Th textAlign="centre">Harga</Th>
                          <Th w="10px" textAlign="centre">Jumlah</Th>
                          <Th textAlign="centre">Total Belanja</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data?.map((product) => {
                          return (
                            <>
                              <Tr>
                                <Td textAlign="centre">{product?.Trans_Header.no_trans}</Td>
                                <Td textAlign="centre" w="10px">{product?.Trans_Header.tgl}</Td>
                                {/* <Td w="20px">{product?.Trans_Header.User.name}</Td> */}
                                <Td textAlign="centre">{product?.Product.name}</Td>
                                <Td textAlign="centre">{product?.Product.Brand.name}</Td>
                                <Td textAlign="centre" w="50px">{product?.Product.Gender.name}</Td>
                                <Td textAlign="centre">{product?.Product.harga}</Td>
                                <Td textAlign="centre" w="5px">{product?.qty}</Td>
                                <Td textAlign="centre">
                                     Rp. {product?.harga.toLocaleString()}
                                </Td>
                              </Tr>
                            </>
                          );
                        })}
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Th>TOTAL</Th>
                          <Th></Th>
                          <Th></Th>
                          <Th></Th>
                          <Th></Th>
                          <Th></Th>
                          <Th></Th>
                          <Th isNumeric>Rp. {total.toLocaleString()}</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
