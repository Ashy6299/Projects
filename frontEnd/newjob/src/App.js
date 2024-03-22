import { useState } from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import SlideSelect from "./components/SlideSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount: 3000,
    loanTerm: 3000,
  });

  return (
    <div className='App'>
      <NavBar />

      <Container maxWidth='xl' sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <SlideSelect />
            <TenureSelect />
          </Grid>
          <Grid item md={6} xs={12}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
