import { useState } from "react";

function Search() {
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(false);
  const [example, setExample] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function handleSearchDefinition() {
    console.log(word);
    setLoading(true);

    const response = await fetch(URL + word);
    if (response.status === 404) {
      setLoading(false);

      setError(true);
      console.log("salah");
    }
    const datax = await response.json();
    const definitionx = datax[0].meanings[0].definitions[0].definition;
    const examplex = datax[0].meanings[0].definitions[0].example;
    const feee = datax[0];
    console.log(feee);

    if (response.status === 200) {
      setDefinition(definitionx);
      setExample(examplex);
    }

    setLoading(false);
  }

  return (
    <div className="c-b-1">
      <h1 className="p-20">AOT DICTIONARY</h1>
      <div>
        <input
          className="s-b-1"
          type="text"
          name="word"
          id="word"
          placeholder="Typing any word here"
          onChange={(e) => {
            setError(false);
            setWord(e.target.value);
            setExample(false);
            setDefinition(false);
            console.log(e);
          }}
        />
        <button className="s-b" onClick={handleSearchDefinition}>
          Search
        </button>
        {isLoading ? <span className="p-20">Loading...</span> : null}
      </div>

      {isError ? <span>The word is not in our memory</span> : null}

      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {/* {console.log(data[0].meanings[0].definitions[0].definition)} */}
      {/* <pre>Definition:{data[0].meanings[0].definitions[0].definition} </pre> */}
      {/* <pre>Example:{data[0].meanings[0].definitions[0].example} </pre> */}
      {/* <ul className="c-b-1-pre">Definition:{definition} </ul> */}
      {definition ? (
        <ul className="m-t-10 p-20">Definition : {definition} </ul>
      ) : null}
      {example ? <ul className="m-t-10 p-20">Example : {example} </ul> : null}
      
    </div>
  );
}

export default Search;
