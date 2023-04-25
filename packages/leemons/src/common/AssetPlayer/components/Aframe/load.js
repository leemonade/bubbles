import { loadARHitTest } from './loadARHitTest';
import { loadARShadows } from './loadARShadows';
import { loadBackgroundGradient } from './loadBackgroundGradient';
import { loadHideOnEnterAR } from './loadHideOnEnterAR';
import { loadModelViewer } from './loadModelViewer';

function existHeaderScript(url) {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0, l = scripts.length; i < l; i++) {
    if (scripts[i].src === url) return true;
  }
}

export function addHeaderScript(url) {
  if (!existHeaderScript(url)) {
    const jsCode = document.createElement('script');
    jsCode.setAttribute('src', url);
    document.body.appendChild(jsCode);
  }
}

function logic(resolve, asset) {
  if (window.AFRAME) {
    addHeaderScript('https://unpkg.com/aframe-extras@3.3.0/dist/aframe-extras.min.js');

    if (!window.AFRAME.components['checkpoint-controls']) {
      setTimeout(() => loadAframe(resolve, asset), 100);
    } else {
      loadARShadows();
      loadBackgroundGradient();
      loadARHitTest();
      loadHideOnEnterAR();
      loadModelViewer(asset);
      resolve();
    }
  } else {
    addHeaderScript('https://aframe.io/releases/1.2.0/aframe.min.js');
    setTimeout(() => loadAframe(resolve, asset), 100);
  }
}

export async function loadAframe(resolve, asset) {
  if (!!resolve) logic(resolve, asset);
  return new Promise((resolve) => {
    logic(resolve, asset);
  });
}
