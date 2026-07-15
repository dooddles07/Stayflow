import { NoticeModel } from '../models/notice.model.js'
import { buildCrudController } from '../utils/crudController.js'

export const noticeController = buildCrudController(NoticeModel, 'Notice')
