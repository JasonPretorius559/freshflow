import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IntakeService } from '../../../services/intake.service';
import notify from 'devextreme/ui/notify';  // ✅ DevExtreme notifications

@Component({
  selector: 'app-edit-intake',
  templateUrl: './edit-intake.component.html',
  styleUrls: ['./edit-intake.component.scss'],
  standalone: false
})
export class EditIntakeComponent {
  @Input() visible: boolean = false;          
  @Input() intake: any = {};                  
  @Output() close = new EventEmitter<void>(); 
  @Output() save = new EventEmitter<any>();   
  @Output() refresh = new EventEmitter<void>();


  editIntake: any = {};

  constructor(private intakeService: IntakeService) {}
  
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

  // ------------------------
  // Verify a pallet
  // ------------------------
  
onVerify = (e: any) => {
  console.log('onVerify called', e);
  const pallet = e.row.data;
  console.log('Pallet data:', pallet);
  e.event?.preventDefault();

  console.log('Calling verifyPallet service...');
  this.intakeService.verifyPallet(pallet).subscribe({
    next: (response) => {
      console.log('Success response:', response);
      notify('Pallet verified and stock created', 'success', 3000);
      
      
      pallet.verified = response.verified;
      pallet.verifiedAt = response.verifiedAt;
      pallet.verifiedBy = response.verifiedBy;
      
    
      e.component.refresh();
    },
    error: (err) => {
      console.error('Verify failed', err);
      notify('Failed to verify pallet', 'error', 3000);
      pallet.verified = false;
    }
  });
}
}
