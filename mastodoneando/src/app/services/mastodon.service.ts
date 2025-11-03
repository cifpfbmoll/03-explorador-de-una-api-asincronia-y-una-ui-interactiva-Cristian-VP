import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MastodonPost } from '../models/mastodon.interface';

@Injectable({
  providedIn: 'root'
})
export class MastodonService {
  private readonly instanceUrl = 'https://mastodon.social';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene posts por hashtag desde la API de Mastodon.
   * Filtra solo posts con imágenes y limita a 10 resultados.
   */
  getPostsByHashtag(hashtag: string): Observable<MastodonPost[]> {
    const url = `${this.instanceUrl}/api/v1/timelines/tag/${hashtag}?limit=40`;
    
    return this.http.get<MastodonPost[]>(url).pipe(
      map(posts => posts
        .filter(post => 
          post.media_attachments && 
          post.media_attachments.length > 0 &&
          post.media_attachments.some(media => media.type === 'image')
        )
        .slice(0, 10)
      )
    );
  }
}
