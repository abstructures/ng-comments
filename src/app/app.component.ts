import {
    Component
} from '@angular/core';
import {
    Comment
} from './comment/cmodel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    comments: Comment[];

    constructor() {
        this.comments = [
            new Comment('Name1', 'testbody1', 14),
            new Comment('Name2', 'testbody2', 24),
            new Comment('Name3', 'testbody3', 34),
        ];
    }

    addComment(name: HTMLInputElement, body: HTMLInputElement): boolean {


        this.comments.push(new Comment(name.value, body.value, 0));
        name.value = '';
        body.value = '';

        return false;
    }

    sortComments(): Comment[] {
        return this.comments.sort((a: Comment, b: Comment) => b.votes - a.votes);
    }



}