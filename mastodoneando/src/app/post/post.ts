import { Component, input } from '@angular/core';
import { MastodonPost } from '../models/mastodon.interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
  standalone: true
})
export class Post {
  post = input.required<MastodonPost>();
  
  getFirstImage() {
    return this.post().media_attachments.find(media => media.type === 'image');
  }
}
