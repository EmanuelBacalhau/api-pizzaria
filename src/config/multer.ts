import crypto from 'crypto'
import multer from 'multer'
import { resolve } from 'path'

const multerConfig = {
  upload: (folder: string) => {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '../../uploads', folder),
        filename: (request, file, callback) => {
          const nameHash = crypto.randomBytes(16).toString('hex')
          const fileName = `${nameHash}-${file.originalname}`

          return callback(null, fileName)
        },
      }),
    }
  },
}

export { multerConfig }
