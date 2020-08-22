console.log('hello world');
import printMe from './print.js';
if (module.hot) {
  module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
}