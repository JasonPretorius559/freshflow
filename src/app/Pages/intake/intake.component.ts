import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IntakeService } from '../../services/intake.service';
import notify from 'devextreme/ui/notify';
import { DxPopupComponent } from 'devextreme-angular';
@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss'],
  standalone: false,
})
export class IntakeComponent implements OnInit {
  showLoadPoModal = false;

  availablePos: any[] = [];
  selectedPo: any = null;
  loadingPos = false;
  intakes: any[] = [];
  loading = false;



  @ViewChild('poFileInput') poFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('popup') popup!: DxPopupComponent;

  ediOptions = [
    { id: 'load', text: 'Load PO' },
    { id: 'upload', text: 'Upload PO' },
  ];

  constructor(private intakeService: IntakeService) {}

  ngOnInit(): void {
    this.loadIntakes();
  }

  ngAfterViewInit(): void {
    if (this.popup) {
      this.popup.width = 1200;
      this.popup.height = 600;
    }
  }

  loadIntakes() {
    this.loading = true;

    this.intakeService.getAll().subscribe({
      next: (data) => {
        this.intakes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load intakes', err);
        this.loading = false;
      },
    });
  }

  onEdiAction(e: any) {
  const action = e.itemData?.id;

  if (!action) return; // safety check

  switch (action) {
    case 'upload':
      // open hidden file input
      if (this.poFileInput?.nativeElement) {
        this.poFileInput.nativeElement.click();
      }
      break;

    case 'load':
      // open Load PO modal
      this.openLoadPoModal();
      break;

    default:
      console.warn('Unknown EDI action:', action);
      break;
  }
}


  onPoFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    this.loading = true;

    this.intakeService.uploadPo(file).subscribe({
      next: () => {
        notify({
          message: 'PO file uploaded successfully',
          type: 'success',
          displayTime: 3000,
          position: { my: 'top center', at: 'top center', offset: '0 20' },
        });

        this.loading = false;
        this.loadIntakes();
        input.value = '';
      },
      error: (err) => {
        notify({
          message: 'Failed to upload PO file',
          type: 'error',
          displayTime: 3000,
          position: { my: 'top center', at: 'top center', offset: '0 20' },
        });

        this.loading = false;
        input.value = '';
      },
    });
  }

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
    next: (data) => {
      this.availablePos = data;
      this.loadingPos = false;
    },
    error: () => {
      notify('Failed to load available POs', 'error', 3000);
      this.loadingPos = false;
    }
  });
}

onPoSelected(e: any) {
  // single selection, pick first row
  this.selectedPo = e.selectedRowsData[0] || null;
}

onLoadPoConfirm() {
  if (!this.selectedPo) {
    notify('Select a PO first', 'warning', 2000);
    return;
  }

  // Pass only the ID
  const poId = this.selectedPo.id;

  this.intakeService.loadPo(poId).subscribe({
    next: () => {
      notify('PO loaded successfully', 'success', 3000);
      this.closeLoadPoModal();
      this.loadIntakes(); // refresh main grid
    },
    error: () => {
      notify('Failed to load PO', 'error', 3000);
    }
  });
}
}
