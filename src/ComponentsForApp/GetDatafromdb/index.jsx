
// import StartFirebase from "../firebaseConfig/index";
// import {ref,onValue} from "firebase/database"
// import { Component } from "react";
// import { Table } from "react-bootstrap";

// const db = StartFirebase();

// export class GetrealtimeData extends Component{
//     constructor(){
//         super()
//         this.state={
//             tableData : []

//         }
//     }

//     componentDidMount(){
//         const dbRef = ref(db,"UserMessage")

//         onValue(dbRef,(snapshot)=>{
//             let records = [];
//             snapshot.forEach(childSnapshot=>{
//                 let KeyName = childSnapshot.key;
//                 let data  = childSnapshot.val();
//                 records.push({"key": KeyName, "data" : data});

//             });
//             this.setState({tableData : records});
//         });
//     }

//     render(){
//         return(
//            <Table className="container "  bordered striped variant = 'dark'>
//             <thead>
//                 <tr>
//                     <th>Sr No</th>
//                     {/* <th>UserKey</th> */}
//                     <th>Name</th>
//                     <th>Phone Number</th>
//                     <th>Budget (In Cr)</th>
//                     <th>Message</th>
//                     <th>Date</th>
//                     <th>City</th>
//                     <th>Gmail   </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 { this.state.tableData.map((row,index)=>{
//                     return(
//                         <tr key={index}>
//                             <td>{index+1}</td>
//                             {/* <td>{row.key}</td> */}
//                             <td>{row.data.name}</td>
//                             <td>{row.data.phone}</td>
//                             <td>{row.data.budget}</td>
//                             <td>{row.data.message}</td>
//                             <td>{row.data.date}</td>
//                             <td>{row.data.city}</td>
//                             <td>{row.data.email}</td>
//                         </tr>
//                     )

//                 })}
//             </tbody>
//            </Table>
//         )
//     }

// }