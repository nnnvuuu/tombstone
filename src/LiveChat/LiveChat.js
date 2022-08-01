import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "//code.tidio.co/jxvjenuk3z6hehow72rpubugl3tgvmpu.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default LiveChat;