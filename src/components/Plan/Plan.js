import React from 'react'
import DataTable from "react-data-table-component";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Plan.css'
import addButton from '../../assets/images/add.svg'
import viewButton from '../../assets/images/view.svg'
import editButton from '../../assets/images/edit.svg'
import deleteButton from '../../assets/images/delete.svg'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddPlan from '../../components/AddPlan/AddPlan'
import ViewPlan from '../../components/ViewPlan/ViewPlan';
import EditPlan from '../../components/EditPlan/EditPlan';



const columns = [
  { selector: row => row.id, name: "ID", sortable: true },
  { selector: row => row.place, name: "Place to vist", sortable: true },
  { selector: row => row.vacationType, name: "Vacation Type", sortable: true },
  { selector: row => row.besttime, name: "Best Time", sortable: true },
  { selector: row => row.modeofTransport, name: "Mode of Transport", sortable: true },
  { selector: row => row.duration, name: "Duration", sortable: true },
  { selector: row => row.startdate, name: "Start Date", sortable: true },
  { selector: row => row.enddate, name: "End Date", sortable: true },
  { selector: row => row.attraction, name: "Attraction", sortable: true },
  { selector: row => row.note, name: "Note", sortable: true }

]

function Table(props) {
  return <>
    <DataTable className='container mt-5'
      columns={columns}
      data={props.rowData}
      fixedHeader
      responsive={true}
      selectableRows={true}
      selectableRowsHighlight={true}
    // onRowClicked={handleRowClicked}
    // selectableRowsComponent={Checkbox} // Pass the Checkbox component only

    // selectableRowsSingle={true}
    // onSelectedRowsChange={handleSelectedRowChange}
    />
  </>;
}


function CrudButtons() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [addflag, setAddFlag] = useState(false);

  const handleAddShow = (breakpoint) => {
    setFullscreen(breakpoint)
    setShow(true);
    setModalTitle('Add Plan')
  }

  const handleViewShow = (breakpoint) => {
    setFullscreen(breakpoint)
    setShow(true);
    setModalTitle('View Plan')
  }
  const handleEditShow = (breakpoint) => {
    setFullscreen(breakpoint)
    setShow(true);
    setModalTitle('Edit Plan')
  }
  // const handleAddBtnEvent = () => {

  // useEffect(() => {
  //   setAddFlag(true)
  //   // setShow(false);
  // })
  // };
  const handleClose = (event) => {
    setShow(false);
  }
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
    setAddFlag(false)

    console.log("dataaaa", data)
  }

  const handleAddBtnEvent = async () => {
    setShow(false)
    const data = await axios.post('http://localhost:5000/plan/createPlan', { dataFromChild })
      .then(res => {
        console.log("resssss", res)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="d-flex">
        <h2 className="left mt-2">Travel Plan</h2>
        <div className="cp p-2 mt-2" onClick={handleAddShow}>
          <img src={addButton} alt="Add" className="img-thumbnail" /></div>
        <div className="cp p-2 mt-2" onClick={handleViewShow}>
          <img src={viewButton} alt="View" className="img-thumbnail" /></div>
        <div className="cp p-2 mt-2" onClick={handleEditShow}>
          <img src={editButton} alt="Edit" className="img-thumbnail" /></div>
        <div className="cp p-2 mt-2">
          <img src={deleteButton} alt="Delete" className="img-thumbnail" /></div>
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTitle === "Add Plan" ?
            <AddPlan addValueDetail={addflag} sendDataToParent={handleDataFromChild} /> :
            modalTitle === "View Plan" ? <ViewPlan /> : <EditPlan />

          }
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>        </Modal.Footer>
      </Modal>
    </>
  )
}
const Plan = () => {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/plan/viewPlan')
      .then(res => {
        setRowData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  })


  return (
    <>
      <div className='wrapper'>
        <CrudButtons />

        <Table rowData={rowData} />

      </div>
    </>
  )
}

export default Plan