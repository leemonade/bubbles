import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

const cache = {};

const useHTMLToCanvas = (ref, key) => {
  const [canvasImage, setCanvasImage] = useState();
  const renderCanvas = async () => {
    if (cache[key]?.data) {
      if (cache[key].data === 'pending') {
        const eventHandler = () => {
          setCanvasImage(cache[key].data);
          window.removeEventListener(`renderQueue.${key}`, eventHandler);
        };
        window.addEventListener(`renderQueue.${key}`, eventHandler);
        return;
      }
      setCanvasImage(cache[key].data);
      return;
    }

    cache[key] = { data: 'pending' };

    const canvas = await html2canvas(ref.current);
    const response = canvas.toDataURL('image/png');
    cache[key] = { data: response };

    const event = new Event(`renderQueue.${key}`);
    window.dispatchEvent(event);

    setCanvasImage(response);
  };

  useEffect(() => {
    renderCanvas();
  }, [ref.current]);
  return { canvasImage };
};

export { useHTMLToCanvas };
export default useHTMLToCanvas;
