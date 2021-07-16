import React from "react";
import {
  Box,
  Flex,
  Divider,
  Text,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Table,
  Thead,
  Tbody,
  
  Tr,
  Th,
  Td,
  
} from "@chakra-ui/react";
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
  return (
    <Flex>
      <Box h="110vh" pt="40px" bg="gray.100" w="25%">
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
      <Box w="75%" px="40px" pt="30px">
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
          </Flex>
        </Flex>
        <Flex
          w="65%"
          h="170px"
          border="1px"
          borderColor="#EBEBEB"
          borderRadius="md"
          mt="63px"
        >
          <Box pb="25px" pt="25px" px="20px" w="50%">
            <Flex justify="space-between">
              <Text fontSize="14px" color="#2C665D">
                Total account balance
              </Text>
              <Select
                border="none"
                bg="#F5F5F5"
                fontSize="12px"
                mt="-2px"
                w="30%"
                h="25px"
              >
                <option value="option1">USD</option>
                <Divider />
                <option value="option2">KES</option>
                <Divider />
                <option value="option3">NGN</option>
                <Divider />
                <option value="option3">GHC</option>
                
              </Select>
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
          <Box bg="#F5F5F5" w="50%" pl="20px" pt="25px">
            <Text>Funds on hold</Text>
            <Text mt="35px" fontSize="36px" fontWeight="700">
              $5,332.18
            </Text>
          </Box>
        </Flex>
        <Flex mt="40px" justify="space-between">
          <Box>
            <Text fontSize="18px" fontWeight="700">
              Payout table
            </Text>
          </Box>
          <Flex>
            <InputGroup w="100%" mr="15px">
              <Input fontSize="14px" placeholder="Search something...." />
              <InputRightElement>
                <Button variantColor='none' variant='outline' border='none'><img src={Search} alt="" /></Button>
              </InputRightElement>
            </InputGroup>
            <Flex
              mr="25px"
              w="45%"
              pl="12px"
              py="10px"
              pr="13px"
              border="1px"
              borderColor="#E5E5E5"
              borderRadius='sm'
            >
              <Text mr="5px" fontSize="12px" fontWeight="400" color="#2A2A2A">
                March 2020
              </Text>
              <Box>
                <img src={Calendar} alt="" />
              </Box>
            </Flex>
            <Box w="50%">
              <Button
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
        <Table mt='20px' variant="simple" >
          
          <Thead >
            <Tr bg='#E5E5E5'>
              <Th fontSize='14px' fontWeight='700' color='#2A2A2A'>Payout ID</Th>
              <Th fontSize='14px' fontWeight='700' color='#2A2A2A'>Source</Th>
              <Th fontSize='14px' fontWeight='700' color='#2A2A2A'>Date</Th>
              <Th fontSize='14px' fontWeight='700' color='#2A2A2A'>Amount</Th>
            </Tr>
          </Thead>
          <Tbody >
            <Tr  className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
           <Tr  className='tableHover'>
            <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
           
            <Tr className='tableHover'>
              <Td>KLA12579DHQ</Td>
              <Td>Vel pellentesque ornare</Td>
              <Td>25th November, 2020</Td>
              <Td>$1,200</Td>
            </Tr>
            <Tr className='tableHover'>
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
