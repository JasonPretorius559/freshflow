import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IntakeService } from '../../services/intake.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss'],
  standalone: false
})
export class IntakeComponent implements OnInit {

  // ---- Page State ----
  intakes: any[] = [];
  loading = false;

  availablePos: any[] = [];
  selectedPo: any = null;
  loadingPos = false;

  showLoadPoModal = false;

  @ViewChild('poFileInput') poFileInput!: ElementRef<HTMLInputElement>;

  ediOptions = [
    { id: 'load', text: 'Load PO' },
    { id: 'upload', text: 'Upload PO' }
  ];

  constructor(private intakeService: IntakeService) {}

  ngOnInit(): void {
    this.loadIntakes();
  }


  // ---------------------------
  // MAIN GRID
  // ---------------------------

  loadIntakes() {
    this.loading = true;

    this.intakeService.getAll().subscribe({
      next: data => {
        this.intakes = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }


  // ---------------------------
  // EDI ACTIONS
  // ---------------------------

  onEdiAction(e: any) {
    const action = e.itemData?.id;

    if (!action) return;

    if (action === 'upload') {
      this.poFileInput.nativeElement.click();
    }

    if (action === 'load') {
      this.openLoadPoModal();
    }
  }


  // ---------------------------
  // UPLOAD PO
  // ---------------------------

  onPoFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];

    this.loading = true;

    this.intakeService.uploadPo(file).subscribe({
      next: () => {
        notify('PO file uploaded', 'success', 3000);
        this.loadIntakes();
        this.loading = false;
        input.value = '';
      },
      error: () => {
        notify('Upload failed', 'error', 3000);
        this.loading = false;
        input.value = '';
      }
    });
  }


  // ---------------------------
  // LOAD PO POPUP FLOW
  // ---------------------------

  openLoadPoModal() {
    this.showLoadPoModal = true;
    this.fetchAvailablePos();
  }

  closeLoadPoModal() {
    this.showLoadPoModal = false;
    this.selectedPo = null;
  }

  fetchAvailablePos() {
    this.loadingPos = true;

    this.intakeService.getAvailablePos().subscribe({
      next: data => {
        this.availablePos = data;
        this.loadingPos = false;
      },
      error: () => {
        notify('Failed to load available POs', 'error', 3000);
        this.loadingPos = false;
      }
    });
  }

  onPoSelected(po: any) {
    this.selectedPo = po;
  }

  onLoadPoConfirm() {
    if (!this.selectedPo) {
      notify('Select a PO first', 'warning', 2000);
      return;
    }

    this.intakeService.loadPo(this.selectedPo.id).subscribe({
      next: () => {
        notify('PO loaded successfully', 'success', 3000);
        this.closeLoadPoModal();
        this.loadIntakes();
      },
      error: () => {
        notify('Failed to load PO', 'error', 3000);
      }
    });
  }

}
