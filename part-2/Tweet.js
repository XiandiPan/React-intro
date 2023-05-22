function Tweet({username, name, date, message}) {
  // const myStyles = {
  //   color: black,
  // };

  // style={myStyles}
  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{name}</li>
        <li>{date}</li>
        <li>{message}</li>
      </ul>
    </div>
  );

  }