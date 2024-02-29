import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminmobile() {

    const [mlist, setMlist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2611/adminmobile")
            .then(storedata => storedata.json())
            .then(mlistdata => setMlist(mlistdata))

    }
    )
    const del = (mid) => {
        var key = { mid: mid }
        axios.post("http://localhost:2611/deletemobile/", key)
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
                    <h3>Admin Page</h3>
                </div>
                <Link to='/addmobile'><button className="view">Add Image</button></Link>
                <table class="col-12 table-bordered mt-4">
                    <tr className="booktitle">
                        <th>Mobile ID</th>
                        <th>Mobile Name</th>
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
                                <td className="mobileid">{value.mid} </td>
                                <td className="mobilename">{value.mname} </td>
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
                                    <td>  <button className="bg-danger" onClick={() => { del(value.mid) }}>Delete</button>
                                        <Link to={`/updatemobile/${value.mid}`}> <button className="view">Update</button></Link></td>
                                </tr>
                            </>
                        )
                    }
                </table>
            </div>

        </>

    );
}