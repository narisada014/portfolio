<template>
  <div>
      <div class="register-card">
        <el-form status-icon ref="ruleForm" label-width="95px" class="form-area" v-loading="loading">
          <el-form-item label="ユーザーID" prop="user_id" class="user-id-area">
            <el-input v-model="userId" autocomplete="off" style="padding-right: 45px;"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email" class="email-area">
            <el-input type="email" v-model="email" style="padding-right: 45px;"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="Password" class="password-area">
            <el-input type="password" v-model="password" autocomplete="off" style="padding-right: 45px;"></el-input>
          </el-form-item>
          <el-form-item class="sign-up-button">
            <el-button type="primary" @click="submitForm">新規登録</el-button>
            <el-button @click="resetForm">リセット</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="confirm-modal" v-if="showModal">
        <transition name="modal" appear>
          <div class="modal modal-overlay">
            <el-input
              class="code-input-area"
              type="input"
              autosize
              placeholder="認証コードを入力してください"
              v-model="code"
              style="width: 300px;"
            >
            </el-input>
            <div class="register-button">
              <el-button class="submit-code" size="mini" type="primary" @click="signUpConfirm">コードを送信</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
  import { Auth } from 'aws-amplify';
  import axios from 'axios';
  export default {
    layout: 'single',
    data() {
      // TODO バリデーションはあとで実装する
      // const validateEmail = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('emailを入力してください'));
      //   } else {
      //     callback();
      //   }
      // };
      // const validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('Please input the password again'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('Two inputs don\'t match!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        userId: '',
        email: '',
        password: '',
        showModal: false,
        code: '',
        showAlert: false,
        loading: false
      };
    },
    methods: {
      submitForm() {
        this.loading = true
        Auth.signUp(this.userId, this.password, this.email)
          .then(res => {
            axios.post('http://localhost:3000/users', {
              userId: this.userId
            }).then(res => {
              if (res.status === 200) {
                this.loading = false
                this.showModal = true
              }
            }).catch(err => {
              console.log(err)
              this.showAlert = true
            })
          })
          .catch(error => {
            console.log(error)
            this.showAlert = true
          })
      },
      resetForm() {
        this.userId = '';
        this.email = '';
        this.password = '';
      },
      signUpConfirm() {
        Auth.confirmSignUp(this.userId, this.code)
          .then(res => {
            this.$router.push('books')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss">
  .register-card {
    display: flex;
    width: 350px;
    height: 350px;
    border: solid 1px #d9d9d9;
    border-radius: 6px;
    margin: auto;
  }

  .form-area {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  .circular {
    margin: auto;
  }

  .user-id-area {
    align-items: center;
  }

  .email-area {
    justify-content: center;
  }

  .password-area {
    justify-content: center;
  }

  .sign-up-button {
    justify-content: center;
  }

  .modal {
    &.modal-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 30;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>

