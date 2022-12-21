import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor()
  {
    console.log("LoggerService instance created");
  }

  log(message:string) {
    console.log(message);
  }
  getLogMessage(message:string){
    return message
  }
}
