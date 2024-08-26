import request from '@/utils/request.js'

// 提供调用注册接口的函数
export const userRegisterService = (registerData) => {
    //借助UrlSearchParams传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

// 登录
export const userLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}

// 获取个人信息
export const userInfoService = () => {
    return request.get('/user/userInfo')
}

// 修改个人信息
export const userUpdateUserInfoService = (userInfoData) => {
    return request.put('/user/update', userInfoData)
}

// 更新头像
export const userUpdateAvatarService = (avatarUrl) => {
    let params = new URLSearchParams()
    params.append('avatarUrl',avatarUrl)
    return request.patch('/user/updateAvatar',params)
}

// 修改密码
export const userUpdatePassword = (userPwdData)=>{
    const params = new URLSearchParams()
    params.append('old_pwd',userPwdData.olePassword)
    params.append('new_pwd',userPwdData.newPassword)
    params.append('re_pwd',userPwdData.rePassword)
    return request.patch('/user/updatePwd',params)
}