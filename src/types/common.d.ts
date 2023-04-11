declare interface IAllUsers {
  name: string
  age: number
  about: string
  id: string
}
interface IRender {
  text: string
  record: IAllUsers
}
declare interface IColumn {
  title: string
  dataIndex?: string
  key: string
  width: number
  render?: ((text: any, record: IAllUsers) => JSX.Element) | undefined
}
declare interface IError {
  name: string
  message: string
  statusCode: number
  stack?: string
}
declare interface IFormData {
  name: string
  age: number
  about: string
  id: string
}
