import React, {Component, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './index.css';


export default function Home() {
    const [requisitions, setRequisitions] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        console.log('opa')
        const res = await fetch('http://127.0.0.1:8080/api/purchase-module/requisition')
        const response = await res.json()

        setRequisitions(response)
        setLoading(false)
    }

    useEffect(() => {
        if (loading) {
            setRequisitions([])
            fetchData()
        }
    },[loading])

    return (
        <>
            <h1>Hello Word</h1>
            <button onClick={() => setLoading(true)} >Atualizar</button>
            {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Codigo</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Numero da requisição</th>
                    </tr>
                </thead>
                <tbody>
                        {requisitions.map(requisition => (
                        <tr>
                        <td key={requisition.id}>{requisition.id}</td>
                        <td>{requisition.data}</td>
                        <td>{requisition.ValorTotal}</td>
                        <td>{requisition.num_requisicao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

// "id": 1,
//     "data": "2020-09-24",
//     "observacao": null,
//     "ValorTotal": "1540.000000",
//     "collaborator_id": 2,
//     "FormPayment_id": 3,
//     "StatusPurchaseRequisition_id": 3,
//     "created_at": null,
//     "updated_at": "2020-09-24 13:27:21",
//     "user_id": 14,
//     "PlanningAccounts_id": 1,
//     "deleted_at": null,
//     "quantidade": "1.0000",
//     "valor_unitario": "1500.000000",
//     "valor_parcial": "1500.000000",
//     "product_id": 1,
//     "num_requisicao": "2020092400001",
//     "CostCenter_id": 1,
//     "additional_info": null,
//     "active": 1,
//     "inactive_justification": null,
//     "approve_without_min_quotation": 0,
//     "justification_without_min_quotation": null,
// export default class Index extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             requisitions : []
//         }
//     }

//     componentDidMount(){
//         fetch('http://127.0.0.1:8080/api/purchase-module/requisition')
//         .then( requisitions => requisitions.json().then(requisitions => this.setState({requisitions})))
//     }
    
//     render(){
//         const {requisitions} = this.state;
//         return requisitions
//         // .map((requisition,index) =>(
//         //     <div className="requisition">
//         //         <div key={index}>
//         // <h5>{requisition}</h5>
//         //         </div>
//         //     </div>
//         // ))
//     }
// }