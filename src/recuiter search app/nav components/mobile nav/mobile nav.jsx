import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi"
import React from 'react'
import { FcFaq } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc"
import { FcAbout } from "react-icons/fc";
import { IoCalculator } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function MobileNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (
        <>
            <Button onClick={onOpen} bg="transparent" _hover={{ background: "none"}} >
                <GiHamburgerMenu style={{ color: "black", fontSize: "x-large" }} />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerHeader borderBottom="3px soild gray" shadow="none" borderBottomWidth='1px' display="flex" justifyContent="space-between" boxShadow="none" alignItems="center" >
                        <Box onClick={onClose} border="none" shadow="none" style={{ margin: "10px auto", marginLeft: "0px" }}>
                            {/* {cart.loginIcon} */}
                            <Text>Sign in</Text>
                        </Box>
                        <Box border="none" shadow="none" display="flex" flexDirection="column" alignItems="center" h="fit-content">
                            <IoCloseCircleOutline color="rgb(1, 61, 1)" onClick={onClose} style={{ fontSize: "larger" }} />
                        </Box>
                    </DrawerHeader>
                    <DrawerBody m="auto auto" display="flex" alignItems="center">
                        <Box overflowY="scroll"  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", justifyContent: "center" }}>
                            {/* Add your navigation links here */}
                            {/* <a onClick={onClose} to="/vendors" style={{ display: "flex", alignItems: "center", fontSize: "20px", gap: "10px" }}><IoFastFoodSharp />Vendors</a> */}
                            <a onClick={onClose} to="/about-page" style={{ display: "flex", alignItems: "center", fontSize: "20px", gap: "10px" }}><FcAbout />About</a>
                            <a onClick={onClose} to="/FAQ" style={{ display: "flex", alignItems: "center", fontSize: "20px", gap: "10px" }}><FcFaq />FAQ</a>
                            <a onClick={onClose} to="/contact-page" style={{ display: "flex", alignItems: "center", fontSize: "20px", gap: "10px" }}><FcOnlineSupport />Contact</a>
                            <a onClick={onClose} to="services-page" style={{ display: "flex", alignItems: "center", fontSize: "20px", gap: "10px" }}><IoCalculator />Lot size calculator</a>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
