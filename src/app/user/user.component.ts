import { Component, computed, Input, input } from '@angular/core';

// Input - decorator, input - special fn

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/users/' + this.avatar;
  }

  // Signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/users/' + this.avatar();
  // });

  onSelectUser() {}
}
