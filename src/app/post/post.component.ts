import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
	posts: any[];
	private appUrl = 'http://jsonplaceholder.typicode.com/posts'; 

	constructor(private http: HttpClient) {
		

		http.get(this.appUrl).subscribe(response=>{
			//console.log(response);
			this.posts = response;
		});
	}

	addPost(input: HTMLInputElement){
		let post = { title:input.value };
		
		input.value= '';
		this.http.post(this.appUrl, JSON.stringify(post)).subscribe(response =>{
			post['id'] = response.id;
			this.posts.splice(0, 0, post);
			
		})
	}

  
}
