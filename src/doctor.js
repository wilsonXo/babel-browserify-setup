import {person} from './person';

export class doctor extends person {
	say() {
		console.log(this.name);
	}
}