import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminfashion() {

    const [flist, setFlist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2611/adminfashion")
            .then(storedata => storedata.json())
            .then(flistdata => setFlist(flistdata))

    }
    )
    const del = (did) => {
        var key = { did: did }
        axios.post("http://localhost:2611/deletefashion/", key)
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
                    <h3>Admin Fashion Page</h3>
                </div>
                <Link to='/addfashion'><button className="view">Add Fashion</button></Link>
                <table class="col-12 table-bordered mt-4">
                    <tr className="booktitle">
                        <th>Fashion ID</th>
                        <th>Dress Name</th>
                        <th>Image</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Update / Delete</th>
                    </tr>
                    {
                        flist.map((value, index) =>
                            <>
                                <tr >
                                <td className="fashionid">{value.did} </td>
                                <td className="fashionname">{value.hname} </td>
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
                                    <td>  <button className="bg-danger" onClick={() => { del(value.did) }}>Delete</button>
                                        <Link to={`/updatefashion/${value.did}`}> <button className="view">Update</button></Link></td>
                                </tr>
                            </>
                        )
                    }
                </table>
            </div>

        </>

    );
}