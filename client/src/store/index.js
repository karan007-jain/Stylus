import { proxy } from 'valtio';

const state = proxy({
  intro: false,
  sartorial : false,
  color: '#EEEEEE',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;