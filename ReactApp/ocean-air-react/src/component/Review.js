import React,{useState} from "react";
import "../CSS/Review.css"

function Review(){
    const [status, setStatus] = useState("Submit");
    const [details,setDetails]=useState({})

    const handleOnChange=(e)=>{
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        let response = await fetch("http://localhost:8080/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert("Thank you for contacting us! We will be back with you as soon as possible! ");
      };

    return(
        <div className="PropertyDiv">
            <div className="review">
                <h2 className="review-heading"><strong>Enjoyed your stay?</strong></h2>
                <form id="review-form" onSubmit={handleSubmit}>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-label">
                        <input onChange={handleOnChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name="name" required/>
                    </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-date">
                        <strong>Checkout:</strong>
                        <input onChange={handleOnChange} type="date" className="form-control" id="checkout-day-textbox" name="checkoutDate" required/>
                    </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-label">
                        <div className="input-group">
                        <select onChange={handleOnChange} className="form-control form-control-lg" name="location">
                            <option value="" name="location">Where did you stay?</option>
                            <option value="Chivas" name="location">Chivas Apartment</option>
                            <option value="Upper East" name="location">Upper East Private Beach</option>
                            <option value="Upper West" name="location">Upper West Private Beach</option>
                            <option value="Lower East" name="location">Lower East Private Beach</option>
                            <option value="Lower West" name="location">Lower West Private Beach</option>
                        </select>
                        </div>
                    </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                        <label htmlFor="rating" id="review-label">
                            <div class="rating" id="review-textbox">
                            <input onChange={handleOnChange} type="radio" name="rating" value="5" id="1" /><label className="star" for="1">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="4" id="2" /><label for="2">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="3" id="3" /><label for="3">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="2" id="4" /><label for="4">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="1" id="5" /><label for="5">☆</label>
                        </div>
                        </label>
                    </div>
                    <div className="form-group" id="body-message">
                    <label htmlFor="message" id="review-label">
                    <input onChange={handleOnChange} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" name="title"/>
                    </label>
                    <label htmlFor="message" id="review-label">
                    <textarea onChange={handleOnChange} className="form-control verbatim" rows="4" aria-required="true" placeholder="Enter your review here..." maxLength="1000" cols="20" data-localization="verbatim-placeholder" id="verbatim" name="message" required/>
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    {status}
                    </button>
                </form>
            </div>
        </div>)
}

export default Review