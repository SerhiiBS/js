
const Input = (props) => {
    const {input, meta, ...rest} = props

    return <>
        <input onChange={input.onChange} value={input.value} { ...rest } />
    </>
}
export default Input;