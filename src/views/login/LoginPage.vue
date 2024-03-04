<template>
  <div class="mainBox">
      <div class="user">
        <div class="loginbox">
          <el-form
            :model="formLogin"
            :rules="rulesLogin"
            class="login"
            v-if="toggleState"
          >
            <h1>登录</h1>
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名"
                class="userName"
                v-model="formLogin.username"
                :prefix-icon="Search"
              >

              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="请输入密码"
                class="passWord"
                v-model="formLogin.password"
                type="password"
                @keyup.enter="loginFormSubmit"
                show-password
              >

              </el-input>
            </el-form-item>
            <div class="exWord">
                <div class="memoryMe">
                    <input type="checkbox" id="checkboxID"/>
                    <label for="checkboxID">记住我</label>
                </div>

              <a href="#">忘记密码</a>
            </div>

            <el-button @click="loginFormSubmit">登录</el-button>
            <div class="tips">
              <div class="register">
                <span @click="changeLogin">注册 →</span>
              </div>
            </div>
          </el-form>
          <el-form
            :model="formRegister"
            :rules="rulesRegister"
            class="eventRegister"
            v-if="!toggleState"
          >
            <h1>注册</h1>
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名"  
                class="userName"
                v-model="formRegister.username"
              >

              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" class="passWord" v-model="formRegister.password">

              </el-input>
            </el-form-item>
            <el-form-item prop="checkpass">
              <el-input
                placeholder="请再次输入密码"
                class="passWord"
                v-model="formRegister.checkpass"
              >

              </el-input>
            </el-form-item>

            <el-button type="primary" @click="registerForm">注册</el-button>
            <div class="tips">
              <div class="register">
                <span @click="changeLogin">← 登录</span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user.js'
import { useCounterStore } from '@/stores/login'
import { useRouter } from 'vue-router';
const router = useRouter()
const toggleState = ref(true)
function changeLogin() {
  toggleState.value = !toggleState.value
}
// 登录页面
const formLogin = ref({
  username: '',
  password: ''
})
const rulesLogin = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    { min: 3, max: 10, message: '长度应在3到10个字符之间', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    { min: 6, max: 15, message: '密码必须是 6-15位 的非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value.includes(' ')){
          callback(new Error('密码不能包含空格'))
        }else{
          callback
        }
      },
      trigger: 'blur'
    }
  ]
})
const loginFormSubmit = async () => {
  await userLoginService(formLogin.value).then((value) => {
    ElMessage.success(value.data.msg)
    const useStore = useCounterStore()
    useStore.setToken(value.data.token)
    console.log(value.data)
    router.push('/')
  },(reason) => {
    console.log(reason.response.data.msg)
    ElMessage.error(reason.response.data.msg)
  })
}

// 注册页面
const formRegister = ref({
  username: '',
  password: '',
  checkpass: ''
})
const rulesRegister = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    { min: 3, max: 10, message: '长度应在3到10个字符之间', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    { min: 6, max: 15, message: '密码必须是 6-15位 的非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value.includes(' ')){
          callback(new Error('密码不能包含空格'))
        }else{
          callback
        }
      },
      trigger: 'blur'
    }
  ],
  checkpass: [
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是 6-15位 的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        // 判断 value 和 当前 form 中收集的 password 是否一致
        if (value !== formRegister.value.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback() // 就算校验成功，也需要callback
        }
      },
      trigger: 'blur'
    }
  ]
})

const registerForm = async () => {
  console.log(formRegister.value)
  await userRegisterService(formRegister.value)
  await alert('注册成功')
}

</script>

<style scoped lang="less">

.mainBox {
  // width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000084;
  background-image: url("@/assets/main/login-bg.png");
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  .user {
    background-image: url("@/assets/main/login-dialog.png");
    margin: 0, auto;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 1065px;
    height: 570px;
    .loginbox{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      .login {
      
        background-color: #fff;
      h1 {
        font-size: 28px;
        line-height: 28px;
        color: #000;
      }
      .userName {
        margin-top: 45px;
        width: 480px;
        height: 40px;
        border: #dedfe6 solid 1px;
        border-radius: 3px;
      }
      .passWord {
        margin-top: 22px;
        width: 480px;
        height: 40px;
        border: #dedfe6 solid 1px;
        border-radius: 3px;
      }
      .exWord {
        width: 480px;
        height: 84px;
        .memoryMe {
          display: flex;
          align-content: center;
          input {
            width: 14px;
            height: 14px;
          }
          label {
            margin-left: 8px;
            font-size: 12px;
            color: #606266;
            line-height: 14px;
          }
        }
        a {
          position: absolute;
          right: 6px;
          font-size: 12px;
          color: #409eff;
        }
      }
      button {
        width: 480px;
        height: 40px;
        background-color: #409eff;
        color: #fff;
        border: 0;
        border-radius: 3px;
        font-size: 12px;
      }
      .tips {
        .register {
          display: flex;
          align-items: center;
          width: 480px;
          height: 100px;
          span {
            color: #909399;
            font-size: 12px;
          }
        }
        p {
          margin-top: -14px;
          font-size: 12px;
          line-height: 40px;
          color: #000084;
        }
      }
    }
    .eventRegister {
      width: 480px;
      background-color: #fff;
      h1 {
        font-size: 28px;
        line-height: 28px;
        color: #000;
      }
      .userName {
        margin-top: 45px;
        width: 480px;
        height: 40px;
        border: #dedfe6 solid 1px;
        border-radius: 3px;
      }
      .passWord {
        margin-top: 22px;
        width: 480px;
        height: 40px;
        border: #dedfe6 solid 1px;
        border-radius: 3px;
      }
      button {
        margin-top: 22px;
        width: 480px;
        height: 40px;
        background-color: #409eff;
        color: #fff;
        border: 0;
        border-radius: 3px;
        font-size: 12px;
      }
      .tips {
        .register {
          display: flex;
          align-items: center;
          width: 480px;
          height: 100px;
          span {
            color: #909399;
            font-size: 12px;
          }
        }
      }
    }
    }

  }
}
</style>
