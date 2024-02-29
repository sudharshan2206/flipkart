import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Addfurniture() {
    var { hid } = useParams()
    const [image, setImage] = useState('')
    const [sname, setSname] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    

    useEffect(() => {
        fetch("http://localhost:2611/addfurniture" + hid)
            .then(res => res.json())
            .then((data) => {
                setImage(data[0].image)
                setSname(data[0].sname)
                setModel(data[0].model)
                setPrice(data[0].price)
                setDescription(data[0].description)
                setRating(data[0].rating)
            })
    }, [])
    function addfurniture(event) {
        event.preventDefault()
        var image = document.getElementById("image").value;
        var sname = document.getElementById("sname").value;
        var model = document.getElementById("model").value;
        var price = document.getElementById("price").value;
        var description = document.getElementById("description").value;
        var rating = document.getElementById("rating").value;
       

        var key = {
            image: image,
            sname: sname,
            model: model,
            price: price,
            description: description,
            rating: rating,
            
        }
        if (image == "") {
            alert("Enter the Image Url")
        }

        else if (sname == "") {
            alert("Enter the Electronics Name ")

        }
        else if (model == "") {
            alert("Enter the Model")

        }
        else if (price == "") {
            alert("Enter the Price")

        }
        else if (description == "") {
            alert("Enter the Description")

        }
        else if (rating == "") {
            alert("Enter the Rating")

        }

        else {
            axios.post("http://localhost:2611/addfurniture/", key)
                .then((addimage) => {
                    if (addimage.data.status === 'error') {
                        alert("image not added")
                        console.log("addimage")

                    }
                    else if (addimage.data.status === 'success') {
                        alert("Image details added Successfully!")
                        console.log("success")
                        window.location.href = `/adminfurniture`


                    }

                })
        }
    }
    return (
        <>
            <div className="addimagepage">
                <div className="addimage container text-center w-75 p-5">
                    <form onSubmit={addfurniture} className="needs-validation">
                        <h1 className="mb-4">Add Furniture</h1>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Enter the Image
                            </label>
                            <input type="text" className="form-control" id="image" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Enter the Furniture Name
                            </label>
                            <input type="text" className="form-control" id="sname" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="brick" className="form-label">
                                Model
                            </label>
                            <input type="text" className="form-control" id="model" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cement" className="form-label">
                                Price
                            </label>
                            <input type="text" className="form-control" id="price" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rod" className="form-label">
                                Description
                            </label>
                            <input type="text" className="form-control" id="description" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="sand" className="form-label">
                                Rating
                            </label>
                            <input type="text" className="form-control" id="rating" required />
                        </div>

                <button type="submit" className="btn btn-primary btn-lg">
                            Add 
                        </button>
                        <Link to={`/adminfurniture`} className="btn btn-lg btn-dark ms-2">Back</Link>

                    </form>
                </div>
            </div>
        </>
    );
}
