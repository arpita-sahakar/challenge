import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import AgeDemographicTable from './AgeDemographicTable';
import './Styles.css';


function AgeDemographic() {
    const [itemList, setItemList] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const [ageDemographicResult, setAgeDemographicResult] = useState({});

    const handleSelect = (itemName) => {
        //Set the selected item in state
        console.log(itemName);
        setSelectedItem(itemName);
    }
    useEffect(() => {
        //Invoke api to get Age Demographics everytime when selected item is changed
        if (selectedItem) {
            axios.get("/users/age/" + selectedItem).then(res => setAgeDemographicResult(res.data));
        }

    }, [selectedItem]);

    useEffect(() => {
        //Invoke the item list only once (when the component is rendered)
        axios.get("/items").then(res => {
            console.log(res.data.items);
            setItemList(res.data.items);
        });
    }, [])

    return (
        <div className="common">
            <h1>Age Demographic of Users With ___</h1>
            <DropdownButton
                id="dropdown-basic-button"
                title="Item">
                {itemList.map((item, index) =>
                    <Dropdown.Item key={index} onClick={() => handleSelect(item)}>{item}</Dropdown.Item>)}
            </DropdownButton >
            <AgeDemographicTable result={ageDemographicResult} />
        </div >
    )
}

export default AgeDemographic
