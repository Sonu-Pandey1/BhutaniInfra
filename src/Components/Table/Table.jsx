import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const List = () => {
    const [data, setData] = useState([]);

    // instance data render the Query form--->>

    // Get Realtime Data From Firebase.
    useEffect(() => {

        const unsub = onSnapshot(collection(db, "propertys"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list)
        }, (error) => {
            console.log(error)
        });

        return () => {
            unsub();
        }
    }, [])
    // console.log(data);

    return (
        <TableContainer component={Paper} className="table">
            <Table className="subtable" sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Property</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Budget</TableCell>
                        <TableCell className="tableCell">Condition</TableCell>
                        <TableCell className="tableCell">Stock</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.builder}</TableCell>
                            <TableCell className="tableCell">{row.listingdate}</TableCell>
                            <TableCell className="tableCell">{row.price}</TableCell>
                            <TableCell className="tableCell">{row.condition}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.stock}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
};

export default List;