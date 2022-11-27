// Import Components Functio
import { connect } from './snake.js';
import { gameLoop } from './snake.js';

// Connect Function
// Say msg Connect
connect();

let fps = 10;

// GameLoop Call Function
gameLoop(fps);