
import "./nav.css";
import otalLogo from "../../../assets/otal_logo.png";
import { NavLink } from "react-router-dom";
import { Box, Button, Img } from "@chakra-ui/react";
import MobileNav from "../mobile nav/mobile nav";
// import MobileNav from "./mobile/mobile";
function Navbar() {
  // const cart = useContext(Cartcontext)

  // const [menustate, newMenuState] = useState({ display: "none" })
  // function openMenu() {
  //   cart.increaseIndex = true
  //   cart.changeZ()
  //   console.log(cart.changeINdex)
  //   newMenuState()
  // }
  // function menuclose() {
  //   cart.changeZ()
  //   console.log(cart.changeINdex)
  //   newMenuState({ display: "none", background: "blue" })
  // }



  return (

    <Box boxShadow="0px 0px 4px gray" display="flex" px={{base:"3%", sm:"5%", lg:"10%"}} justifyContent="space-between" alignItems="center" position="sticky" top={0}  className="everything" style={{ zIndex: "2", position: "relative" }}>
      <Img w="70" h="70" className="logo" src={otalLogo} alt="logo" />
      <div className="navcontainer">
        <nav>

          {/* <NavLink to="/vendors">Vendors</NavLink> */}
          <a to="/about-page">About</a>
          <a to="/FAQ">FAQ</a>
          <a to="/contact-page">Contact</a>
          <a to="services-page">Lot size calculator</a>
          
        </nav>
      </div>

      <Button id="login-Desktop-BTN" colorScheme="teal" variant="outline" size="lg" borderRadius="full" color="white" borderColor="white" backgroundColor="rgb(40, 38, 121)">
        <a to="/login" style={{ color: "white", textDecoration: "none" }}>Login</a>
      </Button>

      {/* <div id="loginIcon-visibility-desktop">{cart.loginIcon}</div> */}

      <Box className="open-menubutton-mobile" ><MobileNav/></Box>

    </Box>
  );
}

export { Navbar };
