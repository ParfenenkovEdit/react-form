const ThingButton = ({ action, className }) => {
    return (
        <button
        className={className}
        onClick={action}
        type="button"
        >edit</button>
    )
}

export default ThingButton;
