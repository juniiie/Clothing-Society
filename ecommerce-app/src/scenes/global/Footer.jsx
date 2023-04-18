import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

export const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box
      mt="70px"
      m="10px"
      p="40px 0"
      backgroundColor={neutral.light}
      //   border="1px solid red"
    >
      <Box
        // border="2px solid black"
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Clothing Society
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            earum temporibus, atque sunt, quo unde delectus esse eius beatae
            minus obcaecati. Placeat quidem ab laborum vitae laudantium optio
            animi tenetur!
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">5050 Random Address, Melbourne, VIC</Typography>
          <Typography mb="30px">Email: RandomEmail@email.com</Typography>
          <Typography mb="30px">+64 123 4567</Typography>
        </Box>
      </Box>
    </Box>
  );
};
