
import React, { useEffect } from 'react'
import Logo from "./image/images.png"
import Deletes from './image/delete.png'
import "./Dashboard.css"
import Copys from "./image/customers icon.png"
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../features/Showslice'
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap'
import { useState } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import {
    Button,

   
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
  } from 'reactstrap';
  



const Dashboard = () => {

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = (e) => {
      let { value } = e.target;
      setUnmountOnClose(JSON.parse(value));
    };

    const [model, setModel] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.app
    })
    useEffect(() => {
        dispatch(getAllData())
        // dispatch(createUser())
    }, [dispatch])

    // const [users, setUsers] = useState({})
    // const dispatch =  useDispatch()
    //  console.log(dispatch(createUser()))
    // const navigate = useNavigate()



    //    const getUser =(e)=>{
    //     setUsers({...users, [e.target.name]: e.target.value})
    //     console.log(users)
    //    }

    //    const handlesubmit = (e) =>{
    //     e.preventDefault()
    //     dispatch(createUser(users))
    //     console.log(users)
    //     navigate("/")


    //    }
    return (
        <div className='body'>
            <div className='Mein-div'>
                <div className='frist'> <img className='imglogo' src={Logo} alt="logo" />

                    <button className='btn'>
                        <img className='place' src={Copys} alt="logo" />  CUSTOMER </button>
                </div>
            </div>

            <div className='second-mein'>
                <div className='second'>
                    <b className='text-bold'>CUSTOMERS</b>
                </div>


                <Modal 

                    // size='md'
                    isOpen={model}
                    toggle={() => setModel(!model)}
                >
                    <ModalHeader
                        toggle={() => setModel(!model)}
                        className='Modelpups123'
                       
                    >
                        <div>
                            <h3>Add New Customer</h3>
                        </div>

                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <Row>
                                <Col lg={12}>
                                    <div>
                                      <br />
                                      <input
                                            type='text'
                                            placeholder='Username'
                                            className='form-control'
                                        // name="name"
                                        // onChange={getUser}
                                        />
                                        <br />
                                        <input
                                            type='text'
                                            placeholder='Customer Name'
                                            className='form-control'
                                        // name="name"
                                        // onChange={getUser}
                                        />

                                        <br />
                                        <input
                                            type='text'
                                            placeholder='Email'
                                            className='form-control'
                                        // name="email"
                                        // onChange={getUser}
                                        />
                                        <br />
                                        <button className='popsbtn123'
                                           
                                        > Add Coustomer</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </ModalBody>
                </Modal>
                <button className='btn-plus' onClick={() => setModel(true)}>

                    <AddIcon className='plus12' />
                    ADD NEW CUSTOMER   </button>
                <div className='Last-section' style={{ color: '#043933' }}>
                    <p> Customer ID#
                        <UnfoldMoreIcon />

                    </p>
                    <p> Customer Name <UnfoldMoreIcon />  </p>
                    <p> Email  <UnfoldMoreIcon /></p>
                </div>
                <div className='container-table'>
                    <table>
                        <thead >
                            {
                                data?.users?.data &&
                                data.users.data.map((elem, i) => {

                                    return (
                                        <tr key={i} className='tables'>
                                            <td> <img src={elem.avatar} className='tdimg' /></td>
                                            <td> {elem.id}</td>
                                            <td style={{ color: '#57BC90', textDecoration: 'underLine' }}>{elem.first_name}</td>
                                            <td>{elem.email}</td>
                                            <td>  <button className='btns2'>Edit</button></td>
                                            <td>  <button className='btn2'  onClick={toggle}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                    </table>

                    <Modal isOpen={modal}  unmountOnClose={unmountOnClose} className="Delete-Icon">
                        <ModalHeader toggle={toggle}></ModalHeader>
                        <ModalBody className='delete-model'>
                        <div className='popdiv'>
                        <h1>
                           <img className='delete_img' src={Deletes} alt="logo" />
                           </h1>
                           <h5>Are you sure?</h5>
                           <p>
                           Do you really want to delete this customer? This process can not be undone.
                           </p>

                        </div>
                           

                        </ModalBody>
                        <ModalFooter className='modal-header'>
                            <Button  className='pink' size="sm" onClick={toggle}>
                            Cancel
                            </Button>
                            <Button className='pink'  size="sm" color="danger" onClick={toggle}>
                                Delete
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        </div>
    )
}
export default Dashboard
