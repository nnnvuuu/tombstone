import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "//code.tidio.co/qe7xt2fk18spvplhflnqevhgofmctmvf.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default LiveChat;