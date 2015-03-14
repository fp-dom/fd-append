import {curry2} from 'fj-curry';

let _append = (parent, child) =>
  parent.appendChild(child);

export default curry2(_append);