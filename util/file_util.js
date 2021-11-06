import multer from 'multer'
import env from '../config/env'
import { v4 } from 'uuid'
import path from 'path'
import ParamIllegal from '../error/param_illegal'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, env.FILE_STORAGE)
  },
  filename: function (req, file, cb) {
    const names = file.originalname.split('.')
    cb(null, v4() + '.' + names[names.length - 1])
  }
})

export const uploadFile = multer(
  {
    storage: storage,
    fileFilter: function (req, file, callback) {
      const ext = path.extname(file.originalname)
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return callback(new ParamIllegal('Only images are allowed'))
      }
      callback(null, true)
    },
    limits: { fileSize: env.FILE_MAXIMUM_SIZE }
  }).single('file')
