import { useState, useEffect } from "react";
import AdvancedField from "./AdvancedField";

const SideEffect = () => {

  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

// 1: no dependency array --> run the hook's callback on EVERY render
// 2: dependency array with value(s)--> run the hook's callback WHENEVER one of those values changes.
// 3: empty dependency array --> run ONCE ONLY, just after initial rendering

  useEffect( () => {
    console.log('Setting title');
    document.title = `Count: ${count}`;
  }, [count] ); // dependency array contains a list of values where IF those values change THEN rerender

  return (
    <div>

    <h1>This is the Side Effect Component!</h1>
    <h3>Count: {count}</h3>
    <button onClick={ () => setCount(count + 1) }>Increment</button>

    <label>
      <input 
        value={checked}
        type="checkbox"
        onChange={ () => { setChecked(!checked) } }
      />
      Advanced Search
    </label>

    <div>
      { checked &&
        <AdvancedField/>
      }
    </div>

    </div>
  );

};

export default SideEffect;
