export default interface Messenger {
    deliver(recipient:string,message:string):Promise<void>
    collect(callback:any):Promise<void>
}