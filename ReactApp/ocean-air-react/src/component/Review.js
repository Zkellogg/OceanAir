import React,{useState} from "react";

function Review(){
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
          name: name.value,
          email: email.value,
          message: message.value,
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
            <h1 className="PropertyHeading">Seagrove Page</h1>
            <div className="contact">
                <h2><strong>Review:</strong></h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">
                        <strong>Name:</strong>
                    </label>
                    <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">
                        <strong>Location:</strong>
                    </label>
                    <input ontype="text" autocomplete="on" className="form-control" id="location" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="rating">
                        <strong>Rating:</strong>
                    </label>
                    <input type="number" min='1' max='5' className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">
                        <strong>Title:</strong>
                    </label>
                    <input type="text" className="form-control" id="title" required />
                    <label htmlFor="message">
                        <strong>Review:</strong>
                    </label>
                    <textarea className="form-control" rows="5" id="message" required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    {status}
                    </button>
                </form>
            </div>
        </div>)
}

export default Review