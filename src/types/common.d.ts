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
  dataIndex: string
  key: string
  width?: number
  render?: IRender
}
