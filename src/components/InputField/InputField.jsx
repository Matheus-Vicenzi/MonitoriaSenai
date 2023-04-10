import "./InputField.css";

export default function InputField(props) {
	return (
		<>
			<input
				className="input-field"
				type="text"
				placeholder={props.placeholder}
			/>
		</>
	);
}
