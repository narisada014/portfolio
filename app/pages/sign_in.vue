<template>
  <div>
    <div class="register-card">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="95px" class="form-area">
        <el-form-item label="Email" prop="email" class="email-area">
          <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass" class="password-area">
          <el-input v-model.number="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass" class="check-pass-area">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="sign-up-button">
          <el-button type="primary" @click="submitForm('ruleForm')">新規登録</el-button>
          <el-button @click="resetForm('ruleForm')">リセット</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('emailを入力してください'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          email: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .register-card {
    display: flex;
    width: 350px;
    height: 350px;
    border: solid 1px #d9d9d9;
    border-radius: 6px;
    /*justify-content: center;*/
    margin: auto;
  }

  .form-area {
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  .email-area {
    align-items: center;
  }

  .password-area {
    justify-content: center;
  }

  .check-pass-area {
    justify-content: center;
  }

  .sign-up-button {
    justify-content: center;
  }
</style>

