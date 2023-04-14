import React from 'react';
import { loadAframe } from './load';

export function Aframe({ asset }) {
  const [loaded, setLoaded] = React.useState(false);

  async function load() {
    await loadAframe();
    setLoaded(true);
  }

  React.useEffect(() => {
    load();
  }, []);

  if (!loaded) return null;

  return (
    <a-scene
      embedded
      style={{ position: 'absolute' }}
      renderer="colorManagement: true;"
      model-viewer={`gltfModel: #3ditem; title: ${asset.name}`}
    >
      <a-assets>
        <a-asset-item
          id="3ditem"
          src={asset.url}
          response-type="arraybuffer"
          crossorigin="anonymous"
        ></a-asset-item>

        <a-asset-item
          id="reticle"
          src="https://cdn.aframe.io/examples/ar/models/reticle/reticle.gltf"
          response-type="arraybuffer"
          crossorigin="anonymous"
        ></a-asset-item>
        <img
          id="shadow"
          src="https://cdn.glitch.com/20600112-c04b-492c-8190-8a5ccc06f37d%2Fshadow.png?v=1606338852399"
        ></img>
      </a-assets>
    </a-scene>
  );
}
