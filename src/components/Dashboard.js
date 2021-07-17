import {React, useState} from "react";
import {
  Box,
  Flex,
  Divider,
  Text,
  
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Table,
  Thead,
  Tbody,
  IconButton,
  Tr,
  Th,
  Td,
  
  
} from "@chakra-ui/react";
import {HamburgerIcon,CloseIcon} from '@chakra-ui/icons'
import Select from 'react-select'
// import { VscClose } from "react-icon-library";
import logo from "../assets/logo.svg";
import dash from "../assets/dash.svg";
import notification from "../assets/notification.svg";
import Profile from "../assets/profile picture.svg";
import Search from "../assets/Search.svg";
import Calendar from "../assets/Calendar.svg";
import balance from "../assets/Wallet.svg";
import customers from "../assets/3 User.svg";
import analytics from "../assets/Activity.svg";
import settings from "../assets/Filter.svg";
import star from "../assets/Star.svg";
import contact from "../assets/Call.svg";
import logout from "../assets/Logout.svg";
import '../styles/dash.css'



function Dashboard() {
  const [nav, changeNav] = useState('none')
  const options =[
    { value: 'USD', label: 'USD' },
  { value: 'KES', label: 'KES' },
  { value: 'NGN', label: 'NGN' },
  { value: 'GHC', label: 'GHC' }
  ]
  return (
    <Flex direction={["column","column","row"]} mb='5px'>
       <Box h="auto" pt={['0','0',"40px"]} bg={['none','none',"#e5e5e5"]} w={["100%","100%","25%"]}  >
        <Box display={["none","none","block"]} >
        <Box pl="40px">
          <img src={logo} alt="" />
        </Box>
        <Box mt="50px">
          <Box pl="40px">
            <Text fontSize="14px" fontWeight="600">
              Main pages
            </Text>
          </Box>
          <Box pl="40px" mt="13px" py="15px"  bg="white" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={dash} alt="" />
              </Box>
              <Text fontSize="14px">Dashboard</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2"  w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={balance} alt="" />
              </Box>
              <Text fontSize="14px">Balances</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px"  color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={customers} alt="" />
              </Box>
              <Text fontSize="14px">Customers</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={analytics} alt="" />
              </Box>
              <Text fontSize="14px">Analytics</Text>
            </Flex>
          </Box>
        </Box>
        <Box mt="45px">
          <Box pl="40px">
            <Text fontSize="14px" fontWeight="600">
              General
            </Text>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2"   w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={settings} alt="" />
              </Box>
              <Text fontSize="14px">Settings</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" color="#A6ABB2" py="15px"  w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={star} alt="" />
              </Box>
              <Text fontSize="14px">Team</Text>
            </Flex>
          </Box>
          <Box className='hover' mt="13px" py="15px" pl='40px' color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={contact} alt="" />
              </Box>
              <Text fontSize="14px">Contact</Text>
            </Flex>
          </Box>
          <Box className='hover' mt="13px" py="15px" pl='40px'
          color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={logout} alt="" />
              </Box>
              <Text fontSize="14px">Logout</Text>
            </Flex>
          </Box>
        </Box>
        </Box>

        {/* secondnav */}
        <Box zIndex='2' position='absolute'  top="0" left="0" overflow='auto' display={nav} h="auto" pt="40px" bg="#e5e5e5" w="100%">
        <Box>
        <Flex pl="40px" w='100%' justify='space-between'>
          <img src={logo} alt="" />
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="md"
            icon={<CloseIcon/>}
            onClick={() => changeNav('none')} 
          />
        </Flex>
        <Box mt="50px">
          <Box pl="40px">
            <Text fontSize="14px" fontWeight="600">
              Main pages
            </Text>
          </Box>
          <Box pl="40px" mt="13px" py="15px"  bg="white" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={dash} alt="" />
              </Box>
              <Text fontSize="14px">Dashboard</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2"  w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={balance} alt="" />
              </Box>
              <Text fontSize="14px">Balances</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px"  color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={customers} alt="" />
              </Box>
              <Text fontSize="14px">Customers</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={analytics} alt="" />
              </Box>
              <Text fontSize="14px">Analytics</Text>
            </Flex>
          </Box>
        </Box>
        <Box mt="45px">
          <Box pl="40px">
            <Text fontSize="14px" fontWeight="600">
              General
            </Text>
          </Box>
          <Box className='hover' pl="40px" mt="13px" py="15px" color="#A6ABB2"   w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={settings} alt="" />
              </Box>
              <Text fontSize="14px">Settings</Text>
            </Flex>
          </Box>
          <Box className='hover' pl="40px" mt="13px" color="#A6ABB2" py="15px"  w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={star} alt="" />
              </Box>
              <Text fontSize="14px">Team</Text>
            </Flex>
          </Box>
          <Box className='hover' mt="13px" py="15px" pl='40px' color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={contact} alt="" />
              </Box>
              <Text fontSize="14px">Contact</Text>
            </Flex>
          </Box>
          <Box className='hover' mt="13px" py="15px" pl='40px'
          color="#A6ABB2" w="99%">
            <Flex w="50%">
              <Box mr='10px' mt='2px'>
                <img src={logout} alt="" />
              </Box>
              <Text fontSize="14px">Logout</Text>
            </Flex>
          </Box>
        </Box>
        </Box>

    </Box>
       


    </Box>
       
   {/* //second nav */}
      <Box w={["100%","100%","75%"]} px={["10px","10px","40px"]} pt="30px">
        <Flex justify="space-between" w="100%">
          <Box>
            <Text fontSize="18px" fontWeight="700" color="#2A2A2A">
              Balances
            </Text>
            <Text fontSize="12px" fontWeight="400" color="#A6ABB2">
              Today, 19th October 2020
            </Text>
          </Box>
          <Flex>
          
            <Box w="40%">
              <img w="100%" src={notification} alt="" />
            </Box>
            <Box w="40%" ml="10px">
              <img w="100%" src={Profile} alt="" />
            </Box>
            <IconButton
          aria-label="Open Menu"
          size="md"
          mt='3px'
          ml={3}
          display={["block","block","none"]}
          onClick={() => changeNav('block')} 
          icon={<HamburgerIcon/>}
        />
          </Flex>
        </Flex>
        <Flex
          w={["100%","100%","100%","65%"]}
          
          direction={["column","column","row"]}
          h="auto"
          border="1px"
          borderColor="#EBEBEB"
          borderRadius="md"
          mt="63px"
        >
          <Box pb="25px" pt="25px" px="20px" w={["100%","100%","50%"]}>
            <Flex justify="space-between">
              <Text fontSize="12px" color="#2C665D">
                Total account balance
              </Text>
              <Select
                border="none"
                bg="#F5F5F5"
                fontSize="12px"
                mt="-7px"
                w="55%"
                h="35px"
                color='#2C665D'
                className='select'
                options={options}
              />
                
                
              
            </Flex>
            <Box mt="35px">
              <Text fontSize="36px" fontWeight="700">
                $5,332.18
              </Text>
              <Text fontSize="16px" fontWeight="400">
                1 USD = 381.97 NGN
              </Text>
            </Box>
          </Box>
          <Box bg="#F5F5F5" w={["100%","100%","50%"]} pl="20px" pt="25px">
            <Text>Funds on hold</Text>
            <Text mt="35px" fontSize="36px" fontWeight="700">
              $5,332.18
            </Text>
          </Box>
        </Flex>
        <Flex  direction={["column","column","row"]} mt={["20px","20px","40px"]} justify="space-between">
          <Box>
            <Text fontSize="18px" fontWeight="700">
              Payout table
            </Text>
          </Box>
          <Flex direction={["column","column","row"]} mt={["10px","10px","0"]} >
            <InputGroup w="100%" mr="15px">
              <Input fontSize="14px" placeholder="Search something...." />
              <InputRightElement>
                <Button variantColor='none' variant='outline' border='none'><img src={Search} alt="" /></Button>
              </InputRightElement>
            </InputGroup>
            <Flex w='100%' mt={["10px","10px","0"]}>
            <Flex
              mr="25px"
              w={["35%","45%","55%"]}
              pl="10px"
              py="10px"
              pr="13px"
              border="1px"
              borderColor="#E5E5E5"
              borderRadius='sm'
            >
              <Text mr="5px" fontSize="10px" fontWeight="400" color="#2A2A2A">
                March 2020
              </Text>
              <Box>
                <img src={Calendar} alt="" />
              </Box>
            </Flex>
            <Box w="65%">
              <Button
              float='right'
                px="25px"
                borderRadius="sm"
                bg="#3D8F83"
                fontSize="14px"
                fontWeight="700"
                color="white"
                variantColor='none'
              >
                Payout
              </Button>
            </Box>
            </Flex>
          </Flex>
        </Flex>
        <Table  display={["none","none","table","table"]} mt='20px' className='table' variant="simple" >
          
          <Thead >
            <Tr bg='#E5E5E5'>
              <Th fontSize={["14px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Payout ID</Th>
              <Th fontSize={["14px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Source</Th>
              <Th fontSize={["14px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Date</Th>
              <Th fontSize={["10px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Amount</Th>
            </Tr>
          </Thead>
          <Tbody >
            <Tr fontSize={["10px","10px","14px"]}  className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
           <Tr fontSize={["10px","10px","14px"]}  className='tableHover'>
            <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
            <Tr fontSize={["10px","10px","14px"]} className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
            <Tr fontSize={["10px","10px","14px"]} className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
            
          </Tbody>
          
        </Table>
        <Table w='100%' display={["block","none","none"]} size={["5%","5%",""]} mt='20px' className='table' variant="simple" >
          
          <Thead >
            <Tr bg='#E5E5E5'>
              <Th fontSize={["12px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Payout ID</Th>
              <Th fontSize={["12px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Source</Th>
              <Th fontSize={["12px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Date</Th>
              <Th fontSize={["12px","10px","14px"]} fontWeight='700' color='#2A2A2A'>Amount</Th>
            </Tr>
          </Thead>
          <Tbody >
            <Tr fontSize={["12px","10px","14px"]}  className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
           <Tr fontSize={["12px","10px","14px"]}  className='tableHover'>
            <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
            <Tr fontSize={["12px","10px","14px"]} className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
            <Tr fontSize={["12px","10px","14px"]} className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
            
          </Tbody>
          
        </Table>
        <Box w='100%'><Button color='#2C665D' fontSize='18px' fontWeight='600' border='1px' borderColor='#E5E5E5' borderRadius='sm' variantColor='none' bg='none' w='100%'>See More</Button></Box>    

      </Box>
    </Flex>
  );
}

export default Dashboard;
