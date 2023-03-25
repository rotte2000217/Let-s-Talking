import { Either } from "../../../shared/either"
import ResponseError from "../../../shared/response-error"
import Contact from "../../contact"

export interface IContactsGateway {
    find(username: string): Promise<Either<ResponseError, Contact[] | null>>
    add(username: string): Promise<Either<ResponseError, void>>
}