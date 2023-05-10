import React from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import Modals from "../Modal.jsx/Modals";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export default function RegisterCourseDiscipline() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />
      <div className="registerCourse">
        <div></div>
        <Modals name="Adicionar Curso" />
        <Modals name="Adicionar Disciplina" />

        <React.Fragment>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              Curso
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          dfdfdfdf
                        </TableCell>
                        <TableCell>fgfgfg</TableCell>
                        <TableCell align="right">dfdfdfdf</TableCell>
                        <TableCell align="right">sdsds</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      </div>
    </>
  );
}
