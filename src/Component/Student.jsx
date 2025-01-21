import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Navbar } from "./Navbar";
export const Student = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("http://localhost:2345/student").then((res) => {
            setData(res.data);
            console.log("get Data", res.data);
        });
    };

    const filteredData = data
        .filter((el) =>
            el.First_name?.toLowerCase()?.includes(search?.toLowerCase())
        )
        .sort((a, b) => {
            if (sortAscending) {
                return a.First_name.localeCompare(b.First_name);
            } else {
                return b.First_name.localeCompare(a.First_name);
            }
        });

        
    return (

        <div>
            <Navbar/>
            <div style={{padding : "40px"}}>


                <h1>Get All Students Details</h1>


                <div>
                    <input
                        style={{ height: "40px", width: "250px", fontSize: "18px", marginRight: "10px" }}
                        type="text"
                        placeholder="Search by First Name..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button
                        style={{ height: "40px", width: "150px", fontSize: "18px" }}
                        onClick={() => setSortAscending(!sortAscending)}
                    >
                        Sort ({sortAscending ? "Asc" : "Desc"})
                    </button>
                </div>


                <Row>
                    {filteredData?.map((el, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={index} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {el.First_name} {el.Last_name}
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>Email:</strong> {el.Email} <br />
                                    </Card.Text>
                                    <Button style={{width : "100%"}} variant="primary">Edit Goals</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

            
    );

};
