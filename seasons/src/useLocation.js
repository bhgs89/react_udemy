import { useEffect, useState } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message),
    );
  }, []);

  // 1 way
  // return {
  //   lat: lat,
  //   errorMessage: errorMessage
  // };

  // 2 way
  return [lat, errorMessage];
};
