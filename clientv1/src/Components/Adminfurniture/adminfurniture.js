import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminfurniture() {

    const [mlist, setMlist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2611/adminfurniture")
            .then(storedata => storedata.json())
            .then(mlistdata => setMlist(mlistdata))

    }
    )
    const del = (hid) => {
        var key = { hid: hid }
        axios.post("http://localhost:2611/deletefurniture/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="container-fluid row">
                <div className="container text-center title">
                    <h3>Admin Furniture Page</h3>
                </div>
                <Link to='/addfurniture'><button className="view">Add Furniture</button></Link>
                <table class="col-12 table-bordered mt-4">
                    <tr className="booktitle">
                        <th>Furniture ID</th>
                        <th>Furniture Name</th>
                        <th>Image</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Update / Delete</th>
                    </tr>
                    {
                        mlist.map((value, index) =>
                            <>
                                <tr >
                                <td className="furnitureid">{value.hid} </td>
                                <td className="furniturename">{value.sname} </td>
                                    <td><img src={value.image} class="w-25"/></td>
                                    <td className="model ">{value.model} </td>
                                    <td className="price ">{value.price}</td>
                                    <td className=" description">${value.description}</td>
                                    <td className=" rating">{value.rating} <StarRatings
                                        rating={value.rating}
                                        starDimension="20px"
                                        starSpacing="10px"
                                        starEmptyColor="grey"
                                        starRatedColor="green"

                                    /></td>
                                    <td>  <button className="bg-danger" onClick={() => { del(value.hid) }}>Delete</button>
                                        <Link to={`/updatefurniture/${value.hid}`}> <button className="view">Update</button></Link></td>
                                </tr>
                            </>
                        )
                    }
                </table>
            </div>

        </>

    );
}