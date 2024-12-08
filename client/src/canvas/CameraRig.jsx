/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState([0, 0]);
  const [currentRotation, setCurrentRotation] = useState([0, 0]);

  // Mouse drag event listeners
  useEffect(() => {
    const onMouseDown = (e) => {
      if (e.button === 0) { // Left mouse button
        setDragging(true);
        setStartPos([e.clientX, e.clientY]);
      }
    };

    const onMouseMove = (e) => {
      if (dragging) {
        const deltaX = e.clientX - startPos[0];
        setCurrentRotation((prevRotation) => {
          const newRotationY = prevRotation[1] + deltaX * 0.01; 
          const clampedRotationY = Math.max(Math.min(newRotationY, Math.PI / 3.5), -Math.PI / 3.5); // Limit to ±60 degrees
          return [prevRotation[0], clampedRotationY];
        });
        setStartPos([e.clientX, e.clientY]);
      }
    };

    const onMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, startPos]);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [currentRotation[0], currentRotation[1], 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
