import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Enter City.."/>
		<input type="text" name="country" placeholder="Enter Country..."/>
		<button>Submit</button>
	</form>
);

export default Form;