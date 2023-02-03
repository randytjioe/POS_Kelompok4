import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
  Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
   useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
   PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Tooltip ,Center} from '@chakra-ui/react';

   import Logo from '../assets/logo.svg.png'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link as ReachLink } from "react-router-dom"
import { useRef } from 'react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiBox,
  FiWatch,
} from 'react-icons/fi';


export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const initialRef = useRef(null)
  const finalRef = useRef(null)
    return (
      <>
    <Flex zIndex={90} px={2} w={'240px'}
     backgroundColor="#000000" justifyContent="center" 
       h="full" pos="fixed" top="0" padding="20px" display={"flex"}  borderRight={"2px solid #E2E8F0"}>
    <Flex  gap={5} flexDir={"column"}  >
    <Flex   justifyContent="center" alignItems={"center"}>
          <Center>
          <Image
            src={Logo}
          
            sx={{
              _hover: {
                cursor: 'pointer',
              },
            }} w={"149px"} h={"178px"}
          ></Image>
          </Center>
        </Flex>
        <Flex flexDir={"column"}  alignItems={'center'} >     
        <Divider orientation="horizontal" py={2}/>
        <Flex w="207px" h="56px"  alignItems={'center'} 
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}> <Icon as={FiHome} color="white" mx={2}/><Link to='/women' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > DASHBOARD</Link> </Flex>
        <Flex w="207px" h="56px"  alignItems={'center'} 
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}
        > <Icon as={FiBox} color="white" mx={2}/><Link to='/men'as="b" mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > PRODUCTS</Link> </Flex>
        <Flex w="207px" h="56px"  alignItems={'center'}
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}><Icon as={FiWatch} color="white" mx={2}/><Link as="b" mx={3}  fontSize={16} color="white" > TRANSACTION</Link></Flex>

        </Flex>  
        <Flex alignItems={'center'} >
      
          </Flex>
         
          </Flex>
        </Flex>
    </>
  );
}
