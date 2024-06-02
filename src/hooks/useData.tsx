// import React from "react";
// import db from "../db.json"

// function useData() {

//     const data = JSON.parse(JSON.stringify(db));
//     return data;
// }

// export default useData;


import fs from 'fs'

let storage = [
        {
        leadGen: "Mat",
        date:"02.04.2024",
        datePosted:"03.07.2024",
        status:"PROPOSAL SENT",
        timeSent:"11.00 - 14.00",
        name:"Landing",
        url:"www.com",
        role:"Lead generator"
        },
        {
        leadGen: "Wade",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"12.00 - 14.00",
        name:"WebFlow",
        url:"www.com",
        role:"Lead generator"
        },
        {
        leadGen: "Robert",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"12.00 - 19.00",
        name:"Tilda",
        url:"www.com",
        role:"Lead generator"
        },
        {
        leadGen: "Phill",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"12.00 - 14.00",
        name:"Lead generatorOps",
        url:"www.com",
        role:"Admin"
        },
        {
        leadGen: "Ada",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"10.00 - 12.00",
        name:"WordPress",
        url:"www.com",
        role:"Admin"
        },
        {
        leadGen: "Kate",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"12.00 - 14.00",
        name:"Landing",
        url:"www.com",
        role:"Sales maneger"
        },
        {
        leadGen: "Andrey",
        date:"01.04.2024",
        datePosted:"03.04.2024",
        status:"PROPOSAL SENT",
        timeSent:"12.00 - 14.00",
        name:"Landing",
        url:"www.com",
        role:"Sales maneger"
        }
    ]


export  function useData(){
    return storage
}


export  function writeData(data: any){
    // const newLead = {
    //     leadGen: "New Lead",
    //     date: "01.06.2024",
    //     datePosted: "02.06.2024",
    //     status: "NEW",
    //     timeSent: "10.00 - 12.00",
    //     name: "New Landing",
    //     url: "www.new.com",
    //     role: "Lead generator"
    // };


    storage.push(data);

}



export default useData;