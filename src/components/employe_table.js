import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";

const Employeelist = () => {
    const [employeeslist, setemployees] = useState([])
    useEffect(() => {
        getemployees()
    }, [])
  
  
  const getemployees = () => {
    fetch("https://mocki.io/v1/50f05c0a-8b4f-4994-af68-306e4bb7f48a")
        .then(res => res.json())
        .then(
            (result) => {                    
                setemployees(result)
            },
            (error) => {
                setemployees(null);
            }
        )
  }
  
  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">id employee</th>
              <th className="border-0">last name</th>
              <th className="border-0">first name</th>
              <th className="border-0">date employment</th>
              <th className="border-0">last login</th>
              <th className="border-0">train statut</th>

            </tr>
          </thead>
          <tbody>
          {employeeslist.map(emp => (
                      <tr key={emp.rowid}>
                          <td>{emp.rowid}</td>
                          <td>{emp.lastname}</td>
                          <td>{emp.firstname}</td>
                          <td>{emp.dateemployment}</td>
                          <td>{emp.datelastlogin}</td>
                          <td>{emp.training_status ==0 || emp.training_status ==null ? <button type="button" class="btn btn-outline-primary btn-sm" >train</button>: 'done'}</td>
                          
                      </tr>
                  ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
  
  }
  export default Employeelist;
