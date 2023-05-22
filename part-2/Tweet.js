function Tweet({username, name, date, message}) {
  const myStyles = {
    color: black,
  };

  return (
    <div style={myStyles}>
      <ul>
      <li>{username}</li>
      <li>{name}</li>
      <li>{date}</li>
      <li>{message}</li>
      </ul>
    </div>
  );

  }