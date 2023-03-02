import { lazy } from "react";
import styled from "@emotion/styled";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from "@mui/material";

import { font } from "./mixins";
import * as palette from "./variables";

function App() {
  return (
    <Page>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Mobile Number (Optional)</TableCell>
            <TableCell>User Role</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Adriena</TableCell>
            <TableCell>Stitfall</TableCell>
            <TableCell>adriena.stitfall@ranba.com</TableCell>
            <TableCell></TableCell>
            <TableCell>Superuser</TableCell>
            <TableCell colSpan={2}>✏️</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField placeholder="f fname" />
            </TableCell>
            <TableCell>
              <TextField placeholder="l fname" />
            </TableCell>
            <TableCell>
              <TextField placeholder="mail" />
            </TableCell>
            <TableCell>
              <TextField placeholder="🇺🇦 Select country..." />
            </TableCell>
            <TableCell>
              <TextField placeholder="role" />
            </TableCell>
            <TableCell>
              <Button>✔️</Button>
            </TableCell>
            <TableCell>
              <Button>✖️</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>
              <TextField placeholder="f fname" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>
              <TextField placeholder="l fname" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email Address</TableCell>
            <TableCell>
              <TextField placeholder="mail" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mobile Number (Optional)</TableCell>
            <TableCell>
              <TextField placeholder="🇺🇦 Select country..." />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User Role</TableCell>
            <TableCell>
              <TextField placeholder="role" />
            </TableCell>
          </TableRow>
          <Button>✖️</Button>
          <Button>✔️</Button>
        </TableBody>
      </Table>
    </Page>
  );
}

const Page = styled.div`
  background-color: #f5f5f5;
`;
