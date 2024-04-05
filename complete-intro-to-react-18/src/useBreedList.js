import { useState, useEffect } from "react";

const localCache = {};

// note: some people like to create custom hooks for all the effects they have, never doing them directly

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }


    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
    
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
    
      localCache[animal] = json.breeds || [];
      
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}