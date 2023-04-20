import {Box} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {useTheme } from "@mui/material"

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName : "ID", flex: 0.5 },
        {field: "registrarId", headerName: "RegistrarId"},
        { field: "name", headerName : "Name"},
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
          },
          {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
          },
          {
            field: "email",
            headerName: "Email",
            flex: 1,
          },
          {
            field: "address",
            headerName: "Address",
            flex: 1,
          },
          {
            field: "city",
            headerName: "City",
            flex: 1,
          },
          {
            field: "zipCode",
            headerName: "Zipcode",
            flex: 1,
          }                          
        ];

    return(
        <Box m="20px">
            <Header title="CONTACTS" subtitle="The list of contacts for future reference" />
            <Box
            m = "40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
                "& .Muicheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
              }}
            >
                <DataGrid                
                 rows={mockDataContacts} 
                 columns={columns}
                 components={{ Toolbar: GridToolbar }}
                 />
            </Box>
        </Box>
    );
};
export default Contacts;