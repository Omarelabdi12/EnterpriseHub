import { Component, inject } from '@angular/core';
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
  LogOut
} from 'lucide-angular';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

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
  readonly LogOut = LogOut;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

logout(): void {  
  this.authService.logout();
  this.router.navigate(['/login']);
}
}