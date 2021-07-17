import React from "react";
import {
  Box,
  Flex,
  // Divider,
  Text,
  // Select,
  // Input,
  // InputGroup,
  // InputRightElement,
  // Button,
  // Table,
  // Thead,
  // Tbody,
  
  // Tr,
  // Th,
  // Td,
  
} from "@chakra-ui/react";
// import { useState } from 'react'
import logo from "../assets/logo.svg";
import dash from "../assets/dash.svg";
// import notification from "../assets/notification.svg";
// import Profile from "../assets/profile picture.svg";
// import Search from "../assets/Search.svg";
// import Calendar from "../assets/Calendar.svg";
import balance from "../assets/Wallet.svg";
import customers from "../assets/3 User.svg";
import analytics from "../assets/Activity.svg";
import settings from "../assets/Filter.svg";
import star from "../assets/Star.svg";
import contact from "../assets/Call.svg";
import logout from "../assets/Logout.svg";
import '../styles/dash.css'


function Nav(
  
) {
    return (
        
    <Box >
        <Box display={["none","none","block"]} h="auto" pt="40px" bg="#e5e5e5" w={["100%","100%","25%"]} >
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
        <Box zIndex='2' position='absolute'  top="0" left="0" overflow='auto'display={["block","none"]} h="auto" pt="40px" bg="#e5e5e5" w="100%">
        <Box>
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

    </Box>
       


    </Box>
       
        
    )
}

export default Nav
