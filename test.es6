import assert from 'assert';
import elem from 'fd-elem';
import append from './';

it('fd-append', () => {
  let appendtoBody = append(document.body);
  let h1 = elem('h1','meow')
  appendtoBody(h1);
  assert.equal(document.body.lastChild.textContent, 'meow');
});
