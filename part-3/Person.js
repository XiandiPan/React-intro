function Person({name, age,hobbies}) {
  const vote = age > 18? "please go vote" : "you must be 18";
  return (
    <div>
      <p>Learn some information about this person</p>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{vote}</h3>

    </div>
  );
}