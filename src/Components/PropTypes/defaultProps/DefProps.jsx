import './style.css';
function DefProps(props) {
  return (
    <div className='box'>
      <h3>DefProps</h3>
      <p>{props.data}</p>
    </div>
  );
}
//Սահմանում ենք props по умолчанию, որը օգտագործվում հատկության undefined արժեքի դեպքում
// բայց ոչ null-ի դեպքում
//եթե props.data չի փողանցվել կվերցրվի այս արժեքը
DefProps.defaultProps = {
  data: 'defaultProps value',
};
export default DefProps;
