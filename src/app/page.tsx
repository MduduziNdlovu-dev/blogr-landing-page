
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Infrastructure from "../../components/Infrastructure";
import MoreInfo from "../../components/MoreInfo";
import Footer from "../../components/Footer";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Header/>
      <Introduction/>
      <Infrastructure/>
      <MoreInfo/>
      <Footer/>
    </Box>
  );
}
