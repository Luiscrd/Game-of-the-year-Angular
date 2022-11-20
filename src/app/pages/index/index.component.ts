import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import { Game } from '../../interfaces/interfaces';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {



  constructor(

    private firestore: AngularFirestore

  ) { }

  ngOnInit(): void {

    this.firestore.collection<Game>('goty').valueChanges().pipe(
      map(resp => resp.map(({ name, votos }) => ({ name, value: votos}))
      )
    )
    .subscribe(resp => {
      console.log(resp);
    })

  }

}
