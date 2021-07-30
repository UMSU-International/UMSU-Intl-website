// import React from "react";
// import { Button } from "@chakra-ui/react";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   color: black;
//   z-index: 5;
//   border-radius: 999px;
//   background-image: linear-gradient(to right, white, #a8e1f6);
//   padding: 8px 1rem;
//   font-family: Montserrat;
//   font-size: 1.5rem;
//   font-weight: bold;
//   transition: background-image 1s, ease-in-out;
//   &:hover {
//     background-image: linear-gradient(to right, #a8e1f6, white);
//     transition: background-image 0.4s, ease-in-out;
//   }
// `;

// const GradientButton = ({ children, ...props }) => {
//   return (
//     <StyledButton
//       color="black"
//       zIndex="5"
//       borderRadius="999px"
//       bgGradient="secondary"
//       fontSize="1.5rem"
//       paddingY="6"
//       paddingX="8"
//       marginTop="2rem"
//       boxShadow="0px 8px 15px rgba(0, 0, 0, 0.2)"
//       transition="all .4s ease-in-out"
//       _hover={{
//         bgGradient: "linear(to-l, white, buttonRight)",
//         transition: "all .4s ease-in-out",
//       }}
//       _focus={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}
//       {...props}
//     >
//       {children}
//     </StyledButton>
//   );
// };

// export default GradientButton;

import React from "react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: black;
  z-index: 5;
  border-radius: 999px;
  background-image: ;
`;

const GradientButton = ({ children, ...props }) => {
  return (
    <Button
      color="black"
      zIndex="5"
      borderRadius="999px"
      bgGradient="linear(to-r, white, primary)"
      fontSize="1.5rem"
      paddingY="6"
      paddingX="8"
      marginTop="2rem"
      boxShadow="0px 8px 15px rgba(0, 0, 0, 0.2)"
      transition="all .8s ease-in-out"
      bgSize="300% 100%"
      _hover={{
        bgPos: "100% 0",
        transition: "all .4s ease-in-out",
      }}
      _focus={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
