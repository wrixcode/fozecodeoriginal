'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Refs for smooth cursor animation
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const currentPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const easing = 0.12; // Smoother animation

  // Detect touch device on component mount
  useEffect(() => {
    const detectTouchDevice = () => {
      // Multiple checks for touch capability
      const isTouchCapable = (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-expect-error - Some browsers use msMaxTouchPoints
        (navigator.msMaxTouchPoints > 0) ||
        // CSS media query for touch capability
        window.matchMedia('(hover: none)').matches
      );
      
      setIsTouchDevice(isTouchCapable);
    };
    
    detectTouchDevice();
    
    // Also check on resize as some devices can switch modes
    window.addEventListener('resize', detectTouchDevice);
    return () => window.removeEventListener('resize', detectTouchDevice);
  }, []);

  const animateCursor = useCallback(() => {
    // Calculate distance to target
    const dx = targetPosition.current.x - currentPosition.current.x;
    const dy = targetPosition.current.y - currentPosition.current.y;
    
    // Move current position closer to target
    currentPosition.current.x += dx * easing;
    currentPosition.current.y += dy * easing;
    
    // Update cursor position
    if (cursorRef.current) {
      cursorRef.current.style.left = `${currentPosition.current.x}px`;
      cursorRef.current.style.top = `${currentPosition.current.y}px`;
    }
    
    // Continue the animation
    requestRef.current = requestAnimationFrame(animateCursor);
  }, [easing]);

  useEffect(() => {
    // Don't set up mouse event listeners on touch devices
    if (isTouchDevice) return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      // Update target position immediately
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.onclick ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.tagName === 'INPUT' ||
          target.closest('.bg-gradient-to-r') ||
          target.classList.contains('hover:text-white') ||
          // Mobile menu specific selectors
          target.closest('.fixed.top-0.right-0') ||
          target.closest('.bg-gradient-to-b') ||
          target.closest('[class*="transition-colors"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(animateCursor);
    
    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Clean up
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [animateCursor, isTouchDevice]);

  // Initialize cursor position on first render
  useEffect(() => {
    // Don't initialize on touch devices
    if (isTouchDevice) return;
    
    const initializeCursor = (e: MouseEvent) => {
      currentPosition.current = { x: e.clientX, y: e.clientY };
      targetPosition.current = { x: e.clientX, y: e.clientY };
      
      // Only need this once
      window.removeEventListener('mousemove', initializeCursor);
    };
    
    window.addEventListener('mousemove', initializeCursor, { once: true });
    
    return () => {
      window.removeEventListener('mousemove', initializeCursor);
    };
  }, [isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
      style={{ 
        left: `${currentPosition.current.x}px`,
        top: `${currentPosition.current.y}px`,
        transform: isClicking ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%)',
        zIndex: 9999
      }}
    />
  );
};

export default CustomCursor; 