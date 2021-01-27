import React, {useState, useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import { Gap } from '../../atoms'


const Admin = props => {
    
    const [order, setOrder] = useState([])
    
    

    //componentDidMount
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/order-pickup')
            .then(res => res.json())
            .then(res => {
                setOrder(res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    
    
    return (
            <div className="container">
                <h2>Order Data</h2>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Waybill</div>
                        <div className="col col-2">Sender</div>
                        <div className="col col-3">Sender Address</div>
                        {/* <div className="col col-4">Origin</div> */}
                        <div className="col col-4">Recipient</div>
                        <div className="col col-5">Recipient Address</div>
                        {/* <div className="col col-4">Destination</div> */}
                        <div className="col col-6">Item Name</div>
                        <div className="col col-7">Item Weight</div>
                        <div className="col col-8">Status</div>
                    </li>                    
                        {order.map((o, index) => {
                            return <List key={index} order={o}/>
                        })}
                {/* <li className="table-row">
                    <div className="col col-1" data-label="Job Id">42235</div>
                    <div className="col col-2" data-label="Customer Name">John Doe</div>
                    <div className="col col-3" data-label="Amount">$350</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                </li> */}
                {/* <li className="table-row">
                    <div className="col col-1" data-label="Job Id">42442</div>
                    <div className="col col-2" data-label="Customer Name">Jennifer Smith</div>
                    <div className="col col-3" data-label="Amount">$220</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">42257</div>
                    <div className="col col-2" data-label="Customer Name">John Smith</div>
                    <div className="col col-3" data-label="Amount">$341</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">42311</div>
                    <div className="col col-2" data-label="Customer Name">John Carpenter</div>
                    <div className="col col-3" data-label="Amount">$115</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                </li> */}
                </ul>
                <Gap height={20} />
                <h2>Delivered</h2>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Waybill</div>
                        <div className="col col-2">Sender</div>
                        <div className="col col-3">Sender Address</div>
                        {/* <div className="col col-4">Origin</div> */}
                        <div className="col col-4">Recipient</div>
                        <div className="col col-5">Recipient Address</div>
                        {/* <div className="col col-4">Destination</div> */}
                        <div className="col col-6">Item Name</div>
                        <div className="col col-7">Item Weight</div>
                        <div className="col col-8">Status</div>
                    </li>
                </ul> 
            </div>
    //     <div>
    //         <h1>Order Data</h1>
    //         Order : {order.length}
    //         <table>
    //             <thead>
    //                 <tr>
    //                     {/* <th>ID</th> */}
    //                     <th>Waybill</th>
    //                     <th>Sender Name</th>
    //                     {/* <th>Sender Phone Number</th> */}
    //                     <th>Sender Address</th>
    //                     <th>Origin City</th>
    //                     {/* <th>Origin Postcode</th> */}
    //                     <th>Recipient Name</th>
    //                     {/* <th>Recipient Phone Number</th> */}
    //                     <th>Recipient Address</th>
    //                     <th>Destination City</th>
    //                     {/* <th>Destination Postcode</th> */}
    //                     <th>Item Name</th>
    //                     <th>Item Weight</th>
    //                     <th>Status</th>
    //                 </tr>
                    
    //             </thead>
    //             <tbody>
    //                 {order.map((o, index) => {
    //                     return <Tr key={index} order={o} />
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    // 
    )
}
const List = ({order}) => {
    
    const handleClick = () => {
        axios.put()
    }

    return (
        <li className="table-row">
            <div className="col col-1" >{order.waybill_number}</div>
            <div className="col col-2" >{order.sender_name}</div>
            <div className="col col-3" >{order.sender_address}</div>
            <div className="col col-4" >{order.recipient_name}</div>
            <div className="col col-5" >{order.recipient_address}</div>
            <div className="col col-6" >{order.item_name}</div>
            <div className="col col-7" >{order.item_weight}</div>
            <button className="col col-8" >{order.status ? "On proccess" : "Delivered"}</button>
        </li>
            )}
        // <tr>
        //     {/* <td>{order.id}</td> */}
        //     <td>{order.waybill_number}</td>
        //     <td>{order.sender_name}</td>
        //     {/* <td>{order.sender_phone}</td> */}
        //     <td>{order.sender_address}</td>
        //     <td>{order.origin_city}</td>
        //     {/* <td>{order.origin_postcode}</td> */}
        //     <td>{order.recipient_name}</td>
        //     {/* <td>{order.recipient_phone}</td> */}
        //     <td>{order.recipient_address}</td>
        //     <td>{order.destination_city}</td>
        //     {/* <td>{order.destination_postcode}</td> */}
        //     <td>{order.item_name}</td>
        //     <td>{order.item_weight}</td>
        //     <td>{order.status}</td>
        // </tr>
    // )
// }

export default Admin


// var store = {
//     headerOffset: null
// };

// let data = [
//     {
//         id: 0,
//         name: "name 0",
//         details: "details 0",
//         state: "live"
//     },
//     {
//         id: 1,
//         name: "name 1",
//         details: "details 1",
//         state: "live"
//     },
//     {
//         id: 2,
//         name: "name 2",
//         details: "details 2",
//         state: "draft"
//     },
//     {
//         id: 3,
//         name: "name 3",
//         details: "details 3",
//         state: "live"
//     },
//     {
//         id: 4,
//         name: "name 4",
//         details: "details 4",
//         state: "live"
//     },
//     {
//         id: 5,
//         name: "name 5",
//         details: "details 5",
//         state: "live"
//     },
//     {
//         id: 6,
//         name: "name 6",
//         details: "details 6",
//         state: "live"
//     },
//     {
//         id: 7,
//         name: "name 7",
//         details: "details 7",
//         state: "live"
//     },
//     {
//         id: 8,
//         name: "name 8",
//         details: "details 8",
//         state: "live"
//     },
//     {
//         id: 9,
//         name: "name 9",
//         details: "details 9",
//         state: "live"
//     },
//     {
//         id: 10,
//         name: "name 10",
//         details: "details 10",
//         state: "live"
//     }                
// ];

// let cols = [
//     {
//         icon: "A",
//         label: "Order Number"
//     },
//     {
//         icon: "B",
//         label: "Name"
//     },
//     {
//         icon: "C",
//         label: "Details"
//     },
//     {
//         icon: ">",
//         label: "State"
//     }  
// ]


// class RowItem extends React.Component {
    
//     constructor() {
//         super();
        
//         this.state = {
//         open: false
//         }
//     }  
    
//     toggleRow(e) {
//         console.log('toggleRow');

//         this.setState({open: !this.state.open});
//     }
    
    
//     render(){

//         let classes = '';
//         if (this.state.open) {
//             classes = 'open';
//         }

//         return (
//         <li onClick={this.toggleRow.bind(this)} className={classes}>
//             <div className="heading">
//             <div className="col">{this.props.id}</div>
//             <div className="col">{this.props.name}</div>
//             <div className="col">{this.props.details}</div>
//             <div className="col">{this.props.state}</div>     
//             </div>
//             <RowContent open={this.state.open}/>
//             {this.props.children}
//         </li>
//         )
//     }
    
// };


// class RowContent extends React.Component {
    
//     clicker() {

//     }
    
//     render(){

//         let jsxhtml = (<div className="content" onClick={this.clicker.bind(this)}>
//             row content
//             {this.props.children}
//         </div>);

//         if (this.props.open) {
//             jsxhtml = (<div className="content open" onClick={this.clicker.bind(this)}>
//             row content
//             {this.props.children}
//             </div>);
//         }

//         return (
//             <div>
//                 {jsxhtml}
//             </div>
//         )
//     }
    
// };


// class Table extends React.Component {
//     constructor() {
//         super();
        
//         this.state = {
//             headerOffset: null,
//             headerFixed: true
//         }
//     }
    
//   //   handleScroll(e) {

//   //     let scrollTop = e.srcElement.body.scrollTop;
//   //     console.log('scroll...', scrollTop, this.state.headerOffset);




//   //     this.setState({
//   //       headerFixed: true
//   //     });
//   //   }
    
//     componentDidMount() {
//     //   window.addEventListener('scroll', this.handleScroll.bind(this));
//       // THIS SEEMS THE ONLY PLACE WE CAN PICK UP THE REF FOR THE HEADER
//         console.log('reactdom: ', ReactDOM.findDOMNode(this.refs.header));

//         store.headerOffset = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().top;  
    
    
//         console.log('store:', store.headerOffset);


//       // this.setState({headerOffset:ReactDOM.findDOMNode(this.refs.header)});
//     }
    
//     render(){
    
//         let columns = this.props.columns.map((item, inx) => {
//             return (<HeaderColumn label={item.label}/>);
//         });    
    
//       //go through the rows
//         let rows = this.props.data.map((item, inx) => {
//             return (<RowItem {...item}></RowItem>);
//         });

//     let classes = 'header'; 
//     if (this.props.headerFixed) {
//         classes = 'header fixed';
//     }

//     return (<div className="table">
//             {this.props.children} 
//             <div className={classes} ref="header">{columns}<div className="shadow"></div></div>
//             <ul>{rows}</ul>
//             </div>); 
//     }
    
// }

// class HeaderColumn extends React.Component {
//     constructor() {
//         super();
//     }
    
//     render(){
//     return (<div className="hcol">{this.props.icon}</div>); 
//     }
    
// }


// class Admin extends React.Component{
//     constructor() {
//         super();
    
//         this.state = {
//             tableHeader: null,
//             tableHeaderFixed: false
//         }

//     }
    
//     handleScroll(e) {
//       // console.log(e);
//         let scrollTop = e.srcElement.body.scrollTop;
    
//       //HOW DO WE GET THE REFS HERE FOR THE ITEM OFFSET?
    
//           //itemTranslate = Math.min(0, scrollTop/3 - 60);
//         console.log('app scroll...', scrollTop, store.headerOffset);
//       // console.log('reactdom: ', ReactDOM.findDOMNode(this.refs.header), this.refs);
//       // console.log(ReactDOM.findDOMNode(this.refs.header));

//         if (scrollTop >= store.headerOffset) {
//             this.setState({
//                 tableHeaderFixed: true
//             });
//         } else {
//             this.setState({
//                 tableHeaderFixed: false
//             });
//         }
//     }
    
//     componentDidMount() {
//         console.log('app did mount');
//         window.addEventListener('scroll', this.handleScroll.bind(this));
    
//       //does not work from here...
//       // console.log('reactdom: ', ReactDOM.findDOMNode(this.refs.header), this.refs);
//       // this.setState({tableHeader:ReactDOM.findDOMNode(this.refs.header)});
//     }  
    
    
//     render(){
    
//         return (
//             <div className="container">
//             <div className="topbox">This is maybe a top section...</div>
//             <Table data={data} columns={cols} headerFixed={this.state.tableHeaderFixed} scrollFn=''/>
//             </div>
//         )
//     }
    
// };

// React.render(<Admin />, document.querySelector('.main'));

// export default Admin