function Person({name, age, hobbies}) {
  const vote = age > 18 ? "please go vote!" : "you must be 18";
  const finalName = name.length > 8 ? name.substring(0,5) : name;
  return (
    <div>
      <p>Learn some information about this person</p>
      <h1>{finalName}</h1>
      <h2>{age}</h2>
      <h3>{vote}</h3>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>

    </div>
  );
}