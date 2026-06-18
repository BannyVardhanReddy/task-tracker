export default function InputSection({ data, setData, handleOnSubmit }) {
  function handleOnChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return(
    <div className="input-section">
        <input type="text" name="description" value={data.description} onChange={handleOnChange}/>
        <button onClick={handleOnSubmit}>Add</button>
    </div>
  )
}
