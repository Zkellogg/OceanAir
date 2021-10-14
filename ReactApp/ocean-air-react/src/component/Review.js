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

        console.log(details)
        // let response = await fetch("http://localhost:8080/add-review", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(details),
        // });
        // setStatus("Submit");
        // let result = await response.json();
        // alert("Thank you for contacting us! We will be back with you as soon as possible! ");
      };

    return(
        <div className="PropertyDiv">
            <div className="review">
                <form id="review-form" onSubmit={handleSubmit}>
                <div className="form-group" id="review-heading-div">
                <h2 className="review-heading"><strong>Enjoyed your stay?</strong></h2><label htmlFor="rating" id="review-stars">
                            <div class="rating" id="review-textbox">
                            <input onChange={handleOnChange} type="radio" name="rating" value="5" id="1" /><label className="star" for="1">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="4" id="2" /><label for="2">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="3" id="3" /><label for="3">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="2" id="4" /><label for="4">☆</label>
                            <input onChange={handleOnChange} type="radio" name="rating" value="1" id="5" /><label for="5">☆</label>
                        </div>
                        </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-label">
                    <div id="REVIEW_TITLE" class="question labelAndInput required  " data-error="REVIEW_TITLE_ERROR">
                    <label for="ReviewText">
                        <span class="ReviewTitle">Who are you?</span></label>
                        <input onChange={handleOnChange} type="text" name="name" id="ReviewTitle" class="form-control" maxlength="120" placeholder="Name" data-initialerrors="" onfocus="ta.userreview.common.trackFieldFocus(this)" onkeydown="if (event.keyCode == 13) return false" required/>
                    </div>
                    </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-location">
                    <label for="ReviewText">
                        <span class="ReviewTitle">When did you stay?</span></label>
                        <div className="input-group">
                        <input type="date" onChange={handleOnChange} className="form-control form-control-lg" name="checkoutDate" required/>
                        </div>
                    </label>
                    </div>
                    <div className="form-group" id="review-name-div">
                    <label htmlFor="name" id="review-location">
                    <label for="ReviewText">
                        <span class="ReviewTitle">Where did you stay?</span></label>
                        <div className="input-group">
                        <select onChange={handleOnChange} className="form-control form-control-lg" name="location">
                            <option value="Chivas" name="location">Chivas Apartment</option>
                            <option value="Upper East" name="location">Upper East Private Beach</option>
                            <option value="Upper West" name="location">Upper West Private Beach</option>
                            <option value="Lower East" name="location">Lower East Private Beach</option>
                            <option value="Lower West" name="location">Lower West Private Beach</option>
                        </select>
                        </div>
                    </label>
                    </div>
                    <div className="form-group" id="body-message">
                    <label htmlFor="message" id="review-label">
                    <div id="REVIEW_TITLE" class="question labelAndInput required  " data-error="REVIEW_TITLE_ERROR">
                    <label for="ReviewText">
                        <span class="ReviewTitle">Give your review a title</span> </label>
                        <input onChange={handleOnChange} type="text" name="title" id="ReviewTitle" class="form-control" maxlength="120" placeholder="Summarize your visit" data-initialerrors="" onfocus="ta.userreview.common.trackFieldFocus(this)" onkeydown="if (event.keyCode == 13) return false"/>
                    </div>
                    </label>
                    <label htmlFor="message" id="review-message">
                    <textarea onChange={handleOnChange} className="form-control verbatim" rows="6" aria-required="true" placeholder="Enter your review here..." maxLength="1000" cols="15" data-localization="verbatim-placeholder" id="verbatim" name="message" required/>
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="review-button">
                    {status}
                    </button>
                </form>
            </div>
        </div>)
}

export default Review