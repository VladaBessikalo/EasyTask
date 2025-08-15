import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

// Input - decorator, input - special fn (the same with Output and output)
// select - in Output could be named according to the action (can use any name)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/users/' + this.avatar;
  }

  // Signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
