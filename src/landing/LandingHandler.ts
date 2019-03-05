import { useState, useEffect } from "react";
import { landingURL } from "../util/urls";
import { LandingContent } from "./LandingContent";

export function useLandingText():{error: any, loading: boolean, landingText: LandingContent} {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [landingText, setLandingText] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(landingURL, {
      method: 'GET'
    }).then(response => {
      setLoading(false);
      if (response.ok) {
        response.json()
        .then(data => {
          console.log(data);
          setLandingText(data);
        })
        .catch((e) => {
          setError(e);
        })
      } else {
        setError(new Error(response.statusText));
      }
    }).catch((e) => {
      setError(e);
    });
  },[]);

  return {error, loading, landingText};
}