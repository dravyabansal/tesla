import React, {useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus]= useState(false);
  const cars =useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p><a>Model S</a></p>
        <p><a>Model 3</a></p>
        <p><a>Model X</a></p>
        <p><a>Model Y</a></p>
           
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
        
        {/* <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">My Car</a></li> */}
      </BurgerNav>
    </Container>
  )
}

export default Header;
// -----------------------Styling -----------------------------------------

  const Container =styled.div`
  min-height:60px;
  position:fixed;
  justify-content:space-between;
  display:flex;
  align-item:center;
  padding:0 20px;
  z-index:1



  `;
  const BurgerNav= styled.div`
  position:fixed;
  top:0;
  font-size:32px;
  bottom:0;
  font-color:black;
  right:0;
  background-color:rgb(255,255,255);
  z-index:16;
  width:300px;
  list-style:none;
  padding:20px;
  background:transparent;
  // display:flex;
  text-align:start;
  transform:${props=>(props.show)?('translateX(100%)'):('translateX(0%)')}
  flex-direction:column;
  transition: transform 0.2s;
  li{
    padding:15px 0;
    border-botton: 1px solid rgba(0, 0, 0, 0.2);

    a{
      font-weight:600;
      }
  }
   
  `;
  const CustomClose = styled(CancelRoundedIcon)`


  `;


  const CloseWrapper = styled.div`
    display: flex;
    justify-content:flex-end; 
  `;




  const Menu=styled.div`
  display:flex;
  align-items:center;
  flex:1;
  // top:10px;
  justify-content:space-between;
  padding-left:25vw;
  padding-top:0px;
  

  a{
    font-weight:500;
    font-size:24px;
    flex-wrap:nowrap;
    text-transform:uppercase;
    padding:0 10px;
  }

  @media(max-width:768px){
    display:none;

  }

  `;
  const RightMenu=styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight:500;
    text-transform:uppercase;
    margin-right:10px;
    flex-wrap:10px;
  }
  
  `;

  const CustomMenu= styled(MenuIcon)`
    cursor:pointer;

  `