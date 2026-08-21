import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Glasses,
  Eye,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  UserRound,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly LayoutDashboard = LayoutDashboard;
  readonly Users = Users;
  readonly ClipboardList = ClipboardList;
  readonly Glasses = Glasses;
  readonly Eye = Eye;
  readonly ShoppingCart = ShoppingCart;
  readonly Package = Package;
  readonly BarChart3 = BarChart3;
  readonly Settings = Settings;
  readonly UserRound = UserRound;
}