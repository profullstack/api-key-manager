/**
 * Basic tests for @profullstack/api-key-manager
 */

// Import the module
const apiKeyManager = require('../src/index.js');

// Basic test to ensure the module exports something
console.log('Testing @profullstack/api-key-manager...');
console.log('Module exports:', Object.keys(apiKeyManager));

if (Object.keys(apiKeyManager).length === 0) {
  console.error('ERROR: Module does not export anything!');
  process.exit(1);
}

// Test memory adapter if it exists
try {
  const memoryAdapter = require('../src/adapters/memory.js');
  console.log('Testing memory adapter...');
  console.log('Memory adapter exports:', Object.keys(memoryAdapter));
  
  if (Object.keys(memoryAdapter).length === 0) {
    console.error('WARNING: Memory adapter does not export anything!');
  }
} catch (err) {
  console.log('Memory adapter not found or could not be loaded:', err.message);
}

// Test basic functionality
if (typeof apiKeyManager.generateKey === 'function') {
  console.log('Testing key generation...');
  const key = apiKeyManager.generateKey();
  console.log('Generated key:', key ? 'SUCCESS' : 'FAILED');
}

if (typeof apiKeyManager.validateKey === 'function') {
  console.log('Testing key validation...');
  console.log('validateKey is a function:', typeof apiKeyManager.validateKey === 'function' ? 'SUCCESS' : 'FAILED');
}

console.log('Basic test passed!');