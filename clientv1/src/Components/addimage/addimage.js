import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Addimage() {
    var { mid } = useParams()
    const [image, setImage] = useState('')
    const [mname, setMname] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    

    useEffect(() => {
        fetch("http://localhost:2611/addmobile" + mid)
            .then(res => res.json())
            .then((data) => {
                setImage(data[0].image)
                setMname(data[0].mname)
                setModel(data[0].model)
                setPrice(data[0].price)
                setDescription(data[0].description)
                setRating(data[0].rating)
            })
    }, [])
    function addmobile(event) {
        event.preventDefault()
        var image = document.getElementById("image").value;
        var mname = document.getElementById("mname").value;
        var model = document.getElementById("model").value;
        var price = document.getElementById("price").value;
        var description = document.getElementById("description").value;
        var rating = document.getElementById("rating").value;
       

        var key = {
            image: image,
            mname: mname,
            model: model,
            price: price,
            description: description,
            rating: rating,
            
        }
        if (image == "") {
            alert("Enter the Image Url")
        }

        else if (mname == "") {
            alert("Enter the Mobile Name ")

        }
        else if (model == "") {
            alert("Enter the Model")

        }
        else if (price == "") {
            alert("Enter the Price")

        }
        else if (description == "") {
            alert("Enter the Desscription")

        }
        else if (rating == "") {
            alert("Enter the Rating")

        }

        else {
            axios.post("http://localhost:2611/addmobile/", key)
                .then((addimage) => {
                    if (addimage.data.status === 'error') {
                        alert("image not added")
                        console.log("addimage")

                    }
                    else if (addimage.data.status === 'success') {
                        alert("Image details added Successfully!")
                        console.log("success")
                        window.location.href = `/adminmobile`


                    }

                })
        }
    }
    return (
        <>
            <div className="addimagepage">
                <div className="addimage container text-center w-75 p-5">
                    <form onSubmit={addmobile} className="needs-validation">
                        <h1 className="mb-4">Add Image & Details</h1>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Enter the Image
                            </label>
                            <input type="text" className="form-control" id="image" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Enter the Mobile Name
                            </label>
                            <input type="text" className="form-control" id="mname" required />
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
                            ADD 
                        </button>
                        <Link to={`/adminmobile`} className="btn btn-lg btn-dark ms-2">Back</Link>

                    </form>
                </div>
            </div>
        </>
    );
}
