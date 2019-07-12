import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import StoreList from './storelist/StoreList';
import CandyList from './candylist/CandyList';
import EmployeeList from './employeelist/EmployeeList';

export default class ApplicationViews extends Component {  

    storeLocationArray = [
        {id: 1, name: "Kandy Korner North", address:"123 Sweet St."},
        {id: 2, name: "Kandy Korner East", address:"123 Choclate St."},
        {id: 3, name: "Kandy Korner South", address:"123 Taffy St."},
        {id: 4, name: "Kandy Korner West", address:"123 Whopper St."}
    ]
    employeeArray = [
        {id: 1, name: "Philip Crunch" },
        {id: 2, name: "Amber Butterfinger" },
        {id: 3, name: "Henry Kisses" },
        {id: 1, name: "Rebecca Gummy" }
    ]
    candyTypeArray = [
        {id:1 , type:"chocolate"},
        {id:2 , type: "hard candy"},
        {id:3 , type: "gum"},
        {id:4 , type: "chewy" }
    ]
    candyArray = [
        {id:1 , name: "Gobstoppers", candyTypeId: 2},
        {id:2 , name:"Hershey Bar" , candyTypeId: 1},
        {id:3 , name: "Gummy Bears", candyTypeId: 4},
        {id:4 , name: "Juicy Fruit", candyTypeId: 3}
    ]

    state = {
        stores: this.storeLocationArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }

     render() {
         return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
             </React.Fragment>
         );
     }
 }