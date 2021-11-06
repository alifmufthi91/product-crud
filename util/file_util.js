import multer from 'multer'
import env from '../config/env'
import { v4 } from 'uuid'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, env.FILE_STORAGE)
  },
  filename: function (req, file, cb) {
    const names = file.originalname.split('.')
    cb(null, v4() + '.' + names[names.length - 1])
  }
})

export const uploadFile = multer({ storage: storage, limits: { fileSize: env.FILE_MAXIMUM_SIZE } }).single('file')
