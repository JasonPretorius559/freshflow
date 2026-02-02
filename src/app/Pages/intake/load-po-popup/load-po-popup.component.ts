import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-load-po-popup',
  templateUrl: './load-po-popup.component.html',
  styleUrls: ['./load-po-popup.component.scss'],
  standalone: false
})
export class LoadPoPopupComponent {

  // ---- Inputs from parent ----
  @Input() visible = false;
  @Input() loadingPos = false;
  @Input() availablePos: any[] = [];
  @Input() selectedPo: any = null;

  // ---- Events to parent ----
  @Output() close = new EventEmitter<void>();
  @Output() poSelected = new EventEmitter<any>();
  @Output() confirmLoad = new EventEmitter<void>();


  onPoSelected(event: any) {
    const po = event.selectedRowsData[0] || null;
    this.poSelected.emit(po);
  }

  onCancel() {
    this.close.emit();
  }

  onConfirm() {
    this.confirmLoad.emit();
  }
}
