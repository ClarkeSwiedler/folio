import { useState, useEffect } from "react";
import { landingURL } from "../util/urls";

export function useLandingText():{error: any, loading: boolean, landingText: string} {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [landingText, setLandingText] = useState(null);

  useEffect(() => {
    fetch(landingURL, {
      method: 'GET',
    }).then(response => {
      setLoading(false);
      if (response.ok) {
        response.json()
        .then(data => {
          console.log(data);
          setLandingText(data);
        })
      } else {
        setError(new Error(response.statusText));
      }
    }).catch((e) => {
      setError(e);
    });
  }, []);

  return {error, loading, landingText};
}