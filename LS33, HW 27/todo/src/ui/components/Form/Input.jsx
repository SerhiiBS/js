
const Input = (props) => {
    const {input, meta, ...rest} = props
    const required = {
        color: "red",
        alignSelf: "center",
    }


    return <>
        <input onChange={input.onChange} value={input.value} { ...rest } />
        <br />
        {meta.error && meta.touched && <span style={required}>{meta.error}</span>}
    </>
}
export default Input;