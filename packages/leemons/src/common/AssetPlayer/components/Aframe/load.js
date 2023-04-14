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

function logic(resolve) {
  addHeaderScript('https://aframe.io/releases/1.2.0/aframe.min.js');
  if (window.AFRAME) {
    addHeaderScript('https://unpkg.com/aframe-extras@3.3.0/dist/aframe-extras.min.js');

    if (!window.AFRAME.components['checkpoint-controls']) {
      setTimeout(() => loadAframe(resolve), 100);
    } else {
      console.log(window.AFRAME);
      loadARShadows();
      loadBackgroundGradient();
      loadARHitTest();
      loadHideOnEnterAR();
      loadModelViewer();
      resolve();
    }
  } else {
    setTimeout(() => loadAframe(resolve), 100);
  }
}

export async function loadAframe(resolve) {
  if (resolve) logic(resolve);
  return new Promise((resolve) => {
    logic(resolve);
  });
}
