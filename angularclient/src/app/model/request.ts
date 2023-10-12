import {Equipment} from "./equipment";

export class Request {
  idReq: number| undefined;
  reason: string | undefined;
  amount: number | undefined;
  created_at: Date| undefined;
  updated_at: Date| undefined;
  status: string| undefined;
  equipment: string | undefined;
}
