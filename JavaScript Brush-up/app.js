import person from "./person";
// import prs from "./person"
//the above two are examples of default exports

import { baseData } from "./utility";
import { clean } from "./utility";
// import { clean as Clean } from "./utility";
// import * as bundled from './utility.js'
//These are the examples of named exports

console.log(person.name)
console.log(clean)
console.log(baseData)