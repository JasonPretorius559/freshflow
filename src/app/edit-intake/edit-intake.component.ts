import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-intake',
  templateUrl: './edit-intake.component.html',
  styleUrls: ['./edit-intake.component.scss'],
  standalone: false
})



export class EditIntakeComponent {
  @Input() visible: boolean = false;          // Show/hide modal
  @Input() intake: any = {};                  // Generic intake object
  @Output() close = new EventEmitter<void>(); // Close modal
  @Output() save = new EventEmitter<any>();   // Emit updated object

  editIntake: any = {};

  

  ngOnChanges() {
    if (this.intake) {
      // shallow copy so editing doesn't directly mutate parent
       this.editIntake = { ...this.intake, pallets: [...this.intake.pallets] };
    }
  }

  onSave() {
    this.save.emit(this.editIntake);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
