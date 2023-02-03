import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
    Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
     useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
     PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Avatar , Center} from '@chakra-ui/react';
  
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

  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = useRef(null)
    const finalRef = useRef(null)
      return (
        <>
        <Flex zIndex={50} px={2} h={'107px'}
     backgroundColor="grey" justifyContent="right" 
      alignItems={'center'} w="full" position={"sticky"} top="0" padding="20px" display={"flex"}>
         
         <Flex px={3} gap={5}>

          

{/* <Menu position="fixed" zIndex="3" isLazy> */}
{/* <MenuButton> */}
<Flex alignItems={"center"}>
<Icon  boxSize={"7"} as={FiBell} color="white"  sx={{
_hover: {
  cursor: "pointer",
}, 
}}></Icon>
</Flex>
<Popover trigger={'hover'} placement={'bottom-start'} >
<PopoverTrigger>
<Flex flexDir={"rows"} px={2} w="150px" h="58px" justifyContent={"center"} alignContent={"center"}>
            <Center>
            <Avatar boxSize={"12"}  
            src={Logo}
            sx={{
            _hover: {
              cursor: "pointer",
              
            },
          }}/>
          </Center>
          <Flex flexDir={"column"} px="10px">
          <Flex fontSize={"22px"} color="white" >Randy</Flex>
          <Flex fontSize={"18px"} color="white">Admin</Flex>
          </Flex>
</Flex> 
</PopoverTrigger >
<PopoverContent >
<PopoverArrow backgroundColor={"#7D7D7D"}/>
{/* <PopoverCloseButton /> */}

<PopoverHeader bgColor={"#7D7D7D"} fontFamily="Bebas" color="white"> SELAMAT DATANG!</PopoverHeader>
<PopoverBody>
<List fontSize={"14px"} fontFamily="Bebas"  color="#7D7D7D" gap={2}>
<ListItem ><Link to='/login'  as={ReachLink}  >Masuk</Link> </ListItem>
<ListItem ><Link to='/register'  as={ReachLink}  >Buat Akun</Link> </ListItem>
<ListItem ><Box onClick={onOpen}>
        Lihat Status Pesanan
        </Box>
         </ListItem>
        <ListItem > Konfirmasi Transfer</ListItem>
        <ListItem > Bantuan</ListItem>
        
        <Divider orientation="horizontal" py={2}/>
        
        <ListItem >Community Influencer Program</ListItem>
</List> 
</PopoverBody>
</PopoverContent>
</Popover>
{/* </MenuButton> */}
        {/* <MenuList fontSize={"xs"}>
        <MenuItem  onClick={() => {
        
        }}><Link to='/register' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="black" >Masuk</Link></MenuItem>
        <MenuItem>Buat Akun</MenuItem> */}
       
        {/* <Box onClick={onOpen}>
        <MenuItem >
        </MenuItem>
        </Box> */}
        {/* <Button onClick={onOpen}>test</Button> */}
        {/* <MenuItem>
        <Box onClick={onOpen}>
        Lihat Status Pesanan

        </Box>

        <StatusPesanan onOpen={onOpen} onClose={onClose} isOpen={isOpen} initialRef={initialRef} finalRef={finalRef} />
        </MenuItem>
        <MenuItem > Konfirmasi Transfer</MenuItem>
        <MenuItem > Bantuan</MenuItem>
        <Divider orientation="horizontal"/>
        <MenuItem >Community Influencer Program</MenuItem>
        </MenuList>
</Menu> */}


</Flex>
</Flex>
</>
  );
}