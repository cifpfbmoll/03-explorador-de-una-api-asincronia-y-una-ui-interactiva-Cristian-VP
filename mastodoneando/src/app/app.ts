import { Component, signal } from '@angular/core';
import { SearchBox } from './search-box/search-box';
import { Post } from './post/post';
import { MastodonService } from './services/mastodon.service';
import { MastodonPost } from './models/mastodon.interface';

@Component({
  selector: 'app-root',
  imports: [SearchBox, Post],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mastodoneando');
  protected posts = signal<MastodonPost[]>([]);
  protected loading = signal(false);
  protected error = signal<string | null>(null);

  constructor(private mastodonService: MastodonService) {}

  onSearch(hashtag: string) {
    this.loading.set(true);
    this.error.set(null);
    
    this.mastodonService.getPostsByHashtag(hashtag).subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los posts. Intenta de nuevo.');
        this.loading.set(false);
        console.error('Error fetching posts:', err);
      }
    });
  }
}
