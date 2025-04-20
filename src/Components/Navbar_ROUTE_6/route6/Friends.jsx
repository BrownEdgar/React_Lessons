function Friends(props) {
  return (
    <div>
      {props.friends.map((elem, index) => {
        return <p key={index}>name: {elem}</p>;
      })}
    </div>
  );
}

export default Friends
