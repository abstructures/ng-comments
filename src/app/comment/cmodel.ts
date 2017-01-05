export class Comment {
	name: string;
	body: string;
	votes: number;

	constructor(name: string, body: string, votes?: number)
	{
		this.name = name;
		this.body = body;
		this.votes = votes || 0;
	}

	voteUp(): void {
		this.votes++;
	}
	voteDwn(): void {
		this.votes--;
	}

	    isNeg(): boolean {
		return this.votes<0;
	}

}