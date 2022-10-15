const Label = ({ title, body }) => (
    <p>
        <label className="form__label">
            {title}<br />
            {body}
        </label>
    </p>
);

export default Label;