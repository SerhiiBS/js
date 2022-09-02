
const Input = (props) => {
    const {input, meta, ...rest} = props
    const required = {
        color: "red",
        alignSelf: "center",
    }

    // console.log(input)

    return <>
        <input type="text" { ...rest } { ...input }/>
        <br />
        {meta.error && meta.touched && <span style={required}>{meta.error}</span>}
    </>
}
export default Input;