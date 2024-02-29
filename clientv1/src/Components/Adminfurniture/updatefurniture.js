import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Updatefurniture() {
    var { hid } = useParams();
    const [image, setImage] = useState("");
    const [sname, setSname] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        fetch("http://localhost:2611/singlefurniture/" + hid)
            .then((detail) => detail.json())
            .then((singleimage) => {
                setImage(singleimage[0].image);
                setSname(singleimage[0].sname);
                setModel(singleimage[0].model);
                setPrice(singleimage[0].price);
                setDescription(singleimage[0].description);
                setRating(singleimage[0].rating);
            });
    }, []);

    function updatefurniture(event) {
        event.preventDefault();
        var key = {
            image: image,
            sname: sname,
            model: model,
            price: price,
            description: description,
            rating: rating,
        };

        if (image === "") {
            alert("Enter the Image Url");
        } else if (sname === "") {
            alert("Enter the Furniture Name");
        } else if (model === "") {
            alert("Enter the Furniture Model");
        } else if (price === "") {
            alert("Enter the Price");
        } else if (description === "") {
            alert("Enter the Description");
        } else if (rating === "") {
            alert("Enter the Rating");
        } 
        else {
            axios
                .put("http://localhost:2611/updatefurniture/" + hid, key)
                .then((upddet) => {
                    if (upddet.data.status === "not_updated") {
                        alert("data not updated");
                        console.log("not_updated");
                        console.log(key);
                    } else if (upddet.data.status === "success") {
                        alert("data updated Successfully!");
                        console.log("success");
                        window.location.href = `/adminfurniture`;
                    }
                });
        }
    }

    return (
        <>
            <div className="updateImage container-fluid">
                <div className="container text-center title">
                    <h3>Image Valuation</h3>
                </div>
                <div className="container text-center w-75 p-5">
                    <form onSubmit={updatefurniture}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Image URL"
                            onChange={(upd) => setImage(upd.target.value)}
                            id="image"
                            value={image}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Furniture Name"
                            onChange={(upd) => setSname(upd.target.value)}
                            id="sname"
                            value={sname}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Model"
                            onChange={(upd) => setModel(upd.target.value)}
                            id="model"
                            value={model}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Price"
                            onChange={(upd) => setPrice(upd.target.value)}
                            id="price"
                            value={price}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Description"
                            onChange={(upd) => setDescription(upd.target.value)}
                            id="description"
                            value={description}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Rating"
                            onChange={(upd) => setRating(upd.target.value)}
                            id="rating"
                            value={rating}
                        />
                        <input
                            type="submit"
                            className="btn btn-secondary btn-lg bg-success"
                            value="Update"
                        />

                    <Link to={`/adminfurniture/${hid}`} className="btn btn-lg m-3 btn-dark">Back</Link>

                    </form>
                </div>
            </div>
        </>
    );
}