export interface MastodonAccount {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  avatar: string;
}

export interface MediaAttachment {
  id: string;
  type: 'image' | 'video' | 'gifv' | 'audio' | 'unknown';
  url: string;
  preview_url: string;
  description?: string;
}

export interface MastodonPost {
  id: string;
  created_at: string;
  content: string;
  account: MastodonAccount;
  media_attachments: MediaAttachment[];
  url: string;
  favourites_count: number;
  reblogs_count: number;
}
