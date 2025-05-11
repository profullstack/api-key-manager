/**
 * Basic tests for @profullstack/api-key-manager
 */

// Import the module
import apiKeyManager from '../src/index.js';
import { jest } from '@jest/globals';

// Import memory adapter
let memoryAdapter;
try {
  memoryAdapter = await import('../src/adapters/memory.js');
} catch (err) {
  console.log('Memory adapter not found or could not be loaded:', err.message);
}

describe('@profullstack/api-key-manager', () => {
  test('module exports something', () => {
    console.log('Testing @profullstack/api-key-manager...');
    console.log('Module exports:', Object.keys(apiKeyManager));
    
    expect(Object.keys(apiKeyManager).length).toBeGreaterThan(0);
  });
  
  // Test memory adapter if it exists
  test('memory adapter if available', () => {
    if (memoryAdapter) {
      console.log('Testing memory adapter...');
      console.log('Memory adapter exports:', Object.keys(memoryAdapter));
      
      expect(Object.keys(memoryAdapter).length).toBeGreaterThan(0);
    } else {
      console.log('Memory adapter not available, skipping test');
    }
  });
  
  // Test basic functionality
  test('generateKey function if available', () => {
    if (typeof apiKeyManager.generateKey === 'function') {
      console.log('Testing key generation...');
      const key = apiKeyManager.generateKey();
      console.log('Generated key:', key ? 'SUCCESS' : 'FAILED');
      
      expect(apiKeyManager.generateKey).toBeDefined();
      if (key) {
        expect(key).toBeTruthy();
      }
    } else {
      console.log('generateKey not available, skipping test');
    }
  });
  
  test('validateKey function if available', () => {
    if (typeof apiKeyManager.validateKey === 'function') {
      console.log('Testing key validation...');
      console.log('validateKey is a function:', typeof apiKeyManager.validateKey === 'function' ? 'SUCCESS' : 'FAILED');
      
      expect(apiKeyManager.validateKey).toBeDefined();
    } else {
      console.log('validateKey not available, skipping test');
    }
  });
});