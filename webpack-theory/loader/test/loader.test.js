/**
 * @jest-environment node
 */
import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt');

  const output = stats.toJson().modules[0].source;

  // console.log(stats.toJson().modules);

  expect(output).toBe('export default "Hey Alice!\"');
});