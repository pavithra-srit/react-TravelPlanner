import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './AddPlan.css'

const vacationDataArr = [{ label: "Friends", value: 1 },
{ label: "Family", value: 2 },
{ label: "Solo", value: 3 },
{ label: "Family & Friends", value: 4 }]
const bestTimeArr = [
    { label: "Spring", value: 1 },
    { label: "Summer", value: 2 },
    { label: "Winter", value: 3 },
    { label: "Fall", value: 4 }]
const transportArr = [
    { label: "Flight", value: 1 },
    { label: "Car", value: 2 },
    { label: "Bike", value: 3 },
    { label: "cruise", value: 4 },
    { label: "Bus", value: 5 },
    { label: "Train", value: 6 }]
const durationArr = [
    { label: "Day", value: 1 },
    { label: "Week", value: 2 },
    { label: "Month", value: 3 },
    { label: "Year", value: 4 }]

const AddPlan = (props) => {

    // console.log("propss", props.addValueDetail, props.sendDataToParent)
    const [selectedPlaceName, setplaceName] = useState('');
    const [selectedVacationValue, setVacationValue] = useState();
    const [selectedBestTimeValue, setBestTimeValue] = useState();
    const [selectedTransportValue, setTransportValue] = useState();
    const [selectedDurationNumValue, setDurationNumValue] = useState();
    const [selectedDurationValue, setDurationValue] = useState();
    const [startDateValue, setStartDate] = useState(new Date());
    const [endDateValue, setEndDate] = useState(new Date());
    const [attractionValue, setAttractionEvent] = useState('');
    const [notesValue, setNotesEvent] = useState('');


    const placeNameEvent = (event) => {
        setplaceName(event.target.value)
    }

    const startDateEvent = (event) => {
        setStartDate(event)
    }
    const endDateEvent = (event) => {
        setEndDate(event)
    }
    const obj = {
        "place": selectedPlaceName,
        "vacationType": selectedVacationValue,
        "besttime": selectedBestTimeValue,
        "modeofTransport": selectedTransportValue,
        "duration": selectedDurationNumValue + " " + selectedDurationValue,
        "startdate": startDateValue,
        "enddate": endDateValue,
        "attraction": attractionValue,
        "note": notesValue
    }


    return (
        <>
            {props.addValueDetail ?
             props.sendDataToParent({...obj}) : ''
            }

            <Form className="form-addplan"  >
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <div className="form-group pt-3">
                                <Form.Label  >Name of the Place</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    onChange={placeNameEvent} placeholder="Enter Place Name" value={selectedPlaceName || ""} />
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="form-group pt-3">
                                <Form.Label  >Vacation Type</Form.Label>
                                <Form.Select value={selectedVacationValue || ''}
                                    onChange={(e) => setVacationValue(e.target.value)}>
                                    <option>Select</option>
                                    {vacationDataArr.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>
                                    })}
                                </Form.Select>
                            </div>        </Col>
                        <Col xs={6} md={3}>
                            <div className="form-group pt-3">
                                <Form.Label  >Best Time</Form.Label>
                                <Form.Select value={selectedBestTimeValue || ''}
                                    onChange={(e) => setBestTimeValue(e.target.value)}>
                                    <option>Select</option>
                                    {bestTimeArr.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>
                                    })}
                                </Form.Select>
                            </div>                            </Col>
                        <Col xs={6} md={3}>
                            <div className="form-group pt-3">
                                <Form.Label  >Mode of Transport</Form.Label>
                                <Form.Select value={selectedTransportValue || ''}
                                    onChange={(e) => setTransportValue(e.target.value)}>
                                    <option>Select</option>
                                    {transportArr.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>
                                    })}
                                </Form.Select>
                            </div>                            </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={3}>
                            <Form.Label  >Duration</Form.Label>

                            <InputGroup className="mb-3">

                                <Form.Control type="text" className="form-control"
                                    onChange={(e) => setDurationNumValue(e.target.value)}
                                    value={selectedDurationNumValue || ''} />

                                <Form.Select value={selectedDurationValue || ''}
                                    onChange={(e) => setDurationValue(e.target.value)}>
                                    <option>Select</option>
                                    {durationArr.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.label}</option>
                                    })}
                                </Form.Select>
                            </InputGroup>

                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Label  >Start Date</Form.Label>
                            <InputGroup className="mb-3">
                                <DatePicker showIcon
                                    selected={startDateValue}
                                    onChange={startDateEvent}
                                    value={startDateValue} />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Label  >End Date</Form.Label>
                            <InputGroup className="mb-3">
                                <DatePicker showIcon
                                    selected={endDateValue}
                                    onChange={endDateEvent}
                                    value={endDateValue} />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={3}></Col>

                    </Row>

                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="attraction.ControlTextarea">
                                <Form.Label  >Attraction</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    value={attractionValue || ''} onChange={(e) => setAttractionEvent(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="notes.ControlTextarea">
                                <Form.Label  >Notes</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    value={notesValue || ''} onChange={(e) => setNotesEvent(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>


        </>
    )
}

export default AddPlan