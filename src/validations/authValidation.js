import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) =>{
    const checkInfor = Joi.object({
        user: Joi.string().required().min(3).max(256).trim().strict(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }})
    })

    try {
        console.log('req.body-validation: ', req.body)

        //Tùy chỉnh abortEarly: false để trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
        await checkInfor.validateAsync(req.body, { abortEarly: false})
        //Validation dữ liệu xong xuôi, hợp lệ thì cho request đi tiếp sang Controller
        next()
        res.status(StatusCodes.CREATED).json({ message: 'POST from Validation: API create new user'})
    } catch (error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            error: new Error(error.message)
        })
    }
}

export const authValidation = {
    createNew
}