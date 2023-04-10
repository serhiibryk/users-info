import { api } from '.'

class CommonService {
  async getCommon(): Promise<any> {
    const res = await api.get('/')
    return res.data
  }
}

export const commonService = new CommonService()
