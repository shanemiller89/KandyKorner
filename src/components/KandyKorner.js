import React, { Component } from 'react';

export default class KandyKorner extends Component {  

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
             <article className="KandyKorner">

             </article>
         );
     }
 }