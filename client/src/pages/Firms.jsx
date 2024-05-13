import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import   { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStocks } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  // console.log("firms", firms);
    const [open, setOpen] =  useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  useEffect(() => {
    getStocks("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color="error" mb={3} marginLeft={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>
      <FirmModal open={open} handleClose={handleClose}/>
      <Grid container gap={2} mt={3}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
