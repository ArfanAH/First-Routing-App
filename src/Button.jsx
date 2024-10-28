function Button({ title })
{
  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
  }
  const buttonClick = (e) =>
  {
   e.target.textContent = "Reading...."
  }
  return (
    <button style={styles} onClick={(e)=>buttonClick(e)}>{title}</button>
  );
}
export default Button;