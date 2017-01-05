import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    Comment
} from './cmodel';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    @Input() comment: Comment;

    constructor() {

    }

    voteUp(): boolean {
        this.comment.voteUp();
        return false;
    }

    voteDwn(): boolean {
        this.comment.voteDwn();
        return false;
    }

    ngOnInit() {}


}