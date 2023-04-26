import React from 'react';
import { loadAframe } from './load';

export function Aframe({ asset, compact }) {
  const [loaded, setLoaded] = React.useState(false);

  async function load() {
    await loadAframe(null, asset);
    setLoaded(true);
  }

  React.useEffect(() => {
    if (!loaded && typeof asset?.name === 'string' && asset?.name?.length > 0) {
      load();
    }
  }, [loaded, asset]);

  if (!loaded) return null;
  return (
    <a-scene
      embedded
      style={{ position: 'absolute' }}
      renderer="colorManagement: true;"
      model-viewer={`gltfModel: #3ditem; title: ${compact ? '' : asset.name}`}
      vr-mode-ui={`enabled: ${compact ? false : true}`}
    >
      <a-assets>
        <a-asset-item
          id="3ditem"
          src={asset.url}
          response-type="arraybuffer"
          crossorigin="anonymous"
        ></a-asset-item>
        <img
          id="shadow"
          crossOrigin="anonymous"
          src="https://cdn.glitch.com/20600112-c04b-492c-8190-8a5ccc06f37d%2Fshadow.png?v=1606338852399"
        ></img>
      </a-assets>
    </a-scene>
  );
}
