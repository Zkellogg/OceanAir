import React,{useState} from "react";
import "../CSS/Review.css"

function Review(){
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { location, name, rating, title, message, checkOutDate } = e.target.elements;
        let details = {
          location: location.value,
          name: name.value,
          rating: rating.value,
          title: title.value,
          message: message.value,
          checkOutDate: checkOutDate.value
        };
    
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
                <h2><strong>Enjoyed your stay?</strong></h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="name-textbox">
                        <strong>Name:</strong>
                        <input type="text" className="form-control" id="name" required />
                    </label>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">
                        <strong>Location:</strong>
                    </label>
                    <select name="location" id="location">
                        <option value="Chivas">Chivas Apartment</option>
                        <option value="Lower East">Lower East Private Beach</option>
                        <option value="Upper East">Upper East Private Beach</option>
                        <option value="Lower West">Lower West Private Beach</option>
                        <option value="Upper West">Upper West Private Beach</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">
                            <strong>Rating:</strong>
                        </label>
                        <div class="rating">
                            <input type="radio" name="rating" value="5" id="1"/><label className="star" for="1">☆</label>
                            <input type="radio" name="rating" value="4" id="2"/><label for="2">☆</label>
                            <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
                            <input type="radio" name="rating" value="2" id="4"/><label for="4">☆</label>
                            <input type="radio" name="rating" value="1" id="5"/><label for="5">☆</label>
                        </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">
                        <strong>Title:</strong>
                    </label>
                    <input type="text" className="form-control" id="title" required />
                    <label htmlFor="message">
                        <strong>Review:</strong>
                    </label>
                    <textarea className="form-control verbatim" rows="4" aria-required="true" placeholder="Enter your review here..." maxLength="1000" cols="20" data-localization="verbatim-placeholder" id="verbatim" required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    {status}
                    </button>
                </form>
            </div>
        </div>)
}

export default Review