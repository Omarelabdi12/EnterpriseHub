import { Component } from '@angular/core';
import { LucideAngularModule, Search, Bell, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  imports: [LucideAngularModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  readonly Search = Search;
  readonly Bell = Bell;
  readonly ChevronDown = ChevronDown;
}