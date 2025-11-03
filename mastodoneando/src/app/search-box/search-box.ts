import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.scss',
  standalone: true
})
export class SearchBox {
  hashtag = signal('');
  search = output<string>();

  onSearch() {
    const tag = this.hashtag().trim();
    if (tag) {
      this.search.emit(tag);
    }
  }
}
