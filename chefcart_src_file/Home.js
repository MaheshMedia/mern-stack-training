import React, { useEffect, useState } from "react";
import { Avatar, Card, Row, Space, Col, Badge, Button } from "antd";
import axios from "axios";
import "./App.css"

export const Home = () => {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setpopularDishes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((res) => {
        setDishes(res.data.dishes);
        setpopularDishes(res.data.popularDishes);
      });
  }, []);

  console.log(dishes);

  return (
    <div>
      <h1 className="heading">Select dishes</h1>
      <h2 className="blk-Pad"></h2>
      <h3 className="date-pad"> 21-May-2021  |  10:30PM To 12:30PM</h3>
     <button className="button-1">Biryani</button>
      <button className="button-2">Biryani</button>
      <button className="button-3">Biryani</button>
      <button className="button-4">Biryani</button>
  
  <h1 className="heading-4"> Popular Dishes</h1>

      <Card>
        <Row justify="center">
          {popularDishes.map((dish) => {
            return (
              <div style={{ margin: "40px" }} id={dish.id}>
                <Avatar size={80} src={dish.image}>
                  {dish.name}
                </Avatar>
              </div>
            );
          })}
        </Row>
      </Card>
      <button class="dropdown"> Recommended  </button>
      <button className="menu">Menu</button>
     {dishes.map((dish) => {
        return (
          <Row justify="center">
            <Card id={dish.id} style={{ width: "800px", height: "300px" }}>
              <Row justify="space-between">
                <Col span={10}>
                  <Space style={{width:"100%"}}>
                    <h2>{dish.name}</h2>
                    <Badge
                      count={dish.rating}
                      style={{ backgroundColor: "#52c41a" }}
                    ></Badge>
                  </Space>
                  <Space style={{width:"100%"}}>
                    {dish.equipments.map((equipment) => {
                      return <h5>{equipment}</h5>;
                    })}
                  </Space>
                  <Row>
                    <h5>{dish.description}</h5>
                  </Row>
                </Col>
                <Col span={10}>
                  <img
                    style={{ height: "30%", width: "80%" }}
                    src={dish.image}
                  ></img>
                  <Button className="add-button">Add</Button>
                </Col>
              </Row>
            </Card>
          </Row>
        );
      })}
    </div>
  );
};
