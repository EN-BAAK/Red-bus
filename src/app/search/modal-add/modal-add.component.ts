import {
  Component,
  EventEmitter,
  inject,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add',
  standalone: false,
  templateUrl: './modal-add.component.html',
  styleUrl: './modal-add.component.css',
})
export class ModalAddComponent {
  private modalService = inject(NgbModal);

  @Output() addTravel = new EventEmitter<any>();

  travel = new FormGroup({
    name: new FormControl('', Validators.required),
    desc: new FormControl('', [Validators.required, Validators.minLength(20)]),
    startDate: new FormControl(new Date(), Validators.required),
    endDate: new FormControl(new Date(), Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    id: new FormControl(-1),
  });

  @ViewChild('content') modalContent!: TemplateRef<any>;

  openModal() {
    this.modalService.open(this.modalContent);
  }

  addNewTravel() {
    this.addTravel.emit(this.travel.value);
  }
}
